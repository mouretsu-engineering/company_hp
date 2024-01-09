import { Divider, Stack, Text, VStack } from "@chakra-ui/react";

type CompanyInfoItemProps = {
  label: string;
  text: string;
}

export const CompanyInfoItem: React.FC<CompanyInfoItemProps> = ({label, text}) => {

  return (
    <VStack align='start' spacing={{ base: '4.27vw', md: '3.89vw' }} w='100%'>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '6.4vw', md: '0' }} align={{ base: 'start', md: 'center' }} w='100%'>
        <Text fontWeight='bold' fontSize={{ base: '4.27vw', md: '1.25vw' }} w={{ base: '100%', md: '30%' }}>{label}</Text>
        <Text fontSize={{ base: '3.73vw', md: '1.1vw' }} w={{ base: '100%', md: '70%' }}>{text}</Text>
      </Stack>
      <Divider />
    </VStack>
  );
}
