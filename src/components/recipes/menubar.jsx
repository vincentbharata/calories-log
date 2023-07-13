import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import React from 'react';

function MenuBar(){
    return( 
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column'mb='50px'>
            <Box>
                <Tabs variant='soft-rounded' colorScheme='white' outline='1px' size='lg'>
                    <TabList>
                        <Tab>APPETIZER</Tab>
                        <Tab>MAIN COURSE</Tab>
                        <Tab>DESSERT</Tab>
                        <Tab>BEVERAGE</Tab>
                        <Tab>Favorites</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Text>INI MAIN COURSE PANEL</Text>
                        </TabPanel>
                        <TabPanel>
                            <Text>INI APPETIZER PANEL</Text>
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
        </Box>

    )
}

export default MenuBar;