import { WhiteBorderBtn } from "@/components/ui/Button/WhiteBorderBtn";
import { Box, HStack } from "@chakra-ui/react";

export const CompanyInfoNavigation = () => {
  return (
    <HStack gap={{ base: '24.5vw', md: '2.2vw' }}>
      <Box fontSize={{ base: '5.3vw', md: '1.7vw' }}>
        会社案内を見る
      </Box>
      <WhiteBorderBtn path='/company' />
    </HStack>
  );
}
