import { PrimaryImg } from "@/components/ui/PrimaryImg";
import { Box, HStack, VStack } from "@chakra-ui/react";

export const ServiceHeadline = () => {
  return (
    <HStack gap={{ base: '0', md: '9vw' }} align='end' pl={{ base: '4.27vw', md: '11.1vw' }}>
      <VStack align='start' fontWeight='bold' gap={{ base: '4.27vw', md: '2.5vw' }}>
        <Box color='#E61515' fontSize={{ base: '3.7vw', md: '1.4vw' }} >/* SERVICE */</Box>
        <Box fontSize={{ base: '8.53vw', md: '3.9vw' }}>サービス</Box>
      </VStack>
      <Box
        display={{ base: 'none', md: 'block' }}
        position='relative'
        w='58.2vw'
        h='6.4vw'
      >
        <PrimaryImg src='/images/what-we-do.png' alt="WHAT WE DO" />
      </Box>
    </HStack>
  );
}
