import { Box, Button, Center, Flex, Text, VStack, Avatar, HStack} from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/navbar';
import Rate from '../components/review/rate';
import Revieww from '../components/review/review';
import Totall from '../components/review/totalRate';
import ReviewHorizontal from '../components/review/reviewHorizontal';
import Footer from '../components/footer';
import Progresss from '../components/review/progress';

function Review(){
    return(
        <Box px='80px' mb='100px'>
            <Navbar/>
            <Rate/>

            <Text fontSize='50px' fontWeight='extrabold' color='#406343' mt='50px'>ALL REVIEW</Text>
            <HStack justifyContent='space-between'>
                <Revieww/>
                <Progresss/>
                <Totall/>
            </HStack>

            <Box width='100%' height='2px' bgColor='black' color='grey' mt='75px' mb='50px'></Box>

            <ReviewHorizontal/>

            <Footer/>
        </Box>
    )
}

export default Review;