import { Divider, Stack } from "@chakra-ui/react";
import { ServiceContentImg } from "./ServiceContentImg";
import { ServiceContentOverview } from "./ServiceContentOverview";

type ServiceContentProps = {
  index: string;
  title: string;
  text: string;
  src: string;
  alt: string;
}

export const ServiceContent: React.FC<ServiceContentProps> = ({index, title, text, src, alt}) => {
  return (
    <>
      <Stack
        align={{ base: 'start', md: 'center' }}
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: '6.4vw', md: '2.78vw' }}
        h={{ base: '100%', md: '17.2vw' }}
        my={{ base: '8.53vw', md: '1.67vw' }}
      >
        <ServiceContentOverview index={index} title={title} text={text} />
        <Divider orientation='vertical' display={{ base: 'none', md: 'block' }} />
        <ServiceContentImg src={src} alt={alt} />
      </Stack>
      <Divider/>
    </>
  );
}
