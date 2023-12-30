'use client'

import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { FaArrowRight } from "react-icons/fa6";

export default function StartFree() {
  return (
    <Box bg="primary" py={8} bgImage="url('/bg-start.png')" // substitua com o caminho para a sua imagem
    bgPos="center" // centraliza a imagem de fundo
    bgRepeat="no-repeat" // impede a repetição da imagem
    bgSize="cover" >
      <Box textAlign="center" fontWeight={500} py="4rem">
        <Heading color="white" fontSize="5xl">Para começar, é grátis. </Heading>
        <Text color="gray.100" fontWeight={400} letterSpacing={1}> Inscreva-se e dê o primeiro passo para o seu crescimento online.</Text>
      </Box>
      <Flex justifyContent="center" alignItems="center" h="100%">
        <Button mx="2" bg="primary" color="white" variant="outline">
          Ver planos
        </Button>
        <Button mx="2" bg="black" color="white" variant="solid" rightIcon={<FaArrowRight />}>
          Comece agora
        </Button>
      </Flex>
    </Box>
  )
}