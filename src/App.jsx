import './App.css'
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import Routers from './Router/Router'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Routers/>
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App
