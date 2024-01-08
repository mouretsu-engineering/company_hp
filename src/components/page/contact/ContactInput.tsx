import { Input } from "@chakra-ui/react";
import { Controller } from 'react-hook-form';

type ContactInputProps = {
  control: any;
  name: string;
  placeholder: string;
}

export const ContactInput: React.FC<ContactInputProps> = ({control, name, placeholder}) => {

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Input
          {...field}
          variant='flushed'
          placeholder={placeholder}
          focusBorderColor="transparent"
          _focus={{
            borderBottom: '1px solid #c9cacc74',
          }}
          fontSize={{ base: '4.27vw', md: '1.25vw' }}
          _placeholder={{ color: '#D9D9D9' }}
        />
      )}
    />
  );
}