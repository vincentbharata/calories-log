import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Image, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { smoothies, energy, bowl, health, happy, scale, burger } from '../../assets';

const box1 = {
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyItems:'center',
    width:'100%'
}

const box2 = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyItems:'center',
    width:'100%'
}

const heading1 = {
    fontSize : '30px',
    fontWeight : 'bold',
    color : '#32502E',
    textAlign : 'right'
}

const heading2 = {
    fontSize : '20px',
    fontWeight : 'medium',
    color : '#32502E',
    textAlign : 'right'
}

const heading3 = {
    fontSize : '30px',
    fontWeight : 'bold',
    color : '#32502E',
    textAlign : 'left'
}

const heading4 = {
    fontSize : '20px',
    fontWeight : 'medium',
    color : '#32502E',
    textAlign : 'left'
}

const image2 = {
    width : '100px',
    height : 'full',
    marginLeft : '70px',
    marginRight : '30px'
}

const image1 = {
    width : '100px',
    height : 'full',
    marginLeft : '30px',
    marginRight : '30px'
}

function Value(){
    return( 
        <Box mt='100px' mb='100px' width='100%'>
            <Text fontSize='50px' fontWeight='bold' color='#32502E' textAlign='center'>
                OUR VALUE
            </Text>

            <Box style={box1}>
                <Box style={box2} marginBottom='50px' marginTop='20px'>

                    <Box display='flex' flexDirection='row' marginTop='30px' marginBottom='30px' width='650px'>
                        <Box ml='30px' mr='30px' display='flex' flexDirection='column' justifyContent='center'>
                            <Text style={heading1}>BECOMES HEALTHIER</Text>
                            <Box width='300px'>
                                <Text style={heading2}>Our immune will stronger if our body healthier</Text>
                            </Box>
                            
                        </Box>
                        
                        <Image src={health} style={image1}/>
                    </Box>

                    <Box display='flex' flexDirection='row' marginTop='30px' marginBottom='30px' width='650px'>
                        <Image src={scale} style={image2}/>

                        <Box ml='30px' mr='30px' display='flex' flexDirection='column' justifyContent='center'>
                            <Text style={heading3}> CONTROLLING WEIGHT</Text>
                            <Box width='300px'>
                                <Text style={heading4}>Our body will feels lighter</Text>
                            </Box>
                        </Box>
                    </Box>

                    <Box display='flex' flexDirection='row' marginTop='30px' marginBottom='30px' width='650px'>
                        <Box ml='30px' mr='30px' display='flex' flexDirection='column' justifyContent='center'>
                            <Text style={heading1}>INCREASE ENERGY</Text>
                            <Box width='300px'>
                                <Text style={heading2}>Have enough energy can help carry out routine</Text>
                            </Box>
                        </Box>
                        
                        <Image src={energy} style={image1}/>
                    </Box>

                    <Box display='flex' flexDirection='row' marginTop='30px' marginBottom='30px' width='650px'>
                        <Image src={happy} style={image2}/>

                        <Box ml='30px' mr='30px' display='flex' flexDirection='column' justifyContent='center'>
                            <Text style={heading3}>BECOMES HAPPIER</Text>
                            <Box width='300px'>
                                <Text style={heading4}>Living healthy life will also increase our self-confidence</Text>
                            </Box>
                        </Box>
                    </Box>
                    

                </Box>

            </Box>
        </Box>
    )
}

export default Value;