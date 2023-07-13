import React from "react";
import {FormControl, FormLabel, Input, Stack, Box, HStack, VStack,Text, Button} from '@chakra-ui/react'
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import { Link } from "react-router-dom";

const styleLabelForm = {
    color : '#32502E',
    fontWeight: '500'
}

const styleInput = {
    borderColor:'#32502E',
    bgColor: '#F3EFCC',
    borderRadius: '15px'
}

const linkToSignIn = {
    color: '#FF9F45',
    ml: '5px'
}

function Forms(){
    return(
        <form>
            <HStack spacing='105px'>
                <VStack spacing='40px'>
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
                            width='327px'
                            size='lg'
                            boxShadow='xl' bg='white'
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="email" style={styleLabelForm}>EMAIL</FormLabel>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="EMAIL"
                            borderColor='#32502E'
                            bgColor= '#F3EFCC'
                            borderRadius= '15px'
                            borderWidth='2px'
                            width='327px'
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
                            width='327px' 
                            size='lg'
                            boxShadow='xl' bg='white'
                        />
                    </FormControl>
                    
                </VStack>

                <VStack spacing='40px'>
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
                            width='327px'
                            size='lg'
                            boxShadow='xl' bg='white'
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="username" style={styleLabelForm}>USERNAME</FormLabel>
                        <Input
                            id="username"
                            name="username"
                            type="username"
                            placeholder="USERNAME"
                            borderColor='#32502E'
                            bgColor= '#F3EFCC'
                            borderRadius= '15px'
                            borderWidth='2px'
                            width='327px'
                            size='lg'
                            boxShadow='xl' bg='white'
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="confirmPassword" style={styleLabelForm}>CONFIRM PASSWORD</FormLabel>
                        <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="confirmPassword"
                            placeholder="CONFIRM PASSWORD"
                            borderColor='#32502E'
                            bgColor= '#F3EFCC'
                            borderRadius= '15px'
                            borderWidth='2px'
                            width='327px'
                            size='lg'
                            boxShadow='xl' bg='white'
                        />
                    </FormControl>
                </VStack>
            </HStack>
            <Stack spacing={5} direction='row' mt='25px' flexDirection='column'>
                <Checkbox colorScheme='green'>
                    <Text color='#32502E' fontWeight='bold'>Yes, I want to receive Calories Log emails</Text>
                </Checkbox>
            </Stack>
            <VStack mt='40px'>
                {/* <Box boxShadow='xl' bg='white'> */}
                    <Button color='#FF9F45' bgColor='#32502E' borderRadius='20px' width='216px'>
                            CREATE ACCOUNT
                    </Button>
                {/* </Box> */}
                
                <Box display='flex' flexDirection='row' pt='20px'>
                    <Text color='#32502E' fontWeight='bold'>Already have an account? </Text>
                    <Link to='/' style={linkToSignIn}>SIGN IN</Link>
                    {/* <Text color='#FF9F45' ml='5px'>SIGN IN</Text> */}
                </Box>
            </VStack>
        </form>
    )
}

export default Forms;