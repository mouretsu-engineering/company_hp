import { Box } from "@chakra-ui/react";
import { CompanyOverview } from "./CompanyOverview";
import { CompanySectionTopImg } from "./CompanySectionTopImg";
import { PaintImg } from "./PaintImg";

export const CompanySection = () => {
  return (
    <>
      <Box
        mt={{ base: '10vw', md: '5.5vw' }}
        pl={{ base: '4.26vw', md: '9vw' }}
        w='100%'>
        <CompanySectionTopImg />
        <CompanyOverview />
      </Box>
      <PaintImg />
    </>
  );
}
