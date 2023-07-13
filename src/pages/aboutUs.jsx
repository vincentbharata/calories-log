import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/navbar';
import Intro from '../components/aboutUs/intro';
import Mission from '../components/aboutUs/mission';
import Value from '../components/aboutUs/value';
import Footer from '../components/footer';



function AboutUs(){
    return(
        <Box justifyContent='column' width='100%' px='80px'>
            <Navbar/>
            <Intro/>
            <Mission/>
            <Value/>
            <Footer/>
        </Box>
    )
}

export default AboutUs;