import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Image, HStack, VStack, Button } from '@chakra-ui/react';
import React from 'react';
import { check } from '../../assets';

function Plan(){
    return( 
        <Box width='100%' display='flex' flexDirection='row' justifyContent='space-between' px='80px'>
           <Box width='300px' height='450px' bgColor='white' borderRadius='20px' boxShadow='2xl' paddingTop='20px'>
               <Box pl='20px'>
                   <Text fontSize='32px' fontWeight='bold' color='#406343'>PLAN 1</Text>
               </Box>

               <Box 
                    bgColor='#90A592' 
                    width='230px' 
                    height='100px' 
                    mt='20px' 
                    borderRightRadius='100px' 
                    pl='20px' 
                    display='flex'
                    flexDirection='row'
                    justifyItems='center'
                >
                    <VStack justifyContent='center'>
                        <Box>
                            <Text color='white' fontSize='30px' fontWeight='bold'>Rp. 35.000</Text>
                            <Text color='#F3EFCC' fontSize='20px' fontWeight='bold'>/1 Month</Text>
                        </Box>
                    </VStack>
               </Box>

            <Box pl='20px' mt='30px' mb='30px'>
                <HStack mt='5px' mb='5px'>
                    <Image src={check}/>
                    <Text color='black' fontSize='20px' fontWeight='medium'> Personalized Nutrition</Text>
                </HStack>

                <HStack mt='5px' mb='5px'>
                    <Image src={check}/>
                    <Text color='black' fontSize='20px' fontWeight='medium'>Daily Food Plan</Text>
                </HStack>

                <HStack mt='5px' mb='5px'>
                    <Image src={check}/>
                    <Text color='black' fontSize='20px' fontWeight='medium'>Weight Goal Planning</Text>
                </HStack>

                <HStack mt='5px' mb='5px'>
                    <Image src={check}/>
                    <Text color='black' fontSize='20px' fontWeight='medium'>Video Learning Recipes</Text>
                </HStack>
            </Box>

            <HStack width='100%' justifyContent='center' mt='-10px'>
                <Button width='200px' height='50px' bgColor='#FF9F45' borderRadius='50px'
                    _hover={{
                    background: "#32502E",
                    color: "#32502E",
                    textDecor: "none",
                    shadow: "2xl"
                    }}
                >
                    <Text color='white' fontSize='20' fontWeight='bold'>START NOW</Text>
                </Button>

            </HStack>
           </Box>

           <Box width='300px' height='450px' bgColor='white' borderRadius='20px' boxShadow='2xl' paddingTop='20px'>
               <Box pl='20px'>
                   <Text fontSize='32px' fontWeight='bold' color='#406343'>PLAN 1</Text>
               </Box>

               <Box 
                    bgColor='#90A592' 
                    width='230px' 
                    height='100px' 
                    mt='20px' 
                    borderRightRadius='100px' 
                    pl='20px' 
                    display='flex'
                    flexDirection='row'
                    justifyItems='center'
                >
                    <VStack justifyContent='center'>
                        <Box>
                            <Text color='white' fontSize='30px' fontWeight='bold'>Rp. 35.000</Text>
                            <Text color='#F3EFCC' fontSize='20px' fontWeight='bold'>/1 Month</Text>
                        </Box>
                    </VStack>
               </Box>

            <Box pl='20px' mt='30px' mb='30px'>
                <HStack mt='5px' mb='5px'>
                    <Image src={check}/>
                    <Text color='black' fontSize='20px' fontWeight='medium'> Personalized Nutrition</Text>
                </HStack>

                <HStack mt='5px' mb='5px'>
                    <Image src={check}/>
                    <Text color='black' fontSize='20px' fontWeight='medium'>Daily Food Plan</Text>
                </HStack>

                <HStack mt='5px' mb='5px'>
                    <Image src={check}/>
                    <Text color='black' fontSize='20px' fontWeight='medium'>Weight Goal Planning</Text>
                </HStack>

                <HStack mt='5px' mb='5px'>
                    <Image src={check}/>
                    <Text color='black' fontSize='20px' fontWeight='medium'>Video Learning Recipes</Text>
                </HStack>
            </Box>

            <HStack width='100%' justifyContent='center' mt='-10px'>
                <Button width='200px' height='50px' bgColor='#FF9F45' borderRadius='50px'
                    _hover={{
                    background: "#32502E",
                    color: "#32502E",
                    textDecor: "none",
                    shadow: "2xl"
                    }}
                >
                    <Text color='white' fontSize='20' fontWeight='bold'>START NOW</Text>
                </Button>

            </HStack>
           </Box>

           <Box width='300px' height='450px' bgColor='white' borderRadius='20px' boxShadow='2xl' paddingTop='20px'>
               <Box pl='20px'>
                   <Text fontSize='32px' fontWeight='bold' color='#406343'>PLAN 1</Text>
               </Box>

               <Box 
                    bgColor='#90A592' 
                    width='230px' 
                    height='100px' 
                    mt='20px' 
                    borderRightRadius='100px' 
                    pl='20px' 
                    display='flex'
                    flexDirection='row'
                    justifyItems='center'
                >
                    <VStack justifyContent='center'>
                        <Box>
                            <Text color='white' fontSize='30px' fontWeight='bold'>Rp. 35.000</Text>
                            <Text color='#F3EFCC' fontSize='20px' fontWeight='bold'>/1 Month</Text>
                        </Box>
                    </VStack>
               </Box>

            <Box pl='20px' mt='30px' mb='30px'>
                <HStack mt='5px' mb='5px'>
                    <Image src={check}/>
                    <Text color='black' fontSize='20px' fontWeight='medium'> Personalized Nutrition</Text>
                </HStack>

                <HStack mt='5px' mb='5px'>
                    <Image src={check}/>
                    <Text color='black' fontSize='20px' fontWeight='medium'>Daily Food Plan</Text>
                </HStack>

                <HStack mt='5px' mb='5px'>
                    <Image src={check}/>
                    <Text color='black' fontSize='20px' fontWeight='medium'>Weight Goal Planning</Text>
                </HStack>

                <HStack mt='5px' mb='5px'>
                    <Image src={check}/>
                    <Text color='black' fontSize='20px' fontWeight='medium'>Video Learning Recipes</Text>
                </HStack>
            </Box>

            <HStack width='100%' justifyContent='center' mt='-10px'>
                <Button width='200px' height='50px' bgColor='#FF9F45' borderRadius='50px'
                _hover={{
                    background: "#32502E",
                    color: "#FAD586",
                    textDecor: "none",
                    shadow: "2xl"
                    }}
                >
                    <Text color='white' fontSize='20' fontWeight='bold'>START NOW</Text>
                </Button>

            </HStack>
           </Box>
        </Box>
    )
}

export default Plan;