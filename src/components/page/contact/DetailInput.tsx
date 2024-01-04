import { ContactTextareaAndErrorMsg } from "./ContactTextareaAndErrorMsg";
import { InputField } from "./InputField";

type DetailInputProps = {
  control: any;
  errors: any;
}

export const DetailInput: React.FC<DetailInputProps> = ({control, errors}) => {
  return (
    <InputField label='お問い合わせ詳細' required>
      <ContactTextareaAndErrorMsg control={control} name='detail' placeholder='お問い合せ内容をご入力ください。' error={errors.detail && errors.detail?.message} />
    </InputField>
  );
}