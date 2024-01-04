import { CompanyInfo } from "@/components/page/company/CompanyInfo";
import { CompanyPageHeadLine } from "@/components/page/company/CompanyPageHeadLine";
import { Message } from "@/components/page/company/Message";
import { Mission } from "@/components/page/company/Mission";
import { OfficeImg } from "@/components/page/company/OfficeImg";
import { PhilosophyImg } from "@/components/page/company/PhilosophyImg";
import { PresidentName } from "@/components/page/company/PresidentName";
import { Vision } from "@/components/page/company/Vision";
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
