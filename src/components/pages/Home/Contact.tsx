import { Stack, Text, VStack, useMediaQuery } from "@chakra-ui/react";
import { Headline } from "./Headline";
import { Color } from "@/utils/Color";
import { NavigateCompanyContact } from "./NavigateCompanyContact";
import { NavigateIndividualContact } from "./NavigateIndividualContact";

export const Contact = () => {
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const sizeValue = isLargerThan900 ? '3.47vw' : '6vw';
  const contactText = isLargerThan900 ? <ContactTextPc/> : <ContactTextSp/>;

  return (
    <VStack spacing={{ base: '9vw', md: '5.56vw' }} mb={{ base: '20vw', md: '14vw' }} px={{ base: '4.27vw', md: '0' }}>
      <VStack spacing={{ base: '4vw', md: '2vw' }}>
        <Headline align="center" label='CONTACT' labelColor={Color.mouretsuRed} title='お問い合わせ' />
        <Text fontSize={{ base: '3.73vw', md: '1.11vw' }} textAlign='center'>{contactText}</Text>
      </VStack>
      <Stack justify='center' direction={{ base: 'column', md: 'row' }} spacing={{ base: '6vw', md: '3.33vw' }} w='100%'>
        <NavigateCompanyContact sizeValue={sizeValue} />
        <NavigateIndividualContact sizeValue={sizeValue} />
      </Stack>
    </VStack>
  );
}

const ContactTextPc = () => (
  <>各種サービスについてのご相談・ご質問、お見積もり依頼など、<br /> お気軽にお問い合わせください。</>
);
const ContactTextSp = () => (
  <>各種サービスについてのご相談・ご質問、お見積もり依頼など、お気軽にお問い合わせください。</>
);