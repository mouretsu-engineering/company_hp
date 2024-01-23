import { PrimaryImg } from "@/components/ui/PrimaryImg";
import { Box, HStack } from "@chakra-ui/react";
import { Headline } from "./Headline";
import { Color } from "@/utils/Color";

export const ServiceHeadline = () => {
  return (
    <HStack gap={{ base: '0', md: '9vw' }} align='end' pl={{ base: '4.27vw', md: '11.1vw' }}>
      <Headline label="SERVICE" labelColor={Color.mouretsuRed} title="サービス" />
      <Box
        display={{ base: 'none', md: 'block' }}
        position='relative'
        w='58.2vw'
        h='6.4vw'
      >
        <PrimaryImg src='/images/what-we-do.png' alt="WHAT WE DO" />
      </Box>
    </HStack>
  );
}
