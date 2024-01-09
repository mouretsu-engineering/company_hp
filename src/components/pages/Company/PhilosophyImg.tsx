import { PrimaryImg } from "@/components/ui/PrimaryImg";
import { Box } from "@chakra-ui/react";

export const PhilosophyImg = () => {
  return (
    <>
      <Box
        display={{ base: 'none', md: 'block' }}
        h='11.1vw'
        position='relative'
        w='100%'
      >
        <PrimaryImg src="/images/philosophy-pc.png" alt="会社案内" />
      </Box>
      <Box
        display={{ base: 'block', md: 'none' }}
        h='19.2vw'
        position='relative'
        w='100%'
      >
        <PrimaryImg src="/images/philosophy-sp.png" alt="会社案内" />
      </Box>
    </>
  );
}
