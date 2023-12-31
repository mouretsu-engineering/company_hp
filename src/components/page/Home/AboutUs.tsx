import { Box } from "@chakra-ui/react";
import { CatchphraseSection } from "./CatchphraseSection";
import { CompanySection } from "./CompanySection";

export const AboutUs = () => {
  return (
    <Box mt='4.5vw' >
      <CatchphraseSection />
      <CompanySection />
    </Box>
  );
}
