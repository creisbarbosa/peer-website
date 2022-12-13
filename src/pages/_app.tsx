import '../styles/global.css';
import type { AppProps } from 'next/app';

import Navbar from 'src/components/Navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}