import React from "react";
import { Box } from "@chakra-ui/react";

export const CustomContainer = ({ children }) => {
  return (
    <Box
      bg="white"
      width="full"
      height="full"
      px="20"
      py="20"
      rounded="lg"
      shadow="lg"
      textAlign="left"
    >
      {children}
    </Box>
  );
};
