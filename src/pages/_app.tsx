import '../styles/global.css';
import type { AppProps } from 'next/app';

import Navbar from '../components/Navbar';
import Ribbon from '../components/Ribbon';
import Footer from '../components/Footer';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Ribbon />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}