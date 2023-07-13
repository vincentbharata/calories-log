import React from 'react';
import { Box, Center, Flex, Text, Image, Button, Link, VStack, HStack } from '@chakra-ui/react';
import {mental, bodyScale, heartBeat} from '../../assets'

const verticalStyle = {
    width: '330px',
    justifyContent: 'center',
    textAlign: 'center',
}

const titleStyle = {
    color:'#406343',
    fontSize: '30px',
    fontWeight:'500'
}

const subTitleStyle = {
    color:'#406343',
    fontSize: '16px'
}

const boxImage = {
    backgroundColor:'#F3EFCC',
    borderColor:'#E0E0C7',
    width: '100px',
    height:'100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    borderWidth: '4px'
}

const styleImage = {
    width: '70px',
    height:'70px'
}

function ImportantNotice() {
    return(
        <Box height='500px' display='flex' flexDirection='column' alignItems='center' justifyContent='center' mb='50px' mt='50px'>
            <Text fontSize='50px' fontWeight='bold' color='#32502E' textAlign='center'>
                WHY IS IT IMPORTANT?
            </Text>
            <HStack justifyContent='center' spacing='80px' mt='100px'>
                <VStack style={verticalStyle} spacing='20px'>
                    <Box style={boxImage}>
                        <Image src={bodyScale} style={styleImage}/>
                    </Box>
                    <Text style={titleStyle}>Wight Control</Text>
                    <Text style={subTitleStyle}> Help you maintain a steady weight, gain weight or lose weight, it depends on the nutrients.</Text>
                </VStack>
                <VStack style={verticalStyle} spacing='20px'>
                    <Box style={boxImage}>
                        <Image src={mental} style={styleImage}/>
                    </Box>
                    <Text style={titleStyle}>Affect Mental Health</Text>
                    <Text style={subTitleStyle}>Setting yourself up for fewer mood fluctuations, an overall happy looking, and improved ability to focus.</Text>
                </VStack>
                <VStack style={verticalStyle} spacing='20px'>
                    <Box style={boxImage}>
                        <Image src={heartBeat} style={styleImage}/>
                    </Box>
                    <Text style={titleStyle}>Prevent Disease</Text>
                    <Text style={subTitleStyle}>Healthy food can provide body with vitamins & minerals, in order to fight off infection and lower the risk of several diseases.</Text>
                </VStack>
            </HStack>
        </Box>
    )
}

export default ImportantNotice;