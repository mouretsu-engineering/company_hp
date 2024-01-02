import { CompanyLogo2 } from "@/components/ui/Logo/CompanyLogo2";
import { MenuContentsList } from "@/components/ui/MenuContentsList";
import { PrimaryImg } from "@/components/ui/PrimaryImg";
import { Container, Box, Text, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box
        display={{ base: 'none', md: 'block' }}
        h='4.17vw'
        position='relative'
        w='100%'
      >
        <PrimaryImg src='/images/footer-paint-pc.png' alt="猛烈" />
      </Box>
      <Box px={{ base: '1.11vw', md: '5.56vw' }} py={{ base: '10.67vw', md: '5.56vw' }} bg='#222222'>
        <Flex align='end' direction={{ base: 'column', md: 'row' }} justifyContent='space-between'>
          <MenuContentsList />
          <Box
            h={{ base: '4.27vw', md: '16.7vw' }}
            position='relative'
            w={{ base: '4.27vw', md: '38.9vw' }}
          >
            <CompanyLogo2/>
          </Box>
        </Flex>


      </Box>
    </>
  );
}