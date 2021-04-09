import React, { useState } from "react"
import "./App.css"
import {
  ChakraProvider,
  Container,
  Stack,
  Box,
  Heading,
} from "@chakra-ui/react"

function App() {
  const [color, setColor] = useState("White")

  const handleClickBlack = () => {
    setColor("black")
  }

  const handleClickWhite = () => {
    setColor("white")
  }

  const handleClickRed = () => {
    setColor("red")
  }

  const handleClickBlue = () => {
    setColor("blue")
  }

  const handleClickGreen = () => {
    setColor("green")
  }

  const handleClickGray = () => {
    setColor("gray")
  }

  const handleClickPink = () => {
    setColor("pink")
  }
  return (
    <ChakraProvider>
      <Container className="container" maxW="container.2xl" bg={color}>
        <Container paddingTop="125" centerContent>
          <Heading as="h1" fontSize="4xl" textAlign="end">
            Color Change challenge
          </Heading>
        </Container>
        <Container maxW="container.2xl" centerContent paddingTop="100">
          <Stack direction="row">
            <Box
              bg="black"
              w="100px"
              h="100px"
              onClick={handleClickBlack}
            ></Box>
            <Box bg="gray" w="100px" h="100px" onClick={handleClickGray}></Box>
            <Box
              bg="green"
              w="100px"
              h="100px"
              onClick={handleClickGreen}
            ></Box>
            <Box bg="blue" w="100px" h="100px" onClick={handleClickBlue}></Box>
            <Box bg="red" w="100px" h="100px" onClick={handleClickRed}></Box>
            <Box bg="pink" w="100px" h="100px" onClick={handleClickPink}></Box>
            <Box
              bg="white"
              w="100px"
              h="100px"
              onClick={handleClickWhite}
            ></Box>
          </Stack>
        </Container>
      </Container>
    </ChakraProvider>
  )
}

export default App
