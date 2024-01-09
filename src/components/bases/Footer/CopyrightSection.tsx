import { Box, Flex } from "@chakra-ui/react";

export const CopyrightSection = () => {
  return (
    <Flex align='center' justifyContent={{ base: 'center', md: 'start' }} px={{ base: '0', md: '5.56vw' }} h={{ base: '21vw', md: '8vw' }}>
      <Box color='white' fontSize={{ base: '3.2vw', md: '1vw' }}>© MOURETSU Corporation. All Rights Reserved.</Box>
    </Flex>
  );
}