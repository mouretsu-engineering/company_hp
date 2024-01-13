import { Box, Flex, VStack } from "@chakra-ui/react";
import { Headline } from "./Headline";
import { MemberCards } from "./MemberCards";
import { PrimaryImg } from "@/components/ui/PrimaryImg";

export const Member2 = () => {
  return (
    <Box bgColor='#222222' id="member1">
      <Box h={{ base: 'auto', md: '28vw' }} position='relative' display={{ base: 'none', md: 'block' }}>
        <PrimaryImg src={'/images/member-design-top-pc.png'} alt="メンバー" />
      </Box>
      <VStack
        align='start'
        bg={{ base: 'url(/images/member-design-top-pc.png)', md: 'url(/images/member-design-center-pc.png)' }}
        bgSize="cover"
        h={{ base: 'auto', md: 'auto' }}
        pb={{ base: '4.27vw', md: '3vw' }}
        px={{ base: '4.27vw', md: '11.1vw' }}
        spacing={{ base: '17vw', md: '5vw' }}
      >
        <Headline label='MEMBER' labelColor='#E61515' title='メンバー紹介' titleColor='white' />
        <MemberCards />
      </VStack>
      <Box h={{ base: 'auto', md: '28.12vw' }} position='relative' display={{ base: 'none', md: 'block' }}>
        <PrimaryImg src={'/images/member-design-bottom-pc.png'} alt="メンバー" />
      </Box>
    </Box>
  );
}