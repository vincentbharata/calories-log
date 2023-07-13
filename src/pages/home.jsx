import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navbar";
import { partner } from "../assets";
import Landing from "../components/home/landing";
import Services from "../components/home/services";
import ImportantNotice from "../components/home/importantNotice";
import TopRecepies from "../components/home/topRecipies";
import Articles from "../components/home/article";
import Footer from "../components/footer";
import Review from "../components/home/review";

function Home() {
  return (
    <Flex>
      <Box justifyContent="column" width="100%" px="80px">
        <Box width="100%">
          <Navbar />
        </Box>

        <Landing />

        <Box>
          <Image src={partner} />
        </Box>

        <Services />

        <ImportantNotice />

        <TopRecepies />

        <Articles />

        <Review />

        <Footer />
      </Box>
    </Flex>
  );
}

export default Home;
