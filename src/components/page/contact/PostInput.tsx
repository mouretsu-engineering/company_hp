import { ContactInputAndErrorMsg } from "./ContactInputAndErrorMsg";
import { InputField } from "./InputField";

type PostInputProps = {
  control: any;
  errors: any;
}

export const PostInput: React.FC<PostInputProps> = ({control, errors}) => {
  return (
    <InputField label='役職'>
      <ContactInputAndErrorMsg control={control} name='post' placeholder='例) 部長' error={errors.post && errors.post?.message} />
    </InputField>
  );
}