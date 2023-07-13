import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Image, HStack, VStack, Center, Button } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { smoothies, energy, bowl, health, happy, scale, burger } from '../../assets';
import { brain, apple } from '../../assets';

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
    fontSize : '22px',
    fontWeight : 'bold',
    color : '#32502E'
}

const heading2 = {
    fontSize : '14px',
    fontWeight : 'medium',
    color : '#32502E',
    textAlign : 'left'
}

const image = {
    width : '500px',
    height : 'full',
}

function Articles(){
    return( 
        <Box mt='100px' mb='100px' width='100%'>
            <Text fontSize='50px' fontWeight='bold' color='#32502E' textAlign='center'>
                ARTICLES
            </Text>
            <Center>
                <Box width='170px' height='10px' bgColor='#FF9F45'></Box>
            </Center>

            <Box style={box1}>
                <Box style={box2} marginBottom='70px' marginTop='70px'>

                    <Box display='flex' flexDirection='row'>
                        <Image src={brain} style={image}/>

                        <Box display='flex' flexDirection='column' justifyContent='center' bgColor='#F2F2E8' width='500px' pl='30px' pr='30px'>
                            <Text style={heading1}>Tingkatkan Kesehatan Otak Dengan 6 Jenis Makanan Ini</Text>
                            <Text style={heading2}>Ingin meningkatkan kesehatan otak? Ahli gizi mengklaim kalau strategi yang paling penting untuk meningkatkan kinerja otak adalah adalah mengikuti pola diet sehat. Ini mencakup banyak buah, sayuran, kacang-kacangan, dan biji-bijian. </Text>
                            <Link to='/detailArticle'>
                            <Button bgColor='#FF9F45' borderRadius='10px' width='150px' mt='20px' color='white' shadow='md'
                            _hover={{
                                background: "#32502E",
                                color: "white",
                                textDecor: "none",
                                shadow: "2xl"
                                }}
                            >
                                VIEW DETAILS
                            </Button>
                            </Link>
                        </Box>
                    </Box>

                    <Box display='flex' flexDirection='row'>
                        <Box display='flex' flexDirection='column' justifyContent='center' width='500px' bgColor='#F2F2E8' pl='30px' pr='30px'>
                            <Text style={heading1}>Konsumsi Makanan Bergizi dan Bernutrisi untuk Hidup Sehat</Text>
                            <Text style={heading2}>Halodoc, Jakarta – Mengonsumsi makanan bergizi erat kaitannya dengan hidup sehat. Pasalnya, pola makan yang tepat dapat membantu mencapai berat badan ideal dan mengurangi risiko penyakit kronis...</Text>
                            <Link to='/detailArticle'>
                            <Button bgColor='#FF9F45' borderRadius='10px' width='150px' mt='20px' color='white' shadow='md'
                            _hover={{
                                background: "#32502E",
                                color: "white",
                                textDecor: "none",
                                shadow: "2xl"
                                }}
                            >
                                VIEW DETAILS
                            </Button>
                            </Link>
                        </Box>
                        
                        <Image src={apple} style={image}/>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}

export default Articles;