import { ContactTextareaAndErrorMsg } from "./ContactTextareaAndErrorMsg";
import { InputField } from "./InputField";

type DetailInputProps = {
  register: any;
  errors: any;
}

export const DetailInput: React.FC<DetailInputProps> = ({register, errors}) => {
  return (
    <InputField label='お問い合わせ詳細' required>
      <ContactTextareaAndErrorMsg register={register} name='detail' placeholder='お問い合せ内容をご入力ください。' errors={errors} />
    </InputField>
  );
}