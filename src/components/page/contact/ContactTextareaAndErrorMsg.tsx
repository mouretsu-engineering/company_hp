import { Text, Textarea, VStack } from "@chakra-ui/react";
import { Controller } from 'react-hook-form';

type ContactTextareaAndErrorMsgProps = {
  control: any;
  name: string;
  placeholder: string;
  error?: string;
}

export const ContactTextareaAndErrorMsg: React.FC<ContactTextareaAndErrorMsgProps> = ({control, name, placeholder, error}) => {

  return (
    <VStack align='start' w='100%'>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <Textarea
            {...field}
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
        )}
      />
      {error && <Text color='red' fontSize={{ base: '3.2vw', md: '0.83vw' }} fontWeight='bold'>{error}</Text>}
    </VStack>
  );
}