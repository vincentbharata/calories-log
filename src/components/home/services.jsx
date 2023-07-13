import React from "react";
import { Box,Text, Image } from '@chakra-ui/react';
import {baking,meal,list} from '../../assets'


const box1 = {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyItems:'center',
    width:'400px'
}

const box2 = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyItems:'center',
    width:'400px'
}

const textBox1 = {
    color:'#32502E',
    fontSize:'24px',
    fontWeight:'bold'
}

const textBox2 = {
    color:'#32502E',
    fontSize:'18px',
    width : '300px',
    textAlign : 'center'
}

function Services(){
    return(
        <Box mt='50px' mb='50px'>
            <Text fontSize='50px' fontWeight='bold' color='#32502E' textAlign='center'>
                OUR SERVICES
            </Text>

            <Box bgColor='#E0E0C7' width='100%' height='300px' mt='50px' mb='50px' borderRadius='10px' display='flex' flexDirection='row' justifyContent='space-between'>
                <Box style={box1}>
                    <Box style={box2}>
                        <Box mb='20px'>
                            <Image src={baking}/>
                        </Box>
                        <Text style={textBox1}>Healthy Recipes</Text>
                        <Text style={textBox2}>Healthy recipies, provide with the calculation of the calories</Text>
                    </Box>
                </Box>
                
                <Box style={box1}>
                    <Box style={box2}>
                        <Box mb='20px'>
                            <Image src={meal}/>
                        </Box>
                        <Text style={textBox1}>Healthy Planner</Text>
                        <Text style={textBox2}>Learn about meal planning with healthy amount of calories</Text>
                    </Box>
                </Box>

                <Box style={box1}>
                    <Box style={box2}>
                        <Box mb='20px'>
                            <Image src={list}/>
                        </Box>
                        <Text style={textBox1}>Healthy Consultation</Text>
                        <Text style={textBox2}>Personal consultation with our expert</Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Services;