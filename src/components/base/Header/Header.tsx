import HeaderLeft from "@/components/page/Home/HeaderLeft";
import HeaderRight from "@/components/page/Home/HeaderRight";
import { Box, Flex } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box as="header" position="sticky" top='0'>
      <Flex alignItems='center' h='10vw' p='2.7vw' justify="space-between">
        <HeaderLeft />
        <HeaderRight />
      </Flex>
    </Box>
  );
}