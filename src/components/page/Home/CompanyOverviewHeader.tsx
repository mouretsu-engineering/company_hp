import { Box, VStack } from "@chakra-ui/react";

export const CompanyOverviewHeader = () => {
  return (
    <VStack align='start' gap={{ base: '3vw', md: '2vw' }}>
      <Box fontSize={{ base: '3.7vw', md: '1.4vw' }} >/* COMPANY */</Box>
      <Box fontSize='5vw' display={{ base: 'none', md: 'block' }}>人・組織・技術の最適化</Box>
      <Box fontSize='8.5vw' display={{ base: 'block', md: 'none' }}>人・組織・技術の<br/>最適化</Box>
    </VStack>
  );
}
