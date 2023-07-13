// import { Box, Button, Center, Flex, Text, VStack, Avatar} from '@chakra-ui/react';
import {FormControl, FormLabel, Input, Stack, Box, HStack, VStack, Text, Button, Avatar, Center, Flex} from '@chakra-ui/react'
import React from 'react';

const styleLabelForm = {
    color : '#32502E',
    fontWeight: '500'
}

const styleInput = {
    borderColor:'#32502E',
    bgColor: '#F3EFCC',
    borderRadius: '15px',
}

const linkToSignIn = {
    color: '#FF9F45',
    ml: '5px'
}

function ProfileSettings(){
    return(
        <Box>
            <Text color='#32502E' fontWeight='bold' fontSize='25px'>PROFILE SETTINGS</Text>
            
            <HStack spacing='50px' mt='20px'>
                <VStack spacing='20px'>
                    <FormControl>
                        <FormLabel htmlFor="firstname" style={styleLabelForm}>FIRST NAME</FormLabel>
                        <Input
                            id="firstname"
                            name="firstname"
                            type="firstname"
                            placeholder="FIRST NAME"
                            borderColor='#32502E'
                            bgColor= '#F3EFCC'
                            borderRadius= '15px'
                            borderWidth='2px'
                            width='310px'
                            size='lg'
                            boxShadow='xl' bg='white'
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="email" style={styleLabelForm}>GENDER</FormLabel>
                        <Input
                            id="gender"
                            name="gender"
                            type="gender"
                            placeholder="GENDER"
                            borderColor='#32502E'
                            bgColor= '#F3EFCC'
                            borderRadius= '15px'
                            borderWidth='2px'
                            width='310px'
                            size='lg'
                            boxShadow='xl' bg='white'
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="password" style={styleLabelForm}>PASSWORD</FormLabel>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="PASSWORD"
                            borderColor='#32502E'
                            bgColor= '#F3EFCC'
                            borderRadius= '15px'
                            borderWidth='2px'
                            width='310px' 
                            size='lg'
                            boxShadow='xl'
                        />
                    </FormControl>
                    
                </VStack>

                <VStack spacing='20px'>
                    <FormControl>
                        <FormLabel htmlFor="lastname" style={styleLabelForm}>LAST NAME</FormLabel>
                        <Input
                            id="lastname"
                            name="lastname"
                            type="lastname"
                            placeholder="LAST NAME"
                            borderColor='#32502E'
                            bgColor= '#F3EFCC'
                            borderRadius= '15px'
                            borderWidth='2px'
                            width='310px'
                            size='lg'
                            boxShadow='xl' bg='white'
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="username" style={styleLabelForm}>DATE OF BIRTH</FormLabel>
                        <Input
                            id="dob"
                            name="dob"
                            type="dob"
                            placeholder="DD-MM-YYYY"
                            borderColor='#32502E'
                            bgColor= '#F3EFCC'
                            borderRadius= '15px'
                            borderWidth='2px'
                            width='310px'
                            size='lg'
                            boxShadow='xl' bg='white'
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="confirmPassword" style={styleLabelForm} >CONFIRM NEW PASSWORD</FormLabel>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="confirmPassword"
                            placeholder="CONFIRM NEW PASSWORD"
                            borderColor='#32502E'
                            bgColor= '#F3EFCC'
                            borderRadius= '15px'
                            borderWidth='2px'
                            width='310px'
                            size='lg'
                            boxShadow='xl' bg='white'
                        />
                    </FormControl>
                </VStack>
            </HStack>

            <Center mt='30px'> 
                <Button color='#FF9F45' bgColor='#32502E' borderRadius='20px' width='216px'
                    _hover={{
                    background: "#FAD586",
                    color: "#32502E",
                    textDecor: "none",
                    shadow: "2xl"
                    }}
                >
                    UPDATE PROFILE
                </Button>
            </Center>
            
        </Box>
    )
}

export default ProfileSettings;