import React from "react";
import { Flex, Center, Button, Text } from "@chakra-ui/react";

export const Header = ({ user, logout, isLoggingOut }) => {
  return (
    <header>
      <Flex
        justifyContent="space-between"
        color="white"
        bg="purple.400"
        width="100vw"
      >
        <Center>
          <Text fontSize="5xl" fontWeight="bold">
            Home
          </Text>
        </Center>
        <Center>
          <Text>{user.getUsername()}</Text>
          <Button ml="4" colorScheme="pink" onClick={() => logout()}>
            Logout
          </Button>
        </Center>
      </Flex>
    </header>
  );
};
