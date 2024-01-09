import { FormControl, Textarea } from "@chakra-ui/react";
import { ErrorMsg } from "./ErrorMsg";

type ContactTextareaAndErrorMsgProps = {
  register: any;
  name: string;
  placeholder: string;
  errors: any;
}

export const ContactTextareaAndErrorMsg: React.FC<ContactTextareaAndErrorMsgProps> = ({register, name, placeholder, errors}) => {

  return (
    <FormControl isInvalid={errors[name]}  w='100%'>
      <Textarea
        {...register(name)}
        variant='flushed'
        placeholder={placeholder}
        p={{ base: '0 0 3vw 0', md: '0 0 1vw 0' }}
        focusBorderColor="transparent"
        _focus={{
          borderBottom: '1px solid #c9cacc74',
        }}
        fontSize={{ base: '4.27vw', md: '1.25vw' }}
        _placeholder={{ color: '#D9D9D9' }}
      />
      {errors[name] && <ErrorMsg error={errors[name].message} />}
    </FormControl>
  );
}