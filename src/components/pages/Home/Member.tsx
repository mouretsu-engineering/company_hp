import { VStack } from "@chakra-ui/react";
import { Headline } from "./Headline";
import { MemberCards } from "./MemberCards";

export const Member = () => {
  return (
    <VStack align='start' bgColor='#1f1f1f' px={{ base: '4.27vw', md: '11.1vw' }} py='5vw' mt='5vw' gap={{ base: '17vw', md: '5vw' }} id="member">
      <Headline label='MEMBER' labelColor='#E61515' title='メンバー紹介' titleColor='white' />
      <MemberCards />
    </VStack>
  );
}