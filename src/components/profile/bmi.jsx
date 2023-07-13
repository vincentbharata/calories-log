import {FormControl, FormLabel, Input, Stack, Box, HStack, VStack, Text, Button, Avatar, Center, Flex, Image} from '@chakra-ui/react'
import React from 'react';
import { bmi } from '../../assets';

const styleInput = {
    borderColor:'#32502E',
    bgColor: '#F3EFCC',
    borderRadius: '15px'
}

function Bmi (){
    return(
        <Box width='530px' height='450px' bgColor='#F3F3F3' borderRadius='15px' pt='20px'>
            <Text textAlign='center' fontWeight='bold' fontSize='24px' color='#32502E'>BMI INDICATOR</Text>
            <Center>
            <Box ml='30px' width='400px' display='flex' flexDirection='row' mt='20px' justifyContent='space-between' justifyItems='center' alignItems='center'>
                <FormControl>
                    {/* <FormLabel htmlFor="email" style={styleLabelForm}>AGE</FormLabel> */}
                    <Input
                        id="age"
                        name="age"
                        type="age"
                        placeholder="AGE"
                        borderColor='#32502E'
                        bgColor= '#F3EFCC'
                        borderRadius= '15px'
                        borderWidth='2px'
                        width='110px'
                        size='lg'
                        boxShadow='xl' 
                        bg='white'
                    />
                </FormControl>
                <FormControl>
                    <Input
                        id="age"
                        name="age"
                        type="age"
                        placeholder="HEIGHT"
                        borderColor='#32502E'
                        bgColor= '#F3EFCC'
                        borderRadius= '15px'
                        borderWidth='2px'
                        width='110px'
                        size='lg'
                        boxShadow='xl' bg='white'
                    />
                </FormControl>
                <FormControl>
                    <Input
                        id="age"
                        name="age"
                        type="age"
                        placeholder="WEIGHT"
                        borderColor='#32502E'
                        bgColor= '#F3EFCC'
                        borderRadius= '15px'
                        borderWidth='2px'
                        width='110px'
                        size='lg'
                        boxShadow='xl' bg='white'
                    />
                </FormControl>
            </Box>
            </Center>
            <VStack mt='15px'>
                <Image src={bmi}/>
                <Button color='#FF9F45' bgColor='#32502E' borderRadius='20px' width='180px' mt='10px'
                    _hover={{
                        background: "#FAD586",
                        color: "#32502E",
                        textDecor: "none",
                        shadow: "2xl"
                    }}
                >
                    CALCULATE
                </Button>
            </VStack>
        </Box>
    )
}

export default Bmi;