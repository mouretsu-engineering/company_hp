import { PrimaryImg } from "@/components/ui/PrimaryImg";
import { Box, VStack } from "@chakra-ui/react";

export const ContactHeadline = () => {
  return (
    <VStack align='start' gap={{ base: '8.5vw', md: '4vw' }}>
      <Box
        h={{ base: '10.7vw', md: '7.2vw' }}
        position='relative'
        w={{ base: '70.4vw', md: '47.2vw' }}
      >
        <PrimaryImg src='/images/contact.png' alt="CONTACT" />
      </Box>
      <Box fontSize={{ base: '3.73vw', md: '1.11vw' }}>
        各種サービスについてのご相談・ご質問、お見積もり依頼など、<br/>お気軽にお問い合わせください。
      </Box>
    </VStack>
  );
}
