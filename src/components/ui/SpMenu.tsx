import { Box, VStack } from "@chakra-ui/react";
import { MenuContentsList } from "./MenuContentsList";
import { CompanyLogo2 } from "./Logo/CompanyLogo2";

export const SpMenu: React.FC = () => {

  return (
    <VStack align='start' gap={20}>
      <MenuContentsList />
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