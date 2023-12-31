import { Inter } from 'next/font/google'
import Header from '@/components/base/Header/Header';
import AboutUs from '@/components/page/Home/AboutUs';
import { Contact } from '@/components/page/Home/Contact';
import Member from '@/components/page/Home/Member';
import Footer from '@/components/base/Footer/Footer';
import { ChakraProvider, Flex, extendTheme } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const theme = extendTheme({
  breakpoints: {
    sm: "500px",
    md: "900px",
  }
});


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>
        <ChakraProvider theme={theme}>
            <Header />
            <Flex as="main" justify="center" align="center">
                <AboutUs />
            </Flex>
            <Member />
            <Member />
            <Contact/>
            <Footer />
        </ChakraProvider>
    </div>
  )
}

// TODO pages/index.tsx　に移動させる　topディレクトリは削除する Header,Footer,Provider系は_app.tsxに記載する