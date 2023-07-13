import { Box, Button, Center, Flex, Text, VStack, Avatar} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

function Account (){
    return(
        <Box width='full' height='200px' bgColor='#90A592' borderRadius='15px' mt='20px'>
            <Box display='flex' justifyContent='right' width='100%' height='100%' pr='50px'>
                <Box display='flex' flexDirection='column' justifyContent='center' height='100%'>
                    <Link to='/premiumPlan'>
                    <Button width='150px' bgColor='#FF9F45' color='white' borderRadius='15px'
                    _hover={{
                        background: "#32502E",
                        color: "white",
                        textDecor: "none",
                        shadow: "2xl"
                        }}
                    >UPGRADE
                    </Button>
                    </Link>
                </Box>
            </Box>

            <Box mt='-70px' ml='50px' display='flex' flexDirection='row'>
                <Avatar
                size={'2xl'}
                src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }/>
                <Box ml='20px'>
                    <Text fontSize='25px' fontWeight='bold' color='white'>Tulus Santoso</Text>
                    <Text fontSize='12px' fontWeight='bold' color='white' ml='3px'>BASIC MEMBER</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Account;