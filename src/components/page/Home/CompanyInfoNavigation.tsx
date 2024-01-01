import { Box, Button, HStack } from "@chakra-ui/react";
import Router from 'next/router'

export const CompanyInfoNavigation = () => {
  return (
    <HStack gap={{ base: '24.5vw', md: '2.2vw' }}>
      <Box fontSize={{ base: '5.3vw', md: '1.7vw' }}>
        会社案内を見る
      </Box>
      <Button
        variant='outline'
        colorScheme='white'
        h={{ base: '21.3vw', md: '11vw' }}
        w={{ base: '21.3vw', md: '11vw' }}
        borderRadius='50%'
        onClick={() => Router.push('/company')}
      >
        ▶
      </Button>
    </HStack>
  );
}
