import { Button } from "@chakra-ui/react";
import React from "react";

import { useDisclosure } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import ModalDiag from "../components/modal/ModalDiag";
import ModalLogin from "../components/modal/ModalLogin";

export const Page = () => {
  const modalDiag = useDisclosure();
  const modalLogin = useDisclosure();

  return (
    <>
      <Button
        onClick={() => {
          modalDiag.onOpen();
        }}
      >
        Use Overlay one
      </Button>
      <Button
        onClick={() => {
          modalLogin.onOpen();
        }}
      >
        Login
      </Button>
      <ModalDiag isOpen={modalDiag.isOpen} onClose={modalDiag.onClose} />
      <ModalLogin isOpen={modalLogin.isOpen} onClose={modalLogin.onClose} />
    </>
  );
};
export default Page;
