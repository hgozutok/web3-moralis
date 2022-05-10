import React from "react";
import { Box, Stack } from "@chakra-ui/react";

export const CustomContainer = ({ children }) => {
  return (
    <Stack
      bg="white"
      width="full"
      height="full"
      minWidth="400"
      px="20"
      py="20"
      rounded="lg"
      shadow="lg"
      textAlign="left"
    >
      {children}
    </Stack>
  );
};
