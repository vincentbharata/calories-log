import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Forms from '../components/signup/forms';
import {logo} from '../assets/index';
import {bgsignup} from '../assets/index';

function SignUp (){
    return(
        <Flex width='100%' height='100vh'>
            <Box width='35%' backgroundImage = {bgsignup} bgColor='#FAD586' display='flex' flexDirection='row' justifyContent='center' alignContent='center'>
                <Center display='flex' flexDirection='row' >
                    <img src={logo} width='80%' height='80%' />
                </Center>
            </Box>
            <Box width='70%' pt='40px' pl='90px' bgGradient='linear(to-t, #FFFFFF, #E0E0C7)'>
                <Text color='#32502E' fontWeight='bold' fontSize='80px'>SIGN UP</Text>
                <Box pt ='20px'>
                    <Forms/>
                </Box>
            </Box>
            
        </Flex>
    )
}

export default SignUp;