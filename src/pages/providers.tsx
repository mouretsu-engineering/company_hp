import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const theme = extendTheme({
  breakpoints: {
    sm: "500px",
    md: "900px",
  }
});
const inter = Inter({ subsets: ['latin'] })

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <div className={inter.className}>
        {children}
      </div>
    </ChakraProvider>
    )
}
