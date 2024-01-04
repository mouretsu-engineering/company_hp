import { Box } from "@chakra-ui/react";
import { CompanyLogo1 } from "@/components/ui/Logo/CompanyLogo1";
import { Link } from '@chakra-ui/react'

export const HeaderLeft = () => {
  return (
    <Box
      as={Link}
      h={{ base: '5.3vw', md: '2vw' }}
      position='relative'
      w={{ base: '56vw', md: '22.5vw' }}
      href='/'
    >
      <CompanyLogo1 />
    </Box>
  );
}