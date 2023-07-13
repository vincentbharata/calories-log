import { Box, Button, Center, Flex, Text, VStack, Avatar, Image, FormControl, Input} from '@chakra-ui/react';
import React from 'react';
import { Star5 } from '../../assets';

function Rate (){
    return(
        <Box>
            <Text fontSize='40px' color='#32502E' fontWeight='bold' textAlign='center' mt='50px'>REVIEW AND RATINGS</Text>
            <Text fontSize='22px'color='#32502E' textAlign='center' mt='40px'>RATE YOUR EXPERIENCE</Text>
            <Center mt='15px'>
                <Image src={ Star5 } width='300px'/>
            </Center>

            <Center>
            <Box width='800px' display='flex' flexDirection='row' alignItems='center' justifyItems='center' mt='40px'>
                <FormControl>
                    <Input
                        id="rate"
                        name="rate"
                        type="rate"
                        placeholder="Would you like to write anything about “Calories Log”?"
                        borderColor = '#32502E'
                        bgColor= '#F3EFCC'
                        borderRadius= '15px'
                        borderWidth='2px'
                        width='800px'
                        height='300px'
                        boxShadow='xl' 
                        bg='white'
                    />
                </FormControl>
            </Box>
            </Center>

            <Center>
                <Button color='#FF9F45' bgColor='#32502E' borderRadius='10px' width='216px' mt='40px' shadow='xl'>
                    SUBMIT REVIEW
                </Button>
            </Center>

        </Box>
    )
}

export default Rate;