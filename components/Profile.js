import React from "react";
import { CustomContainer } from "./CustomContainer";
import { Text, FormLabel, FormControl, Input, Button } from "@chakra-ui/react";

export const Profile = ({ user }) => {
  return (
    <CustomContainer>
      <Text>
        {" "}
        <b>Username :</b>
        {user.getUsername()}
      </Text>
      <Text>
        {" "}
        <b>Wallet Address :</b>
        {user.get("ethAddress")}
      </Text>
      <form>
        <FormControl>
          <FormLabel htmlFor="username"> Set a new username</FormLabel>{" "}
          <Input name="username" type="text" />
          <Button colorScheme="cyan">Save</Button>
        </FormControl>
      </form>
    </CustomContainer>
  );
};
