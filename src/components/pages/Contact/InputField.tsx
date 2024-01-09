import { Flex, Text, VStack } from "@chakra-ui/react";
import { RequiredBadge } from "./RequiredBadge";

type InputFieldProps = {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

export const InputField: React.FC<InputFieldProps> = ({label, required=false, children}) => {

  return (
    <VStack align='start' spacing={{ base: '5vw', md: '1.5vw' }} w='100%'>
      <Flex align='center' w='100%' justifyContent='space-between'>
        <Text fontSize={{ base: '4.27vw', md: '1.25vw' }} fontWeight='bold'>{label}</Text>
        {required && <RequiredBadge />}
      </Flex>
      {children}
    </VStack>
  );
}