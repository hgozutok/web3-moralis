import { Button, Flex, Stack } from "@chakra-ui/react";
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
import { useMoralis } from "react-moralis";

const LoginPop = ({ isOpen, onClose }) => {
  const { isAuthenticated, authenticate, user, logout, isLoggingOut } =
    useMoralis();
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

  return (
    <>
      <Modal
        motionPreset="scale"
        size="xl"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
      >
        {overlay}

        <ModalContent>
          <ModalHeader>Login to Dashboard</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack direction={["column", "row"]} spacing="24px">
              <Button
                colorScheme="purple"
                size="lg"
                onClick={() =>
                  authenticate({
                    signingMessage: "Login to Dashboard",
                  })
                }
              >
                Login with Metamask
              </Button>

              <Button
                colorScheme="teal"
                size="lg"
                onClick={() =>
                  authenticate({
                    provider: "walletconnect",
                    mobileLinks: [
                      "rainbow",
                      "metamask",
                      "argent",
                      "trust",
                      "imtoken",
                      "pillar",
                    ],
                    signingMessage: "Login to Dashboard",
                  })
                }
              >
                Login with WalletConnect
              </Button>
            </Stack>
          </ModalBody>
          <ModalFooter>
            {/* <Button colorScheme="red" onClick={onClose}>
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default LoginPop;
