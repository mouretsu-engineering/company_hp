import { PrimaryImg } from "@/components/ui/PrimaryImg";
import { Box } from "@chakra-ui/react";

type ServiceContentImgProps = {
  src: string;
  alt: string;
}

export const ServiceContentImg: React.FC<ServiceContentImgProps> = ({src, alt}) => {
  return (
    <Box
      position='relative'
      w='100%'
      h={{ base: '58.7vw', md: '16.1vw' }}
    >
      <PrimaryImg src={src} alt={alt} />
    </Box>
  );
}
