import { PrimaryImg } from "@/components/ui/PrimaryImg";
import { Box } from "@chakra-ui/react";

export const FooterPaintImg = () => {
  return (
    <>
      <Box
        display={{ base: 'none', md: 'block' }}
        h='4.17vw'
        position='relative'
        w='100%'
      >
        <PrimaryImg src='/images/footer-paint-pc.png' alt="猛烈" />
      </Box>
      <Box
        display={{ base: 'block', md: 'none' }}
        h='10vw'
        position='relative'
        w='100%'
      >
        <PrimaryImg src='/images/footer-paint-pc.png' alt="猛烈" />
      </Box>
    </>
  );
}