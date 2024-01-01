import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Providers } from './providers'
import Header from '@/components/base/Header/Header'
import Footer from '@/components/base/Footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Providers>
  )
}
