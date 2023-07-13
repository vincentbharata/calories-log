import { Box, Text, Image, HStack } from "@chakra-ui/react";
import React from "react";
import { smoothies, bowl, burger } from "../../assets";

const box1 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyItems: "center",
  width: "500px",
};

const box2 = {
  display: "flex",
  flexDirection: "column",
  width: "500px",
  paddingLeft: "70px",
  paddingRight: "70px",
};

function Mission() {
  return (
    <Box
      mt="70px"
      mb="70px"
      bgColor="#E0E0C7"
      width="100%"
      height="600px"
      borderRadius="20px"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <Box style={box1}>
        <Box style={box2}>
          <Text fontSize="50px" fontWeight="bold" color="#32502E">
            OUR MISSION
          </Text>
          <Box
            width="350px"
            fontSize="20px"
            fontWeight="medium"
            color="#32502E"
          >
            <Text>
              our goal is to keep people living healthy lives and having enough
              nutrition to carry out their daily activities. We also hope that
              there are no overweight or underweight people
            </Text>
          </Box>
        </Box>
      </Box>

      <HStack width="700px" justifyContent="center">
        <Box mr="10px">
          <Image src={smoothies} mb="15px" />
          <Image src={bowl} mt="15px" />
        </Box>
        <Box ml="10px">
          <Image src={burger} />
        </Box>
      </HStack>
    </Box>
  );
}

export default Mission;
