import { Stack } from "@chakra-ui/react";
import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type NameInputProps = {
  register: any;
  errors: any;
}

export const NameInput: React.FC<NameInputProps> = ({register, errors}) => {
  return (
    <InputField label='お名前' required>
      <Stack direction={{ base: 'column', md: 'row' }} w='100%' spacing={{ base: '5vw', md: '2.22vw' }}>
        <ContactInputAndErrorMsg register={register} name='lastName' placeholder='例) セイ' errors={errors} />
        <ContactInputAndErrorMsg register={register} name='firstName' placeholder='例) メイ' errors={errors} />
      </Stack>
    </InputField>
  );
}