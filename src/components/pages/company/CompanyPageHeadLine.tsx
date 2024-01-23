import { Color } from "@/utils/Color";
import { Box, Heading, Text } from "@chakra-ui/react";

export const CompanyPageHeadLine = () => {
  return (
    <Box my={{ base: '20vw', md: '10vw' }} pl={{ base: '4.27vw', md: '11.1vw' }}>
      <Heading as='h1' color={Color.mouretsuRed} fontSize={{ base: '12.8vw', md: '8.3vw' }}>
        COMPANY
      </Heading>
      <Text fontSize={{ base: '5.33vw', md: '1.67vw' }} fontWeight='bold'>会社案内</Text>
    </Box>
  );
}
