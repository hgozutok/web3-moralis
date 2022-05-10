import { Button, FormControl, HStack, Input } from "@chakra-ui/react";
import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";

const ModalLogin = ({ isOpen, onClose }) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="none"
      backdropFilter="auto"
      backdropInvert="80%"
      backdropBlur="2px"
    />
  );

  // const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const handleLogin = () => {
    alert("Login Successful");
    onClose();
  };
  return (
    <>
      <Modal motionPreset="scale" isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        {/* <OverlayOne /> */}
        <ModalContent>
          <ModalHeader>Login</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl>
                <Text>Email</Text>
                <Input id="email" type="email" placeholder="Email" />
                <Text mt="2">Password</Text>
                <Input id="password" type="password" placeholder="Password" />
              </FormControl>
            </form>
            <Text>Custom backdrop filters!</Text>
          </ModalBody>
          <ModalFooter>
            <HStack rowGap="4" alignContent="space-around" spacing={4}>
              <Button type="button" colorScheme="blue" onClick={handleLogin}>
                Login
              </Button>
              <Button colorScheme="red" onClick={onClose}>
                Close
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalLogin;
