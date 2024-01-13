import { Box, VStack } from "@chakra-ui/react";
import {
  ListItem,
} from '@chakra-ui/react'

type MenuContentsListItemProps = {
  label: string;
  children: React.ReactNode;
  onClose: () => void;
};

export const MenuContentsListItem: React.FC<MenuContentsListItemProps> = ({label, children, onClose}) => {

  return (
    <ListItem>
      <VStack align='start' fontSize='20px' gap={1} onClick={onClose}>
        <Box as="span" fontSize='10px'>/* {label} */</Box>
        {children}
      </VStack>
    </ListItem>
  );
}