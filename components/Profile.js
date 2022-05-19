import React from "react";
import { CustomContainer } from "./CustomContainer";
import {
  Text,
  FormLabel,
  FormControl,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useMoralis } from "react-moralis";

export const Profile = ({ user }) => {
  const { setUserData, isUserUpdating } = useMoralis();
  const [name, setName] = React.useState("");
  const toast = useToast();
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
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          if (name.trim() !== "") {
            setUserData({
              username: name,
            })
              .then(() => {
                setName("");
                toast({
                  title: "Success.",
                  description: "Username updated.",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              })
              .catch((error) => {
                toast({
                  title: "Error.",
                  description: error.message,
                  status: "error",
                  duration: 9000,
                  isClosable: true,
                });
              });
          } else {
            toast({
              title: "Error.",
              description: "Username cannot be empty.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        }}
      >
        <FormControl>
          <FormLabel htmlFor="username"> Set a new username</FormLabel>{" "}
          <Input
            name="username"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="New username"
          />
          <Button type="submit" disabled={isUserUpdating} colorScheme="cyan">
            Save
          </Button>
        </FormControl>
      </form>
    </CustomContainer>
  );
};
