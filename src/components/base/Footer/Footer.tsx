import { Box, Divider } from "@chakra-ui/react";
import { CopyrightSection } from "./CopyrightSection";
import { FooterNavigationAndLogo } from "./FooterNavigationAndLogo";
import { FooterPaintImg } from "./FooterPaintImg";

export default function Footer() {
  return (
    <>
      <FooterPaintImg />
      <Box bg='#222222'>
        <FooterNavigationAndLogo />
        <Divider />
        <CopyrightSection />
      </Box>
    </>
  );
}