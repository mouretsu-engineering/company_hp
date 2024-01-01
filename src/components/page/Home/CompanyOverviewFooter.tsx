import { Box } from "@chakra-ui/react";
import { PrimaryImg } from "@/components/ui/PrimaryImg";

export const CompanyOverviewFooter = () => {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      position='relative'
      w='100%'
      h='10.6vw'
      mt='8vw'
    >
      <PrimaryImg src='/images/mouretsu-text.png' alt="株式会社猛烈エンジニアリング" />
    </Box>
  );
}
