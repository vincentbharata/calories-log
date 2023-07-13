import { Box, Center, Flex, HStack, Text, VStack, Image } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/navbar';
import footer from '../components/footer';
import Trending from '../components/article/trending';
import Focus from '../components/article/focus';
import Footer from '../components/footer';
import Cart from '../components/article/cart';
import {eye} from '../assets';

function DetailArticle(){
    return(
        <Box justifyContent='column' px='80px'>
            <Navbar/>
            <Center mt='20px' mb='100px'>
                <Box width='800px'>
                    <Image src={eye} width='800px' height='full' borderRadius='15px'/>

                    <Text fontSize='50px' fontWeight='bold' color='#32502E' textAlign='center'>6 Jenis Makanan Kaya Vitamin untuk Mata</Text>
                    <Text fontSize='16px' color='#9EB0A0' fontWeight='bold' textAlign='center'>by dr. Airindya Bella</Text>

                    <Text fontSize='16px' fontWeight='regular' color='#32502E' mt='20px'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                        labore et dolore magna aliqua. Nibh praesent tristique magna sit amet purus gravida quis. 
                        Elit at imperdiet dui accumsan sit amet nulla facilisi. Mauris pellentesque pulvinar pellentesque 
                        habitant morbi. In hendrerit gravida rutrum quisque non. Vitae proin sagittis nisl rhoncus mattis. 
                        Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Ipsum nunc aliquet bibendum enim. 
                        Viverra tellus in hac habitasse. Aliquet risus feugiat in ante. Ultrices eros in cursus turpis. 
                        Vel eros donec ac odio. Nulla facilisi cras fermentum odio eu feugiat pretium. Dignissim enim sit 
                        amet venenatis urna cursus eget nunc scelerisque. Pulvinar sapien et ligula ullamcorper malesuada 
                        proin libero nunc. Scelerisque purus semper eget duis. Tempus iaculis urna id volutpat lacus laoreet 
                        non curabitur.
                    </Text>
                    
                    <Text fontSize='16px' fontWeight='regular' color='#32502E' mt='20px'>
                        Mauris sit amet massa vitae tortor condimentum lacinia quis vel. In fermentum et sollicitudin ac 
                        orci phasellus. Dapibus ultrices in iaculis nunc sed augue lacus viverra vitae. Imperdiet nulla 
                        malesuada pellentesque elit eget gravida cum sociis natoque. Non tellus orci ac auctor augue mauris 
                        augue neque. At consectetur lorem donec massa. Ultricies mi eget mauris pharetra. Faucibus turpis in 
                        eu mi bibendum neque egestas congue quisque. Ut venenatis tellus in metus vulputate eu scelerisque felis 
                        imperdiet. Enim tortor at auctor urna nunc id cursus metus. Mattis rhoncus urna neque viverra justo nec 
                        ultrices dui. Dui sapien eget mi proin sed libero enim sed. Bibendum enim facilisis gravida neque convallis 
                        a cras. Enim sed faucibus turpis in eu mi. Tortor posuere ac ut consequat semper viverra nam libero.
                        {/* </br> */}
                    </Text>

                    <Text fontSize='16px' fontWeight='regular' color='#32502E' mt='20px'>
                        Eu non diam phasellus vestibulum. Varius duis at consectetur lorem donec. In nisl nisi scelerisque eu 
                        ultrices vitae auctor eu augue. Orci porta non pulvinar neque laoreet suspendisse. Amet mauris commodo 
                        quis imperdiet. Diam donec adipiscing tristique risus nec feugiat. Arcu non sodales neque sodales. Duis 
                        tristique sollicitudin nibh sit amet commodo nulla facilisi. Nibh praesent tristique magna sit. Tristique 
                        senectus et netus et malesuada. Faucibus purus in massa tempor nec feugiat nisl pretium. Felis eget nunc 
                        lobortis mattis aliquam. Sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum. Imperdiet 
                        nulla malesuada pellentesque elit eget gravida cum sociis. Pulvinar mattis nunc sed blandit libero volutpat 
                        sed cras ornare. Nunc non blandit massa enim nec dui nunc mattis. Magna ac placerat vestibulum lectus.
                    </Text>
                </Box>
            </Center>
            <Footer/>
        </Box>
            
    )
}

export default DetailArticle;