import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type TellInputProps = {
  control: any;
  errors: any;
}

export const TellInput: React.FC<TellInputProps> = ({control, errors}) => {
  return (
    <InputField label='電話番号' required>
      <ContactInputAndErrorMsg control={control} name='tell' placeholder='例) 000-0000-0000' error={errors.tell && errors.tell?.message} />
    </InputField>
  );
}