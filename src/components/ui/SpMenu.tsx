import { Box, VStack } from "@chakra-ui/react";
import {
  List,
  ListItem,
} from '@chakra-ui/react'
import { BaseNextLink } from "@/components/ui/Link/BaseNextLink";
import Image from 'next/image';
import { MenuContentsList } from "./MenuContentsList";

export const SpMenu: React.FC = () => {

  return (
    <VStack align='start' gap={20}>
      <MenuContentsList />
      <Box
        h='39.2vw'
        position='relative'
        w='91.5vw'
      >
        <Image
          src="/images/company-logo-2.png"
          alt="株式会社猛烈エンジニアリング"
          layout="fill"
          objectFit="cover"
        />
      </Box>
    </VStack>
  );
}