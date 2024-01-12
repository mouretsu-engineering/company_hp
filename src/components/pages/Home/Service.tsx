import { VStack } from "@chakra-ui/react";
import { ServiceHeadline } from "./ServiceHeadline";
import { ServiceContents } from "./ServiceContents";

export const Service = () => {
  return (
    <VStack align='start' gap={{ base: '10vw', md: '3.5vw' }} id="service">
      <ServiceHeadline />
      <ServiceContents />
    </VStack>
  );
}
