import { CompanyLogo2 } from "@/components/ui/Logo/CompanyLogo2";
import { MenuContentsList } from "@/components/ui/MenuContentsList";
import { PrimaryImg } from "@/components/ui/PrimaryImg";
import { Box, Flex, Stack, Divider } from "@chakra-ui/react";

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
      <Box
        display={{ base: 'block', md: 'none' }}
        h='10vw'
        position='relative'
        w='100%'
      >
        <PrimaryImg src='/images/footer-paint-pc.png' alt="猛烈" />
      </Box>
      <Box bg='#222222'>
        <Box px={{ base: '4.27vw', md: '5.56vw' }} py={{ base: '10.67vw', md: '5.56vw' }}>
          <Stack align={{ base: 'start', md: 'end' }} direction={{ base: 'column', md: 'row' }} justifyContent='space-between' spacing={{ base: '21vw', md: '0' }}>
            <MenuContentsList />
            <Box
              h={{ base: '39.2vw', md: '12.8vw' }}
              position='relative'
              w={{ base: '100%', md: '30vw' }}
            >
              <CompanyLogo2/>
            </Box>
          </Stack>
        </Box>
        <Divider />
        <Flex align='center' justifyContent={{ base: 'center', md: 'start' }} px={{ base: '0', md: '5.56vw' }} h={{ base: '21vw', md: '8vw' }}>
          <Box color='white' fontSize={{ base: '3.2vw', md: '1vw' }}>© MOURETSU Corporation. All Rights Reserved.</Box>
        </Flex>
      </Box>
    </>
  );
}