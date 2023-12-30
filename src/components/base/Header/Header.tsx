import { HeaderLeft } from "@/components/page/Home/HeaderLeft";
import { HeaderRight } from "@/components/page/Home/HeaderRight";
import { Box, Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="header" position="sticky" top='0'>
      <Flex
        alignItems='center'
        h={{ base: '21.3vw', md: '10vw' }}
        p={{ base: '6.4vw 4.3vw', md: '2.7vw' }}
        justify="space-between"
      >
        <HeaderLeft />
        <HeaderRight />
      </Flex>
    </Box>
  );
}