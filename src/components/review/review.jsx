import { Box, Text} from '@chakra-ui/react';
import React from 'react';
import { StarIcon } from '@chakra-ui/icons'

class Revieww extends React.Component{

    render(){
        return(
            <Box mt='30px'>
                <Box>
                    <Box display='flex' flexDirection='row' justifyItems='center' alignItems='center'>
                        <Text fontSize='50px' fontWeight='extrabold' mr='5px' mt='5px'>5</Text>
                        <StarIcon w={14} h={14} color='orange'/>
                        <Box width='450px' height='25px' bgColor='#32502E' mt='5px' ml='40px'/>
                        <Box width='150px' height='25px' bgColor='#E3E5E5' mt='5px'/>
                    </Box>
                </Box>
    
                <Box>
                    <Box display='flex' flexDirection='row' justifyItems='center' alignItems='center'>
                        <Text fontSize='50px' fontWeight='extrabold' mr='5px' mt='5px'>4</Text>
                        <StarIcon w={14} h={14} color='orange'/>
                        <Box width='470px' height='25px' bgColor='#32502E' mt='5px' ml='40px'/>
                        <Box width='130px' height='25px' bgColor='#E3E5E5' mt='5px'/>
                    </Box>
                </Box>
    
                <Box>
                    <Box display='flex' flexDirection='row' justifyItems='center' alignItems='center'>
                        <Text fontSize='50px' fontWeight='extrabold' mr='5px' mt='5px'>3</Text>
                        <StarIcon w={14} h={14} color='orange'/>
                        <Box width='300px' height='25px' bgColor='#32502E' mt='5px' ml='40px'/>
                        <Box width='300px' height='25px' bgColor='#E3E5E5' mt='5px'/>
                    </Box>
                </Box>
    
                <Box>
                    <Box display='flex' flexDirection='row' justifyItems='center' alignItems='center'>
                        <Text fontSize='50px' fontWeight='extrabold' mr='5px' mt='5px'>2</Text>
                        <StarIcon w={14} h={14} color='orange'/>
                        <Box width='150px' height='25px' bgColor='#32502E' mt='5px' ml='40px'/>
                        <Box width='450px' height='25px' bgColor='#E3E5E5' mt='5px'/>
                    </Box>
                </Box>
    
                <Box>
                    <Box display='flex' flexDirection='row' justifyItems='center' alignItems='center'>
                        <Text fontSize='50px' fontWeight='extrabold' mr='5px' mt='5px'>1</Text>
                        <StarIcon w={14} h={14} color='orange'/>
                        {/* <Box width='320px' height='25px' bgColor='#32502E' mt='5px' ml='40px'/> */}
                        <Box width='600px' height='25px' bgColor='#E3E5E5' mt='5px' ml='40px'/>
                    </Box>
                </Box>
            </Box>
    
    
        )
    }
}

export default Revieww;