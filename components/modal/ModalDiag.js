import { Button } from "@chakra-ui/react";
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

// import { useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const ModalDiag = ({ isOpen, onOpen, onClose }) => {
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
      {/* <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Use Overlay one
      </Button>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Use Overlay two....
      </Button>{" "} */}
      {JSON.stringify(isOpen)}
      <Modal motionPreset="scale" isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        {/* <OverlayOne /> */}
        <ModalContent>
          <ModalHeader>Modal Title...</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Button>Spring&Hugo</Button>
            <Text>Custom backdrop modal..!</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ModalDiag;
