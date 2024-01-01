import { Box } from "@chakra-ui/react";
import { LogoLayout } from "@/components/ui/Logo/LogoLayout";

export const CompanyOverviewFooter = () => {
  return (
    <Box
      display={{ base: 'none', md: 'block' }}
      position='relative'
      w='100%'
      h='10.6vw'
      mt='8vw'
    >
      <LogoLayout src='/images/mouretsu-text.png' />
    </Box>
  );
}
