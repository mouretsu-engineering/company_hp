import { Box } from "@chakra-ui/react";
import { PrimaryImg } from "@/components/ui/PrimaryImg";

export const PaintImg = () => {

  const images = [
    { src: '/images/red-paint-pc.png', display: { base: 'none', md: 'block' }, h: '24.5vw' },
    { src: '/images/red-paint-sp.png', display: { base: 'block', md: 'none' }, h: '36.2vw' }
  ];

  return (
    <Box pl={{ base: '0', md: '5.1vw' }}>
      {images.map((image, index) => (
        <Box
          key={index}
          display={image.display}
          h={image.h}
          position='relative'
          w='100%'
        >
          <PrimaryImg src={image.src} alt="株式会社猛烈エンジニアリング" />
        </Box>
      ))}
    </Box>
  );
}