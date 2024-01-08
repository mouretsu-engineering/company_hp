import { Stack } from "@chakra-ui/react";
import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type NameInputProps = {
  control: any;
  errors: any;
}

export const NameInput: React.FC<NameInputProps> = ({control, errors}) => {
  return (
    <InputField label='お名前' required>
      <Stack direction={{ base: 'column', md: 'row' }} w='100%' spacing={{ base: '10vw', md: '2.22vw' }}>
        <ContactInputAndErrorMsg control={control} name='lastName' placeholder='例) セイ' error={errors.lastName && errors.lastName?.message} />
        <ContactInputAndErrorMsg control={control} name='firstName' placeholder='例) メイ' error={errors.firstName && errors.firstName?.message} />
      </Stack>
    </InputField>
  );
}