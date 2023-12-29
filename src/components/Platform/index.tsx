'use client'
import { Box, Flex, Heading, Text, Button, Image, useBreakpointValue } from '@chakra-ui/react';

export default function Platform() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex direction={isMobile ? 'column-reverse' : 'row'} bg="primary" align="stretch" justify="space-between">
      <Box bg="primary" color="white" px={isMobile ? "4" : "20"} py={isMobile ? "4" : "20"} flex={1} h="full" position="relative">
        {!isMobile && (
          <Image
            src="/dark-logo.png"
            position="absolute"
            alt="Dark Logo"
            bottom="-3"
            right="0"
            objectFit="cover"
            w="250px"
            h="250px"
          />
        )}
        <Flex direction="column" justify="center" h="full">
          <Heading size="2xl" mb={4}>
            Muito mais que uma plataforma
          </Heading>
          <Text mb={4}>
            Ao se juntar à nossa plataforma, você ganha acesso a um universo de possibilidades e vantagens exclusivas.
          </Text>
          <Text mb={8}>
            Você pode criar cursos envolventes, alcançar um público mais amplo e expandir seus horizontes. Sua jornada é única, e estamos comprometidos em ajudá-lo a alcançar o sucesso que você merece.
          </Text>
          <Button bg="dark.100" size="lg" maxW="200px" fontWeight={500} color="white" _hover={{ bg: "gray.500" }}>Quero fazer parte</Button>
        </Flex>
      </Box>
      <Box flex={1} h="full">
        <Image
          src="/woman-using-laptop.svg"
          alt="Woman using a laptop"
          objectFit="cover"
          w="full"
          h={{ base: 'auto', md: '500px' }}
        />
      </Box>
    </Flex>
  );
}
