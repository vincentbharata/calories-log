import { Box,  Text, Image, VStack } from '@chakra-ui/react';
import React from 'react';

import { brain } from '../../assets';

function Focus(){
    return( 
        <Box mt='10px' mb='10px' width='45%' cursor='pointer'>
            <Image src={ brain } width='550px' height='full' borderRadius='15px'/>
            <VStack width='550px' mt='10px' pr='10px' pl='10px'>
                <Text fontSize='22px' color='#32502E' fontWeight='bold' textAlign='center'>Tingkatkan Kesehatan Otak Dengan 6 Jenis Makanan Ini</Text>
                <Text fontSize='14px' color='#32502E' mt='5px'>by Edelwis Lararenjana</Text>
            </VStack>
            
        </Box>
    )
}

export default Focus;