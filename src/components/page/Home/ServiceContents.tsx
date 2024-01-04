import { Box, Divider } from "@chakra-ui/react";
import { ServiceContent } from "./ServiceContent";

const services = [
  {
    index: "01",
    title: "エンジニア育成",
    text: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    src: '/images/engineer-training.png',
    alt: "エンジニア育成"
  },
  {
    index: "02",
    title: "キャリア支援",
    text: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    src: '/images/career-support.png',
    alt: "キャリア支援"
  },
  {
    index: "03",
    title: "アプリケーション受託開発",
    text: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    src: '/images/app-development.png',
    alt: "アプリケーション受託開発"
  }
];

export const ServiceContents = () => {
  return (
    <Box w='100%' px={{ base: '4.27vw', md: '11.1vw' }}>
      <Divider borderColor='#C4C4C4' />
      {services.map(service => (
        <ServiceContent key={service.index} {...service} />
      ))}
    </Box>
  );
}