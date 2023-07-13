import { Box, Center, Flex, HStack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/navbar';
import Trending from '../components/article/trending';
import Focus from '../components/article/focus';
import Footer from '../components/footer';
import Cart from '../components/article/cart';

function Article(){
    return(
        <Box justifyContent='column' px='80px'>
            <Navbar/>
            <HStack mt='20px'>
                <Center>
                <Focus/>
                <Trending/>
                </Center>
            </HStack>

            <VStack mt='50px' mb='200px'>
                <Cart/>
                <Cart/>
                <Cart/>
            </VStack>

            {/* <Footer/> */}
        </Box>
            
    )
}

export default Article;