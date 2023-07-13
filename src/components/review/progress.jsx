import { Box, Button, Center, Flex, Text, VStack, Avatar, Image, FormControl, Input, HStack} from '@chakra-ui/react';
import React from 'react';
import { Icon } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { Progress, ProgressLabel } from "@chakra-ui/progress"

function Progresss (){
    return(
        <Box mt='30px'>
            {/* <HStack> */}


            <VStack>
                <Progress color="pink" value={20} />
                <Progress color="pink" value={20} />
                <Progress color="pink" value={20} mt='10px'/>
                <Progress color="pink" value={20} />
                <Progress color="pink" value={20} />
            </VStack>
                
            {/* </HStack> */}

        </Box>
    )
}

export default Progresss;