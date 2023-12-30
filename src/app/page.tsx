import { ChakraProvider } from "@chakra-ui/react"
import koursTheme from "../styles/theme";
import Hero from "@/components/Hero";
import Features from "@/components/Benefits";
import Platform from "@/components/Platform";
import Results from "@/components/Results";
import Sell from "@/components/Sell/Index";
import StartFree from "@/components/StartFree";

function Home() {
  return (
    <ChakraProvider theme={koursTheme} cssVarsRoot={undefined}>
      <Hero />
      <Features/>
      <Platform />
      <Results />
      <Sell />
      <StartFree />
    </ChakraProvider>
  )
}

export default Home
