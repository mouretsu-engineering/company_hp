import { Box } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { SpMenu } from "./SpMenu";
import { CompanyLogo3 } from "./Logo/CompanyLogo3";

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
              <CompanyLogo3 />
          </Box>
        </DrawerHeader>
        <DrawerBody bgColor='#222222' p='24px 16px'>
          <SpMenu onClose={onClose} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}