import { Box, Center, Flex, HStack, Text } from '@chakra-ui/react';
import Navbar from '../components/navbar';
import Account from '../components/profile/account';
import ProfileSettings from '../components/profile/profileSettings';
import Bmi from '../components/profile/bmi';
import Footer from '../components/footer';

function Profile (){
    return(
        <Box px='80px'>
            <Navbar/>
            <Account/>
            <HStack mt='100px' justifyContent='space-between' mb='70px'>
                <ProfileSettings/>
                <Bmi/>
            </HStack>
            <Footer/>
        </Box>
    )
}

export default Profile;