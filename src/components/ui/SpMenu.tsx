import { Box, VStack } from "@chakra-ui/react";
import { MenuContentsList } from "./MenuContentsList";
import { CompanyLogo2 } from "./Logo/CompanyLogo2";

type SpMenuProps = {
  onClose: () => void;
}

export const SpMenu: React.FC<SpMenuProps> = ({onClose}) => {

  return (
    <VStack align='start' h='100%' justifyContent="space-between">
      <MenuContentsList onClose={onClose} />
      <Box
        h='39.2vw'
        position='relative'
        w='91.5vw'
      >
        <CompanyLogo2/>
      </Box>
    </VStack>
  );
}