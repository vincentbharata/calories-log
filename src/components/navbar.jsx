import React from "react";
import {Stack, Box, HStack, VStack,Text, Button, Menu, MenuButton, Avatar, Image, Flex, MenuList, MenuItem, MenuDivider} from '@chakra-ui/react'
import { logoRow } from "../assets";
import { Link } from "react-router-dom";
import { user, logOut, fav } from "../assets";
import Profile from "../pages/profile";

const styleLabelForm = {
    color : '#32502E',
    fontWeight: 'medium',
    fontSize: '15px'
}

const styleProfile = {
    color : '#406343',
    fontWeight: 'medium',
    fontSize: '13px'
}

const stylePopUp = {
    marginLeft : '10px',
    marginRight : '20px'
}

const styleMenuList = {
    width : '100px'
}

function Navbar () {
    return(
        <Box>
            <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
                
                <Box>
                    <Image src={logoRow} width='175px' height='51.33px'/>
                </Box>

                <Flex>
                    <HStack spacing={7}>
                        <Link to='/Home' style={styleLabelForm}>HOME</Link>
                        <Link to='/Recipes' style={styleLabelForm}>RECIPIES</Link>
                        <Link to='/Article' style={styleLabelForm}>ARTICLES</Link>
                        <Link to='/PremiumPlan' style={styleLabelForm}>PREMIUM PLAN</Link>
                        <Link to='/AboutUs' style={styleLabelForm}>ABOUT US</Link>
                    </HStack>
                </Flex>

                <Flex flexDirection='row' justifyItems='center' alignItems='center'>
                    <Menu>
                        <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                            <Avatar
                            size={'md'}
                            src={
                                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                            }/>
                        </MenuButton>
                        <MenuList style={styleMenuList}>
                            <Link to='/Profile'>
                                <MenuItem style={styleLabelForm}> 
                                    <Image src={user} style={stylePopUp}/>
                                    Profile
                                </MenuItem>
                            </Link>
                            <MenuItem style={styleLabelForm}>
                                <Image src={fav} style={stylePopUp}/>
                                Favorite
                            </MenuItem>
                            <MenuItem style={styleLabelForm}>
                                <Image src={logOut} style={stylePopUp}/>
                                Log Out
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Navbar;