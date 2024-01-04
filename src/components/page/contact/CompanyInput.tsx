import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type CompanyInputProps = {
  control: any;
  errors: any;
}

export const CompanyInput: React.FC<CompanyInputProps> = ({control, errors}) => {
  return (
    <InputField label='会社名' required>
      <ContactInputAndErrorMsg control={control} name='company' placeholder='例) 株式会社猛烈エンジニアリング' error={errors.company && errors.company?.message} />
    </InputField>
  );
}