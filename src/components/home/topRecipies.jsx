import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Center, SimpleGrid, Image} from '@chakra-ui/react';
import React from 'react';
import { img1, img2, img3, img4, img5, img6, img7, img8, img9  } from '../../assets';
import { app1, app2, app4, app5, app6, app7, app8, app9, app10 } from '../../assets';

function TopRecepies(){
    return( 
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' mt='50px' mb='50px' width='100%'>
            <Text color='#32502E' fontSize='64px' fontWeight='bold'>TOP RECIPIES</Text>
            {/* <Center width='100%'> */}
            <Box mt='50px' width='100%' display='flex'>
                <Tabs variant='soft-rounded' colorScheme='orange' size='lg' width='full' justifyContent='space-between'>
                    <TabList justifyContent='space-between'>
                        <Tab>MAIN COURSE</Tab>
                        <Tab>APPETIZER</Tab>
                        <Tab>SNACK</Tab>
                        <Tab>BEVERAGE</Tab>
                        <Tab>DESSERT</Tab>
                    </TabList>
                    <TabPanels mt='25px'>
                        <TabPanel>
                        <Center>
                        <SimpleGrid columns={3} spacing={50}>
                            <Image src={img1} width='350px'/>
                            <Image src={img2} width='350px'/>
                            <Image src={img3} width='350px'/>
                            <Image src={img4} width='350px'/>
                            <Image src={img5} width='350px'/>
                            <Image src={img6} width='350px'/>
                            <Image src={img7} width='350px'/>
                            <Image src={img8} width='350px'/>
                            <Image src={img9} width='350px'/>
                        </SimpleGrid>
                        </Center>
                        </TabPanel>
                        <TabPanel>
                        <Center>
                        <SimpleGrid columns={3} spacing={50}>
                            <Image src={app1} width='350px' borderRadius='10px' border='2px' borderColor='#FAD586' shadow='md'/>
                            <Image src={app2} width='350px' borderRadius='10px' border='2px' borderColor='#FAD586' shadow='md'/>
                            <Image src={app10} width='350px'borderRadius='10px' border='2px' borderColor='#FAD586' shadow='md'/>
                            <Image src={app4} width='350px' borderRadius='10px' border='2px' borderColor='#FAD586' shadow='md'/>
                            <Image src={app5} width='350px' borderRadius='10px' border='2px' borderColor='#FAD586' shadow='md'/>
                            <Image src={app6} width='350px' borderRadius='10px' border='2px' borderColor='#FAD586' shadow='md'/>
                            <Image src={app7} width='350px' borderRadius='10px' border='2px' borderColor='#FAD586' shadow='md'/>
                            <Image src={app8} width='350px' borderRadius='10px' border='2px' borderColor='#FAD586' shadow='md'/>
                            <Image src={app9} width='350px' borderRadius='10px' border='2px' borderColor='#FAD586' shadow='md'/>
                        </SimpleGrid>
                        </Center>
                        </TabPanel>
                        <TabPanel>
                            <Text>INI SNACK PANEL</Text>
                        </TabPanel>
                        <TabPanel>
                            <Text>INI BEVERAGE PANEL</Text>
                        </TabPanel>
                        <TabPanel>
                            <Text>INI DESSERT PANEL</Text>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
            {/* </Center> */}
        </Box>

    )
}

export default TopRecepies;