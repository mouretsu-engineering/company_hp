import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type CompanyInputProps = {
  register: any;
  errors: any;
}

export const CompanyInput: React.FC<CompanyInputProps> = ({register, errors}) => {
  return (
    <InputField label='会社名'>
      <ContactInputAndErrorMsg register={register} name='company' placeholder='例) 株式会社猛烈エンジニアリング'errors={errors} />
    </InputField>
  );
}