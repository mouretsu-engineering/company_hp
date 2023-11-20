import { Box, Flex } from "@chakra-ui/react";
import Image from 'next/image'
import { HeaderLinkButton } from "../../ui/Button/HeaderLinkButton";

export default function Header() {
  return (
    <Box as="header" position="relative">
      <Image 
        src="/images/light-gray-concrete-wall.jpg"
        alt="Header Background" 
        width={1950} 
        height={800} 
      />

      <Flex
        position="absolute"
        top={10}
        right={100}
        direction="row"
        p={4}
      >
        <HeaderLinkButton label="事業紹介" href="#about-us" />
        <HeaderLinkButton label="メンバー紹介" href="#member" />
        <HeaderLinkButton label="お問い合わせ" href="#contact" />
      </Flex>
    </Box>
  );
}
