import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type EmailInputProps = {
  control: any;
  errors: any;
}

export const EmailInput: React.FC<EmailInputProps> = ({control, errors}) => {
  return (
    <InputField label='業務用メールアドレス' required>
      <ContactInputAndErrorMsg control={control} name='email' placeholder='例) info@mouretsu-engineering.com' error={errors.email && errors.email?.message} />
    </InputField>
  );
}