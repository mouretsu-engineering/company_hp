import { CompanyInfo } from "@/components/pages/Company/CompanyInfo";
import { CompanyPageHeadLine } from "@/components/pages/Company/CompanyPageHeadLine";
import { Message } from "@/components/pages/Company/Message";
import { Mission } from "@/components/pages/Company/Mission";
import { OfficeImg } from "@/components/pages/Company/OfficeImg";
import { PhilosophyImg } from "@/components/pages/Company/PhilosophyImg";
import { PresidentName } from "@/components/pages/Company/PresidentName";
import { Vision } from "@/components/pages/Company/Vision";
import { VStack } from "@chakra-ui/react";

export default function Company() {

  return (
    <>
      <CompanyPageHeadLine />
      <OfficeImg />
      <VStack align='start' bgColor='#EDEDED' mt={{ base: '21.3vw', md: '10vw' }} spacing={{ base: '21.3vw', md: '10vw' }}>
        <Mission />
        <PhilosophyImg />
        <Vision />
        <Message />
      </VStack>
      <PresidentName />
      <CompanyInfo />
    </>
  )
}
