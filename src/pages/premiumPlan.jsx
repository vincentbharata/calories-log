import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Plan from '../components/premiumPlan/plan';


function PremiumPlan(){
    return(
        <Box>
            <Box justifyContent='column' width='100%' px='80px'>
                <Navbar/>
            </Box>
            <Box width='100%'>
                <Box pt='50px' mt='10px' mb='50px' justifyContent='column' width='100%' px='80px'>
                    <Text fontSize='30px' fontWeight='bold' color='#FF9F45'>Join Premium Plan</Text>
                    <Text fontSize='50px' fontWeight='bold' color='#32502E'>PICK THE RIGHT PLAN</Text>

                    <Box mt='30px' mb='30px'>
                        <Plan/>
                    </Box>
                </Box>
                
            </Box>
            <Footer/>
        </Box>
    )
}

export default PremiumPlan;