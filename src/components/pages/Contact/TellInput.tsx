import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type TellInputProps = {
  register: any;
  errors: any;
}

export const TellInput: React.FC<TellInputProps> = ({register, errors}) => {
  return (
    <InputField label='電話番号' required>
      <ContactInputAndErrorMsg register={register} name='tell' placeholder='ハイフン無し' errors={errors} />
    </InputField>
  );
}