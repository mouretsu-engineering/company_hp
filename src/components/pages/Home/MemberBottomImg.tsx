import { Box } from "@chakra-ui/react";
import { PrimaryImg } from "@/components/ui/PrimaryImg";
import Image from 'next/image';

export const MemberBottomImg = () => {
  return (
    <>
      <Box h='405px' position='relative' display={{ base: 'none', md: 'block' }}>
        <Image
          src={'/images/member-design-bottom-pc.png'}
          alt='メンバー'
          fill
          style={{
            objectFit: 'cover',
            objectPosition:"left"
          }}
          sizes="100vw"
        />
      </Box>
      <Box h='21.6vw' position='relative' display={{ base: 'block', md: 'none' }}>
        <PrimaryImg src={'/images/member-design-bottom-sp.png'} alt="メンバー" />
      </Box>
    </>
  );
}