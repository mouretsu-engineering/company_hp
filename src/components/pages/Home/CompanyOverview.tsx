import { Box } from "@chakra-ui/react";
import { CompanyOverviewHeader } from "./CompanyOverviewHeader";
import { CompanyOverviewFooter } from "./CompanyOverviewFooter";
import { CompanyOverviewContents } from "./CompanyOverviewContents";
import { Color } from "@/utils/Color";

export const CompanyOverview = () => {
  return (
    <Box
      px={{ base: '6.4vw', md: '5.5vw' }}
      pt={{ base: '14vw', md: '1.5vw' }}
      pb={{ base: '14vw', md: '5vw' }}
      bgColor={Color.mouretsuRed}
      color='white'
      fontWeight='bold'
    >
      <CompanyOverviewHeader />
      <CompanyOverviewContents />
      <CompanyOverviewFooter />
    </Box>
  );
}
