import { Box } from "@chakra-ui/react";
import { MemberTopImg } from "./MemberTopImg";
import { MembersIntroduction } from "./MembersIntroduction";
import { MemberBottomImg } from "./MemberBottomImg";

export const Member = () => {
  return (
    <Box bgColor='#222222' my={{ base: '10vw', md: '0' }} >
      <MemberTopImg />
      <MembersIntroduction />
      <MemberBottomImg />
    </Box>
  );
}