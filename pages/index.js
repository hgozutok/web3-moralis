import {
  Button,
  Flex,
  Text,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";
import { Balance } from "../components/Balance";
import { CustomContainer } from "../components/CustomContainer";
import { Header } from "../components/Header";
import { Nft } from "../components/Nft";
import { Profile } from "../components/Profile";
import { Send } from "../components/Send";
import { Transactions } from "../components/Transactions";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { isAuthenticated, authenticate, user, logout, isLoggingOut } =
    useMoralis();

  if (!isAuthenticated) {
    return (
      <>
        <Head>
          <title>Login | Dashboard</title>
        </Head>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
          bgGradient="linear(to-br, teal.400 ,purple.300)"
        >
          <Text fontSize="5xl" color="white" fontWeight="bold">
            Login to Dashboard
          </Text>
          <Button
            colorScheme="purple"
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
            Login with Metamask
          </Button>
        </Flex>
      </>
    );
  } else
    return (
      <div>
        <Head>
          <title>Dashboard</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Flex direction="column" width="100vw" height="100vh">
          <Header user={user} logout={logout} isLoggingOut={isLoggingOut} />
          <Box flex="1" bg="purple.100" px="44" py="20">
            <Tabs align="center" variant="enclosed">
              <TabList>
                <Tab>
                  <Text fontSize="xl" fontWeight="bold">
                    Profile
                  </Text>
                </Tab>
                <Tab>
                  <Text fontSize="xl" fontWeight="bold">
                    Balance
                  </Text>
                </Tab>
                <Tab>
                  <Text fontSize="xl" fontWeight="bold">
                    Transactions
                  </Text>
                </Tab>
                <Tab>
                  <Text fontSize="xl" fontWeight="bold">
                    NFTs
                  </Text>
                </Tab>
                <Tab>
                  <Text fontSize="xl" fontWeight="bold">
                    Send ETH
                  </Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Profile user={user} />
                </TabPanel>
                <TabPanel>
                  <Balance user={user} />
                </TabPanel>
                <TabPanel>
                  <Transactions user={user} />
                </TabPanel>
                <TabPanel>
                  <Nft user={user} />
                </TabPanel>
                <TabPanel>
                  <Send user={user} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </div>
    );
}
