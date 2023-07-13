import React from 'react';
import { Avatar, HStack, VStack, Box, Text, Button, Flex, ButtonGroup, SimpleGrid} from '@chakra-ui/react';
import Axios from 'axios';
import TopRecepiesCard from '../topRecepiesCard'

class MainCourse extends React.Component {
    state = {
        mainCourse: [

        ]
    }

    fetchData = () => {
        Axios.get("http://localhost:2000/mainCourse")
        .then((response) => {
            this.setState({mainCourse: response.data})
        })
        .catch((err)=>{
            alert("terjadi kesalahan di server!!")
        })
    }

    generateCards = () => {
        return this.state.mainCourse.map((val) => {
            return(
                <TopRecepiesCard
                    mainCourse={val}
                />
            )
        })
    }

    render(){
        return(
            <SimpleGrid columns={3} spacing='30px' alignItems='center'>
                {this.fetchData()}
                {this.generateCards()}
            </SimpleGrid>
        )
    }
}

export default MainCourse;