import React from "react";
import { Box, Text } from '@chakra-ui/react';
import Axios from 'axios';
import ReviewCardHorizon from './reviewCardHorizon';


class ReviewHorizontal extends React.Component {
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
                <ReviewCardHorizon
                    review={val}
                />
            )
        })
    }

    render(){
        return(
            <Box>
                {this.fetchReview()}
                {this.generateCards()}
            </Box>
        )
    }
}

export default ReviewHorizontal;