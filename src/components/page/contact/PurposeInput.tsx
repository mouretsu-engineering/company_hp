import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type PurposeInputProps = {
  register: any;
  errors: any;
}

export const PurposeInput: React.FC<PurposeInputProps> = ({register, errors}) => {
  return (
    <InputField label='お問い合わせ目的' required>
      <ContactInputAndErrorMsg register={register} name='purpose' placeholder='例) アプリ構築' errors={errors} />
    </InputField>
  );
}