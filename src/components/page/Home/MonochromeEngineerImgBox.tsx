import { Box } from "@chakra-ui/react";
import { PrimaryImg } from "@/components/ui/PrimaryImg";

export const MonochromeEngineerImgBox = () => {
  return (
    <>
      <Box
        display={{ base: 'none', md: 'block' }}
        position='absolute'
        bottom='10vw'
        left='-35vw'
        w='27.8vw'
        h='44.4vw'
      >
        <PrimaryImg src='/images/engineer-monochrome-pc.png' alt="株式会社猛烈エンジニアリング" />
      </Box>
      <Box
        display={{ base: 'block', md: 'none' }}
        position='relative'
        left='-11vw'
        w='94vw'
        h='120vw'
      >
        <PrimaryImg src='/images/engineer-monochrome-sp.png' alt="株式会社猛烈エンジニアリング" />
      </Box>
    </>
  );
}
