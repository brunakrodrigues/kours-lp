import { ChakraProvider } from "@chakra-ui/react"
import koursTheme from "../styles/theme";
import Hero from "@/components/Hero";
import Features from "@/components/Benefits";

function Home() {
  return (
    <ChakraProvider theme={koursTheme} cssVarsRoot={undefined}>
      <Hero />
      <Features/>
    </ChakraProvider>
  )
}

export default Home
