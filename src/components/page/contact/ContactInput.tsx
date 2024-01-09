import { Input } from "@chakra-ui/react";

type ContactInputProps = {
  register: any;
  name: string;
  placeholder: string;
}

export const ContactInput: React.FC<ContactInputProps> = ({register, name, placeholder}) => {

  return (
    <Input
      {...register(name)}
      variant='flushed'
      placeholder={placeholder}
      focusBorderColor="transparent"
      _focus={{
        borderBottom: '1px solid #c9cacc74',
      }}
      fontSize={{ base: '4.27vw', md: '1.25vw' }}
      _placeholder={{ color: '#D9D9D9' }}
    />
  );
}