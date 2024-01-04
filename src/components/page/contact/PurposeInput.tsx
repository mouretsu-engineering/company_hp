import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type PurposeInputProps = {
  control: any;
  errors: any;
}

export const PurposeInput: React.FC<PurposeInputProps> = ({control, errors}) => {
  return (
    <InputField label='お問い合わせ目的' required>
      <ContactInputAndErrorMsg control={control} name='purpose' placeholder='例) アプリ構築' error={errors.purpose && errors.purpose?.message} />
    </InputField>
  );
}