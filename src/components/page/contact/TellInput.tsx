import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type TellInputProps = {
  register: any;
  errors: any;
}

export const TellInput: React.FC<TellInputProps> = ({register, errors}) => {
  return (
    <InputField label='電話番号' required>
      <ContactInputAndErrorMsg register={register} name='tell' placeholder='例) 000-0000-0000' errors={errors} />
    </InputField>
  );
}