import { VStack } from "@chakra-ui/react";
import { ConceptMessage } from "./ConceptMessage";
import { CompanyInfoNavigation } from "./CompanyInfoNavigation";
import { MonochromeEngineerImgBox } from "./MonochromeEngineerImgBox";

export const CompanyOverviewContents = () => {
  return (
    <>
      <VStack
        align='start'
        gap={{ base: '12vw', md: '8vw' }}
        mt={{ base: '15vw', md: '9vw' }}
        ml={{ base: '0', md: '24vw' }}
        position='relative'
      >
        <ConceptMessage />
        <CompanyInfoNavigation />
        <MonochromeEngineerImgBox />
      </VStack>
    </>
  );
}
