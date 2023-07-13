import React from "react";
import { Box, Image, Button, Link, Text} from '@chakra-ui/react';
import {chef, introRight, introLeft} from '../../assets'

function Landing(){
    return(
        <Box mt='50px' mb='50px' display='flex' justifyContent='space-between'>
            <Box justifyContent='column' display='flex' flexDirection='column' justifyContent='center'>
                {/* <Image src={introLeft} width='605px' height='297px'/> */}
                <Box>
                    <Text color='#32502E' fontSize='65px' fontWeight='bold'>Be Healthier with</Text>
                    <Text color='#FF9F45' fontSize='80px' fontWeight='bold'>CALORIES LOG</Text>
                </Box>
                <Box width='529px' mt='30px'>
                    <Text color='#32502E' fontSize='17px' fontWeight='bold'>As we know, the food we eat has a very big impact on our health and our quality of life, so it's important for us to eat healthy food for our better future.</Text>
                </Box>

                <Button color='#FAD586' bgColor='#32502E' borderRadius='7px' width='230px' height='50px' mt='22px' mb='22px' 
                    _hover={{
                    background: "#FAD586",
                    color: "#32502E",
                    textDecor: "none",
                    shadow: "2xl"
                    }}
                >
                    <Link to='/SignUp' display='flex' flexDirection='row' alignItems='center'>
                        <Image src={chef} mr='10px'/>
                        EXPLORE RECIPES
                    </Link>
                </Button>
            </Box>
            <Box flexDirection='right'>
                <Image src={ introRight}/>
            </Box>
        </Box>
    )
}

export default Landing;