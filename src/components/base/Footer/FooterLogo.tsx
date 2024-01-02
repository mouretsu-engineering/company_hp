import { CompanyLogo2 } from "@/components/ui/Logo/CompanyLogo2";
import { Box } from "@chakra-ui/react";

export const FooterLogo = () => {
  return (
    <Box
      h={{ base: '39.2vw', md: '12.8vw' }}
      position='relative'
      w={{ base: '100%', md: '30vw' }}
    >
      <CompanyLogo2/>
    </Box>
  );
}