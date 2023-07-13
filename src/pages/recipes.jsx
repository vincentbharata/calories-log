import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/navbar';
import MenuBar from '../components/recipes/menubar';

function Recipes(){
    return(
        <Box justifyContent='column' px='80px'>
            <Navbar/>
            <MenuBar/>

            {/* <Footer/> */}
        </Box>
    )
}

export default Recipes;