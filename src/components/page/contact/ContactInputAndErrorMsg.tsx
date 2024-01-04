import { VStack } from "@chakra-ui/react";
import { ContactInput } from "./ContactInput";
import { ErrorMsg } from "./ErrorMsg";

type ContactInputAndErrorMsgProps = {
  control: any;
  name: string;
  placeholder: string;
  error?: string;
}

export const ContactInputAndErrorMsg: React.FC<ContactInputAndErrorMsgProps> = ({control, name, placeholder, error}) => {

  return (
    <VStack align='start' w='100%'>
      <ContactInput control={control} name={name} placeholder={placeholder} />
      {error && <ErrorMsg error={error} />}
    </VStack>
  );
}