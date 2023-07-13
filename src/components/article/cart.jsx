import { Box, Text, Image, HStack, VStack } from "@chakra-ui/react";

import React from "react";
import { smoothies2, baby, salad } from "../../assets";

import { Link } from "react-router-dom";

function Cart() {
  return (
    
    <HStack
      mt="10px"
      mb="10px"
      px="80px"
      justifyContent="space-between"
      width="100%"
    >
      <Link to="/DetailArticle">
        <Box
          width="300px"
          cursor="pointer"
          overflow="hidden"
          borderRadius="15px"
          shadow="md"
          mt="25px"
          mb="25px"
        >
          <Image src={smoothies2} width="300px" />
          <VStack pl="10px" pr="10px" pb="10px" pt="10px">
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize="18px"
              color="#32502E"
            >
              Konsumsi Makanan Bergizi dan Bernutrisi untuk Hidup Sehat
            </Text>
            <Text textAlign="center" fontSize="14px" color="#32502E">
              Halodoc, Jakarta – Mengonsumsi makanan bergizi erat kaitannya
              dengan hidup sehat. Pasalnya, pola makan yang tepat dapat...
            </Text>
            <Text textAlign="center" fontSize="14px" color="#32502E">
              by Desyinta Nuraini
            </Text>
          </VStack>
        </Box>
      </Link>

      <Box
        width="300px"
        cursor="pointer"
        overflow="hidden"
        borderRadius="15px"
        shadow="md"
      >
        <Image src={baby} width="300px" />
        <VStack pl="10px" pr="10px" pb="10px" pt="10px">
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize="18px"
            color="#32502E"
          >
            Konsumsi Makanan Bergizi dan Bernutrisi untuk Hidup Sehat
          </Text>
          <Text textAlign="center" fontSize="14px" color="#32502E">
            Halodoc, Jakarta – Mengonsumsi makanan bergizi erat kaitannya dengan
            hidup sehat. Pasalnya, pola makan yang tepat dapat...
          </Text>
          <Text textAlign="center" fontSize="14px" color="#32502E">
            by Desyinta Nuraini
          </Text>
        </VStack>
      </Box>

      <Box
        width="300px"
        cursor="pointer"
        overflow="hidden"
        borderRadius="15px"
        shadow="md"
      >
        <Image src={salad} width="300px" />
        <VStack pl="10px" pr="10px" pb="10px" pt="10px">
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize="18px"
            color="#32502E"
          >
            Konsumsi Makanan Bergizi dan Bernutrisi untuk Hidup Sehat
          </Text>
          <Text textAlign="center" fontSize="14px" color="#32502E">
            Halodoc, Jakarta – Mengonsumsi makanan bergizi erat kaitannya dengan
            hidup sehat. Pasalnya, pola makan yang tepat dapat...
          </Text>
          <Text textAlign="center" fontSize="14px" color="#32502E">
            by Desyinta Nuraini
          </Text>
        </VStack>
      </Box>
    </HStack>
    // </ScaleFade>
  );
}

export default Cart;
