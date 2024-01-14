import { Box, Flex } from "@chakra-ui/react";
import { ContactNavigation } from "./ContactNavigation";
import { ContactHeadline } from "./ContactHeadline";

export const Contact = () => {
  return (
    <Box px={{ base: '4.27vw', md: '5.56vw' }} mb={{ base: '25.6vw', md: '10vw' }}>
      <Box bgGradient="linear(to-r, #E61515, #9b0f0f)" h={{ base: '100vw', md: '37.2vw' }} borderRadius={{ base: '40px', md: '60px' }} px={{ base: '6.4vw', md: '5.56vw' }} py={{ base: '15vw', md: '7vw' }}>
        <Flex direction={{ base: 'column', md: 'row' }} color='white' justifyContent='space-between' h='100%'>
          <ContactHeadline />
          <ContactNavigation />
        </Flex>
      </Box>
    </Box>
  );
}
