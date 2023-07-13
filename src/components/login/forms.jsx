import React from "react";
import {FormControl, FormLabel, Input, Checkbox, Stack, HStack, VStack, Button, Box, Text, Center, Image} from '@chakra-ui/react'
import { logoRow } from "../../assets";
import { Link } from "react-router-dom";

const styleLabelForm = {
    color : '#32502E',
    fontWeight: 'bold',
    fontSize: 'medium'
}

const styleInput = {
    borderColor:'#32502E',
    bgColor: '#F3EFCC',
    borderRadius: '15px'
}

function Forms(){
    return(
        <form>
            <VStack spacing='30px'>
                <Image src={logoRow} sizes='small'/>
                <FormControl>
                    <FormLabel htmlFor="username" style={styleLabelForm}>USERNAME</FormLabel>
                    <Input
                        id="username"
                        name="username"
                        type="username"
                        placeholder="USERNAME"
                        borderColor = '#32502E'
                        bgColor= '#F3EFCC'
                        bgcolor='red'
                        borderRadius= '15px'
                        borderWidth='2px'
                        width='327px'
                        size='lg'
                        boxShadow='xl' 
                        bg='white'
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="password" style={styleLabelForm}>PASSWORD</FormLabel>
                    <Input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="PASSWORD"
                        borderColor = '#32502E'
                        bgColor= '#F3EFCC'
                        borderRadius= '15px'
                        borderWidth='2px'
                        width='327px'
                        size='lg'
                        boxShadow='xl' 
                        bg='white'
                    />
                </FormControl>
            </VStack>

            <Stack spacing={5} direction='row' mt='10px'>
                <Checkbox colorScheme='green' color='#32502E' fontWeight='bold'>
                    REMEMBER ME
                </Checkbox>
            </Stack>

            <Box display='flex' flexDirection='row' margin='20px' justifyContent='center' alignContent='center'>
                <Box display='flex' flexDirection='column'>
                <Link to='/Home'>
                    <Button color='#FF9F45' bgColor='#32502E' borderRadius='20px' width='216px' mb='5px'>
                        {/* <Link to='/Home'>SIGN IN</Link> */}
                        {/* <Link to='/Home'>SIGN IN</Link> */}
                    SIGN IN
                    </Button>
                </Link>

                    <Box display='flex' flexDirection='row' justifyContent='center' mt='15px' mb='15px'>
                        <Center>
                            <Box bgColor='black' height='3px' width='70px' marginLeft='5px' marginRight='5px'></Box>
                            <Text marginLeft='5px' marginRight='5px' fontWeight='extrabold'>
                                OR
                            </Text>
                            <Box bgColor='black' height='3px' width='70px' marginLeft='5px' marginRight='5px'></Box>
                        </Center>
                    </Box>

                    <Button color='#32502E' bgColor='#FFFFF' borderRadius='20px' borderColor='#32502E' width='216px' mt='5px'>
                        Continue with google
                    </Button>
                </Box>
            </Box>

            <Box display='flex' flexDirection='row' justifyContent='center' mt='30px'>
                <Box display='flex' flexDirection='column' justifyContent='center'>
                    <Text color='#32502E' fontWeight='bold' fontSize='18'>
                        Need an account? 
                    </Text>
                </Box>
                <Button color='#FF9F45' bgColor='#32502E' borderRadius='20px' width='120px' ml='20px'>
                    <Link to='/SignUp'>SIGN UP</Link>
                </Button>
            </Box>

        </form>
    )
}

export default Forms;