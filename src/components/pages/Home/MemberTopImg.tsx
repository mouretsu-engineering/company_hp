import { Box } from "@chakra-ui/react";
import { PrimaryImg } from "@/components/ui/PrimaryImg";

export const MemberTopImg = () => {
  return (
    <>
      <Box h='403px' position='relative' display={{ base: 'none', md: 'block' }}>
        <PrimaryImg src={'/images/member-design-top-pc.png'} alt="メンバー" />
      </Box>
      <Box h='21.3vw' position='relative' display={{ base: 'block', md: 'none' }}>
        <PrimaryImg src={'/images/member-design-top-sp.png'} alt="メンバー" />
      </Box>
    </>
  );
}