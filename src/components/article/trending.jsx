import { Box,  Text, Image, HStack} from '@chakra-ui/react';
import React from 'react';

import { eye, fruit, meat } from '../../assets';

function Trending(){
    return( 
        <Box mt='10px' mb='10px' width='40%'>
            <Text fontWeight='bold' fontSize='25px' color='#32502E'>TRENDING</Text>

            <HStack mt='10px' mb='10px'>
                <Box width='60%'>
                    <Text fontSize='16px' color='#32502E' fontWeight='bold'>Pentingnya Makanan Sehat Bagi Tubuh, Kenali Jenis dan Kandungan Nutrisinya</Text>
                    <Text fontSize='14px' color='#32502E' mt='5px'>by Edelwis Lararenjana</Text>
                </Box>
                <Box>
                    <Image src={fruit} width='200px' height='full' borderRadius='10px'/>
                </Box>
            </HStack>

            <HStack mt='10px' mb='10px'>
                <Box width='60%'>
                    <Text fontSize='16px' color='#32502E' fontWeight='bold'>6 Jenis Makanan Kaya Vitamin untuk Mata</Text>
                    <Text fontSize='14px' color='#32502E' mt='5px'>by dr. Airindya Bella</Text>
                </Box>
                <Box>
                    <Image src={eye} width='200px' height='full' borderRadius='10px'/>
                </Box>
            </HStack>

            <HStack mt='10px' mb='10px'>
                <Box width='60%'>
                    <Text fontSize='16px' color='#32502E' fontWeight='bold'>Penting, Ini 6 Makanan yang Bisa Meningkatkan Metabolismea</Text>
                    <Text fontSize='14px' color='#32502E' mt='5px'>by Desyinta Nuraini</Text>
                </Box>
                <Box>
                    <Image src={meat} width='200px' height='full' borderRadius='10px'/>
                </Box>
            </HStack>

            
            
        </Box>
    )
}

export default Trending;