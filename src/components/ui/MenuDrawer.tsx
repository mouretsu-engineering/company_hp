import { Box, IconButton, useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons'
import { DrawerContents } from "@/components/ui/DrawerContents";

export const MenuDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box display={{ base: 'block', md: 'none' }}>
      <IconButton
        aria-label='Open Menu Drawer'
        bg='none'
        onClick={onOpen}
        size='8vw'
        icon={<HamburgerIcon boxSize="8vw" />}
        _active={{}}
        _hover={{}}
      />
      <DrawerContents isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}