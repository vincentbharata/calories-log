import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';

function TopRecepiesCard (props) {
    return(
        <Box width='300px' height='full'>
            <Image src={props.mainCourse.image_url}/>
            {/* <Text>{props.mainCourse.title}</Text> */}
        </Box>
    )
}

export default TopRecepiesCard;