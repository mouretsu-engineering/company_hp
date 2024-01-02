import { Box, VStack } from "@chakra-ui/react";
import {
  ListItem,
} from '@chakra-ui/react'

type MenuContentsListItemProps = {
  label: string;
  children: React.ReactNode;
};

export const MenuContentsListItem: React.FC<MenuContentsListItemProps> = ({label, children}) => {

  return (
    <ListItem>
      <VStack align='start' fontSize='20px' gap={1}>
        <Box as="span" fontSize='10px'>/* {label} */</Box>
        {children}
      </VStack>
    </ListItem>
  );
}