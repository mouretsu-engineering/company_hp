import { PrimaryImg } from "@/components/ui/PrimaryImg";
import { Box, Flex, Text, Image, HStack, VStack, Divider } from "@chakra-ui/react";

export const Service = () => {
  return (
    <VStack align='start' gap='3.5vw' pl='11.1vw'>
      <HStack gap='9vw' align='end'>
        <VStack align='start' fontWeight='bold' gap={{ base: '3vw', md: '2.5vw' }}>
          <Box color='#E61515' fontSize={{ base: '3.7vw', md: '1.4vw' }} >/* SERVICE */</Box>
          <Box fontSize='3.9vw'>サービス</Box>
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
      <Box w='100%'>
        <Divider />
      </Box>


    </VStack>
  );
}
