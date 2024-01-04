import { MenuContentsList } from "@/components/ui/MenuContentsList";
import { Box, Stack } from "@chakra-ui/react";
import { FooterLogo } from "./FooterLogo";

export const FooterNavigationAndLogo = () => {
  return (
    <Box px={{ base: '4.27vw', md: '5.56vw' }} py={{ base: '10.67vw', md: '5.56vw' }}>
      <Stack align={{ base: 'start', md: 'end' }} direction={{ base: 'column', md: 'row' }} justifyContent='space-between' spacing={{ base: '21vw', md: '0' }}>
        <MenuContentsList />
        <FooterLogo />
      </Stack>
    </Box>
  );
}