import { ChakraProvider } from "@chakra-ui/react"
import koursTheme from "../styles/theme";
import Hero from "@/components/Hero";

function Home() {
  return (
    <ChakraProvider theme={koursTheme} cssVarsRoot={undefined}>
      <Hero />
    </ChakraProvider>
  )
}

export default Home
