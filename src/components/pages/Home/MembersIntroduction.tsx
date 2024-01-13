import { VStack } from "@chakra-ui/react";
import { Headline } from "./Headline";
import { MemberCards } from "./MemberCards";

export const MembersIntroduction = () => {
  return (
    <VStack
      align='start'
      bg={{ base: 'url(/images/member-design-center-sp.png)', md: 'url(/images/member-design-center-pc.png)' }}
      bgSize='contain'
      pb={{ base: '4.27vw', md: '3vw' }}
      px={{ base: '4.27vw', md: '11.1vw' }}
      spacing={{ base: '10vw', md: '5vw' }}
      id="member"
    >
      <Headline label='MEMBER' labelColor='#E61515' title='メンバー紹介' titleColor='white' />
      <MemberCards />
    </VStack>
  );
}