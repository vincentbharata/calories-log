import React from "react";
import ReactDOM from 'react-dom'
import Main from './main'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
    <ChakraProvider>
        <Main/>
    </ChakraProvider>
    ,document.getElementById("root")
)