import React from "react";
import { CustomContainer } from "./CustomContainer";
import { Text, FormLabel, FormControl, Input, Button } from "@chakra-ui/react";
import { useMoralisWeb3Api, useERC20Balances } from "react-moralis";
import Moralis from "moralis";

export const Balance = ({ user }) => {
  const Web3Api = useMoralisWeb3Api();
  const [balance, setBalance] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  const { fetchERC20Balances, data } = useERC20Balances();
  const fetchNativeBalance = async () => {
    const ercBalance = await Web3Api.account
      .getNativeBalance({
        address: user.get("ethAddress"),
        //chain: "rinkeby",
        chain: "ropsten",
      })
      .catch((err) => {
        console.log(err);
      });
    if (ercBalance.balance) {
      setBalance(Moralis.Units.FromWei(ercBalance.balance));
    }
    //  setBalance(ercBalance);
    console.log(ercBalance);
  };
  React.useEffect(() => {
    fetchNativeBalance();
    fetchERC20Balances({
      params: {
        address: user.get("ethAddress"),
        chain: "rinkeby",
      },
    });
  }, [user]);

  return (
    <CustomContainer>
      <Text>
        <b>My ERC20 Tokens </b>
      </Text>
      <Text>
        <b>ETHERIUM</b>
        {balance && balance} ETH
      </Text>
      {data &&
        data.map((token) => (
          <div key={token.symbol}>
            <Text>
              <b>{token.name}</b>
              {Moralis.Units.FromWei(token.balance)} {token.symbol}
            </Text>
          </div>
        ))}
    </CustomContainer>
  );
};
