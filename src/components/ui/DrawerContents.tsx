import { Box, Button, HStack, IconButton, VStack, useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import {
  List,
  ListItem,
} from '@chakra-ui/react'
import { BaseNextLink } from "@/components/ui/Link/BaseNextLink";
import Image from 'next/image';
import { SpMenu } from "./SpMenu";

type DrawerContentsProps = {
  isOpen: boolean;
  onClose: () => void;
}

export const DrawerContents: React.FC<DrawerContentsProps> = ({isOpen, onClose}) => {

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size='full'>
      <DrawerContent>
        <DrawerCloseButton color='white' />
        <DrawerHeader bgColor='#222222' p='24px 16px'>
          <Box
            h='20px'
            position='relative'
            w='42px'
            >
            <Image
              src="/images/mouretsu-icon-white.png"
              alt="株式会社猛烈エンジニアリング"
              layout="fill"
              objectFit="cover"
            />
          </Box>
        </DrawerHeader>
        <DrawerBody bgColor='#222222' p='24px 16px'>
          <SpMenu />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}