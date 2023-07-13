import React from 'react';
import { Avatar, HStack, VStack, Box, Text, Flex } from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';

function ReviewCardHorizon (props) {
    return(
        <Box mt='20px'>
            <Flex flexDirection='row' p='10px'>
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
            <Text fontSize='16px' textAlign='justify' ml='130px' color='#406343'>{props.review.comment}</Text>
        </Box>
    )
}

export default ReviewCardHorizon;