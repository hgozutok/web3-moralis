import React from "react";
import { CustomContainer } from "./CustomContainer";
import { useNFTBalances } from "react-moralis";
import { Image } from "@chakra-ui/react";

export const Nft = ({ user }) => {
  const { getNFTBalances, data } = useNFTBalances();
  const [nftBalances, setNftBalances] = React.useState([]);
  const [metadata, setMetadata] = React.useState([]);
  const fetchNFTBalances = async () => {
    const data = await getNFTBalances({
      address: user.get("ethAddress"),
      chain: "rinkeby",
    }).catch((err) => {
      console.log(err);
    });
    if (data) {
      setNftBalances(data.result);
      data.result.forEach((element) => {
        let el;
        element.metadata ? (el = JSON.parse(element.metadata)) : null;
        setNftBalances([...nftBalances, ...el]);
        console.log("img", el ? el.image : "noo");
      });

      console.log("nftBalances", nftBalances);
      console.log(data.result);
      console.log("metadata", metadata);
    }
  };

  React.useEffect(() => {
    fetchNFTBalances();
  }, []);

  return (
    <CustomContainer>
      <h1>NFTs</h1>
      {nftBalances ? (
        nftBalances.map((nft) => (
          <div key={nft.token_id}>
            {/* {JSON.stringify(nft)} */}

            {nft.metadata && <Image width="200px" src={el.image} alt="NFT" />}
            <h2>{nft.token_id}</h2>
            <h3>{nft.token_name}</h3>
            <h3>{nft.symbol}</h3>
            <h3>{nft.token_uri}</h3>
            <h3>{nft.token_address}</h3>
            <h3>{nft.owner_of}</h3>
            <div />
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </CustomContainer>
  );
};
