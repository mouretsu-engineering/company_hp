import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type EmailInputProps = {
  register: any;
  errors: any;
}

export const EmailInput: React.FC<EmailInputProps> = ({register, errors}) => {
  return (
    <InputField label='業務用メールアドレス' required>
      <ContactInputAndErrorMsg register={register} name='email' placeholder='例) info@mouretsu-engineering.com' errors={errors} />
    </InputField>
  );
}