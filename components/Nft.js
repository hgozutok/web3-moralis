import React from "react";
import { CustomContainer } from "./CustomContainer";
import { useNFTBalances } from "react-moralis";

export const Nft = ({ user }) => {
  const { getNFTBalances, data } = useNFTBalances();
  const [nftBalances, setNftBalances] = React.useState([]);
  const fetchNFTBalances = async () => {
    const data = await getNFTBalances({
      address: user.get("ethAddress"),
      chain: "rinkeby",
    }).catch((err) => {
      console.log(err);
    });
    if (data.result) {
      setNftBalances(data.result);
      console.log(nftBalances);
      console.log(data);
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
            <h2>{nft.token_id}</h2>
            <h3>{nft.token_name}</h3>
            <h3>{nft.token_symbol}</h3>
            <h3>{nft.token_uri}</h3>
            <h3>{nft.token_uri_scheme}</h3>
            <h3>{nft.token_uri_host}</h3>
            <h3>{nft.token_uri_path}</h3>
            <h3>{nft.token_uri_query}</h3>
            <h3>{nft.token_uri_fragment}</h3>
            <h3>{nft.token_uri_username}</h3>
            <h3>{nft.token_uri_password}</h3>
            <h3>{nft.token_uri_port}</h3>
            <div />
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </CustomContainer>
  );
};
