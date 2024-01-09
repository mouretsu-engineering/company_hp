import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type DepartmentInputProps = {
  register: any;
  errors: any;
}

export const DepartmentInput: React.FC<DepartmentInputProps> = ({register, errors}) => {
  return (
    <InputField label='部署'>
      <ContactInputAndErrorMsg register={register} name='department' placeholder='例) マーケティング部' errors={errors} />
    </InputField>
  );
}