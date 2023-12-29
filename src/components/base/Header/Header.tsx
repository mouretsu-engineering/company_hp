import { Box, Button, Flex, HStack } from "@chakra-ui/react";
import Image from 'next/image'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

export default function Header() {
  return (
    <Box as="header" position="sticky" top='0'>
      <Box h='10vw' p='2.7vw'>
        <Flex alignItems='center' h='100%' justify="space-between">
          <Box w="22.5vw" h='2vw' position='relative'>
            <Image
              src="/images/company-logo.png"
              alt="株式会社猛烈エンジニアリング"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <HStack gap='2.8vw'>
            <HStack gap='2.2vw' fontSize='1.1vw' fontWeight='bold'>
              <Link as={NextLink} href='/home' color='black' >
                会社案内
              </Link>
              <Link as={NextLink} href='/home' color='black' >
                事業内容
              </Link>
              <Link as={NextLink} href='/home' color='black' >
                メンバー
              </Link>
            </HStack>
            <Box>
              <Button bgColor='#E61515' colorScheme="red" borderRadius='50%' h='4.5vw' w='4.5vw' fontSize='2.2vw'><EmailIcon/></Button>
            </Box>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
