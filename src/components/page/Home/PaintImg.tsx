import { Box } from "@chakra-ui/react";
import { LogoLayout } from "@/components/ui/Logo/LogoLayout";

export const PaintImg = () => {

  const images = [
    { src: '/images/red-paint-pc.png', display: { base: 'none', md: 'block' }, h: '25vw' },
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
          <LogoLayout src={image.src} />
        </Box>
      ))}
    </Box>
  );
}