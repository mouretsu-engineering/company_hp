import { Text, VStack } from "@chakra-ui/react";
import { CompanyInfoContents } from "./CompanyInfoContents";
import { Color } from "@/utils/Color";

export const CompanyInfo = () => {

  return (
    <VStack align='start' ml={{ base: '4.27vw', md: '25vw' }} spacing={{ base: '4.27vw', md: '2vw' }} my={{ base: '21.3vw', md: '10vw' }}>
      <Text color={Color.mouretsuRed} fontSize={{ base: '3.73vw', md: '1.39vw' }} fontWeight='bold'>/* COMPANY INFO */</Text>
      <CompanyInfoContents />
    </VStack>
  );
}