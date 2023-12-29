import { Box } from "@chakra-ui/react";
import { CompanyLogo } from "@/components/ui/CompanyLogo";

export default function HeaderLeft() {
  return (
    <Box w="22.5vw" h='2vw' position='relative'>
      <CompanyLogo />
    </Box>
  );
}