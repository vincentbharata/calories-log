import { Box,   Text } from '@chakra-ui/react';
import React from 'react';

function Intro(){
    return( 
        <Box mt='50px' mb='50px'>
            <Box>
                <Text fontSize='50px' fontWeight='bold' color='#32502E' textAlign='center'>ABOUT US</Text>
            </Box>

            <Box>
                <Text fontSize='30px' fontWeight='medium' color='#32502E' textAlign='center' mt='30px' mb='30px'>
                    CALORIES LOG is a website to help you meet your nutritional needs
                    and control your boday weight to an ideal level and there are help tools
                    that can be adjusted according to the user's wishes.
                </Text>
            </Box>

        </Box>
    )
}

export default Intro;