import { AppProps } from "next/app"
import { globalStyles } from "../styles/globals"

import { Container } from "../styles/pages/app"
import Navbar from "../components/Navbar"
import Ribbon from "../components/Ribbon"
import Footer from "../components/Footer"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Ribbon/>
      <Navbar/>
      <Component {...pageProps} />
      <Footer />
    </Container>
    )
}