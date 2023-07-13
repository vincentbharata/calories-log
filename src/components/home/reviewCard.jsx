import React from "react";
import { Avatar, HStack, VStack, Box, Text, Flex } from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';

function ReviewCard(props) {
    return (
        <Box 
        maxW='568px' 
        height='471px' 
        p='25px'  
        ml='50px'
        bg={'white'}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}
        >
            <Flex flexDirection='row' alignItems='center' p='10px'>
                <Avatar bg='teal.500' width='100px' height='full'/>
                <Flex flexDirection='column' ml='25px'>
                    <Text fontSize='30px' color='#406343' fontWeight='bold'>{props.review.username}</Text>
                        <StarRatings 
                            starRatedColor="#FFC107"
                            numberOfStars={5}
                            rating={props.review.rate}
                            name='rating'
                            starDimension="30px"
                        />
                </Flex>
            </Flex>
            <Text fontSize='16px' textAlign='justify' mt='10px'>{props.review.comment}</Text>
        </Box>
    )
}

export default ReviewCard;