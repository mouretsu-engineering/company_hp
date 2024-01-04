import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type DepartmentInputProps = {
  control: any;
  errors: any;
}

export const DepartmentInput: React.FC<DepartmentInputProps> = ({control, errors}) => {
  return (
    <InputField label='部署'>
      <ContactInputAndErrorMsg control={control} name='department' placeholder='例) マーケティング部' error={errors.department && errors.department?.message} />
    </InputField>
  );
}