import { Box, Button, Center, Flex, Text, VStack, Avatar, Image, FormControl, Input, HStack} from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'

function Totall (){
    return(
        <Box mt='30px' width='100%' height='100%' display='flex' flexDirection='column' justifyItems='center' alignItems='center'>
            <Text textAlign='center' fontSize='50px' fontWeight='extrabold'>4.7</Text>
            <Center>
                <HStack>
                    <StarIcon w={14} h={14} color='orange'/>
                    <StarIcon w={14} h={14} color='orange'/>
                    <StarIcon w={14} h={14} color='orange'/>
                    <StarIcon w={14} h={14} color='orange'/>
                    <StarIcon w={14} h={14} color='orange'/>
                </HStack>
            </Center>
            <Text textAlign='center' fontSize='20px' color='#406343' mt='20px'>27.567 REVIEWS </Text>
           
            

        </Box>
    )
}

export default Totall;