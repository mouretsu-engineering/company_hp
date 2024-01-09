import { PrimaryImg } from "@/components/ui/PrimaryImg";
import { Box } from "@chakra-ui/react";

export const OfficeImg = () => {
  return (
    <>
      <Box
        display={{ base: 'none', md: 'block' }}
        h='36.8vw'
        position='relative'
        w='100%'
      >
        <PrimaryImg src="/images/office-pc.png" alt="会社案内" />
      </Box>
      <Box
        display={{ base: 'block', md: 'none' }}
        h='74.7vw'
        position='relative'
        w='100%'
      >
        <PrimaryImg src="/images/office-sp.png" alt="会社案内" />
      </Box>
    </>
  );
}
