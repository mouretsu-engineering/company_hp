import { Box } from "@chakra-ui/react";
import { LogoLayout } from "@/components/ui/Logo/LogoLayout";

export const CompanySectionTopImg = () => {
  return (
    <Box
      h={{ base: '20vw', md: '20vw' }}
      position='relative'
      w='100%'
    >
      <LogoLayout src='/images/company-logo-4.png' />
    </Box>
  );
}
