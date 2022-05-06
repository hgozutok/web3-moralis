import React from "react";
import { CustomContainer } from "./CustomContainer";
import { useMoralisWeb3Api } from "react-moralis";
import { Divider } from "@chakra-ui/react";

export const Transactions = ({ user }) => {
  const Web3Api = useMoralisWeb3Api();
  const [transactions, setTransactions] = React.useState([]);

  const fetchTransactions = async () => {
    const data = await Web3Api.account
      .getTransactions({
        address: user.get("ethAddress"),
        chain: "ropsten",
      })
      .catch((err) => {
        console.log(err);
      });
    if (data.result) {
      setTransactions(data.result);
      console.log(transactions);
    }
  };
  React.useEffect(() => {
    fetchTransactions();
  }, [user]);

  return (
    <CustomContainer>
      <h1>Transactions</h1>
      {transactions ? (
        transactions.map((transaction) => (
          <div key={transaction.transaction_index}>
            <h2>{transaction.from_address}</h2>
            <h3>{transaction.to_address}</h3>
            <h3>{transaction.gas_price}</h3>
            <h3>{transaction.value}</h3>
            <h3>{transaction.block_timestamp}</h3>
            <Divider />
          </div>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </CustomContainer>
  );
};
