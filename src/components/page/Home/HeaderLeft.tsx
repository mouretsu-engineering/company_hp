import { Box } from "@chakra-ui/react";
import { CompanyLogo } from "@/components/ui/CompanyLogo";

export const HeaderLeft = () => {
  return (
    <Box
      h={{ base: '5.3vw', md: '2vw' }}
      position='relative'
      w={{ base: '56vw', md: '22.5vw' }}
    >
      <CompanyLogo />
    </Box>
  );
}