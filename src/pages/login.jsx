import { Box, Center, Flex } from '@chakra-ui/react';
import React from 'react';
import Forms from '../components/login/forms';
import { bgLogin } from '../assets';

function Login(){
    return(
        <Flex width='100%' height='100vh' display='flex' flexDirection='row' justifyContent='center' alignContent='center'>
            <Box height='full' width='full' backgroundImage={bgLogin} display='flex' flexDirection='row' justifyContent='center' alignContent='center'>
                <Center> 
                    <Box bgColor='#E0E0C7' width='464px' height='613px' display='flex' justifyContent='center' alignContent='center'>
                        <Center>
                            <Forms/>
                        </Center>
                    </Box>
                </Center>
            </Box>
        </Flex>

    )
}

export default Login;