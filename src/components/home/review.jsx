import React from "react";
import { Avatar, HStack, VStack, Box, Text, Button, Flex, ButtonGroup} from '@chakra-ui/react';
import ReviewCard from "./reviewCard";
import Axios from 'axios';
import {ChevronRightIcon} from '@chakra-ui/icons'
import { Link } from "react-router-dom";

class Review extends React.Component {
    state = {
        review: [
            
        ]
    }

    fetchReview = () => {
        Axios.get("http://localhost:2500/review")
        .then((response) => {
            this.setState({review: response.data})
        })
        .catch((err)=>{
            alert("terjadi kesalahan di server!!")
        })
    }

    generateCards = () => {
        return this.state.review.map((val) => {
            return(
                <ReviewCard
                    review={val}
                />
            )
        })
    }

    render() {
        return(
            <Box>
                <Flex flexDirection='row' alignItems='center'>
                    <Text fontSize='50px' color='#32502E' fontWeight='bold'>OUR REVIEW</Text>
                    <Link to='/Review'>
                        <Button mt='10px'ml='10px' colorScheme='orange' borderRadius='20px' size='sm'
                        _hover={{
                            background: "#FAD586",
                            color: "white",
                            textDecor: "none",
                            shadow: "2xl"
                            }}
                        >SEE MORE <ChevronRightIcon/></Button>
                    </Link>
                </Flex>
                <Box display='flex' flexDirection='row' p='20px'>
                    {this.fetchReview()}
                    {this.generateCards()}
                </Box>
            </Box>
        )
    }
}

export default Review;