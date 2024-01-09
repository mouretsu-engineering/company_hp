import { WhiteBorderBtn } from "@/components/ui/Button/WhiteBorderBtn";
import { Box, Flex, HStack } from "@chakra-ui/react";

export const ContactNavigation = () => {
  return (
    <Flex align='end'>
      <HStack gap={{ base: '23.2vw', md: '2.2vw' }} >
        <Box fontSize={{ base: '5.33vw', md: '1.67vw' }} fontWeight='bold'>お問い合わせ</Box>
        <WhiteBorderBtn path='/contact' />
      </HStack>
    </Flex>
  );
}
