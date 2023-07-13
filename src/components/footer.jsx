import React from "react";
import {Stack, Box, HStack, VStack,Text, Button, Menu, MenuButton, Avatar, Image, Flex, MenuList, MenuItem, MenuDivider, Center} from '@chakra-ui/react'
import { logoRow } from "../assets";
import { ig, phone, wa, email } from "../assets";

const image = {
    width : '50px',
    height : 'full',
    marginLeft : '15px',
    marginRight : '15px'
}

function Footer() {
    return(
        <Box width='100%' pt='30px' pb='30px' mt='50px' mb='50px'>
            <Center>
                <Image src={logoRow} width='180px' height='full'/>
            </Center>
            
            <Center mt='25px'>
                <Image src={ig} style={image}/>
                <Image src={phone} style={image}/>
                <Image src={email} style={image}/>
                <Image src={wa} style={image}/>
            </Center>
            
        </Box>
    )
}

export default Footer;