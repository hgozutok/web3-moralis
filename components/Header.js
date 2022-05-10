import React from "react";
import { Flex, Center, Button, Text } from "@chakra-ui/react";

export const Header = ({ user, logout, isLoggingOut }) => {
  return (
    <header>
      <Flex
        justifyContent="space-between"
        color="white"
        bg="blue.700"
        width="100vw"
        minWidth="520"
      >
        <Center>
          <Text fontSize="5xl" fontWeight="bold">
            Home
          </Text>
        </Center>
        <Center>
          <Text>{user.getUsername()}</Text>
          <Button ml="4" colorScheme="blue" onClick={() => logout()}>
            Logout
          </Button>
        </Center>
      </Flex>
    </header>
  );
};
