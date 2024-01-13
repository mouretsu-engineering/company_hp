import { Box } from "@chakra-ui/react";
import { PrimaryImg } from "@/components/ui/PrimaryImg";
import Image from 'next/image';

export const MemberTopImg = () => {
  return (
    <>
      <Box h='403px' position='relative' display={{ base: 'none', md: 'block' }}>
        <Image
          src={'/images/member-design-top-pc.png'}
          alt='メンバー'
          fill
          style={{
            objectFit: 'cover',
            objectPosition:"left"
          }}
          sizes="100vw"
        />
      </Box>
      <Box h='21.3vw' position='relative' display={{ base: 'block', md: 'none' }}>
        <PrimaryImg src={'/images/member-design-top-sp.png'} alt="メンバー" />
      </Box>
    </>
  );
}