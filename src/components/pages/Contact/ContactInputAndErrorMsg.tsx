import { FormControl } from "@chakra-ui/react";
import { ContactInput } from "./ContactInput";
import { ErrorMsg } from "./ErrorMsg";

type ContactInputAndErrorMsgProps = {
  register: any;
  name: string;
  placeholder: string;
  errors: any;
}

export const ContactInputAndErrorMsg: React.FC<ContactInputAndErrorMsgProps> = ({register, name, placeholder, errors}) => {

  return (
    <FormControl isInvalid={errors[name]} w='100%'>
      <ContactInput register={register} name={name} placeholder={placeholder} />
      {errors[name] && <ErrorMsg error={errors[name].message} />}
    </FormControl>
  );
}