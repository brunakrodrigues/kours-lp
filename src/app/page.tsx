import { ChakraProvider } from "@chakra-ui/react"
import koursTheme from "../styles/theme";
import Hero from "@/components/Hero";
import Features from "@/components/Benefits";
import Platform from "@/components/Platform";
import Results from "@/components/Results";
import Sell from "@/components/Sell/Index";

function Home() {
  return (
    <ChakraProvider theme={koursTheme} cssVarsRoot={undefined}>
      <Hero />
      <Features/>
      <Platform />
      <Results />
      <Sell />
    </ChakraProvider>
  )
}

export default Home
