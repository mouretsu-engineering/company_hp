import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type PostInputProps = {
  register: any;
  errors: any;
}

export const PostInput: React.FC<PostInputProps> = ({register, errors}) => {
  return (
    <InputField label='役職'>
      <ContactInputAndErrorMsg register={register} name='post' placeholder='例) 部長' errors={errors} />
    </InputField>
  );
}