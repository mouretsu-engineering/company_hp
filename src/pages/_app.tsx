import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Providers } from './providers'
import Header from '@/components/bases/Header/Header'
import Footer from '@/components/bases/Footer/Footer'
import { ScrollToTopBtn } from '@/components/ui/Button/ScrollToTopBtn'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Header />
      <main>
        <Component {...pageProps} />
        <ScrollToTopBtn />
      </main>
      <Footer />
    </Providers>
  )
}
