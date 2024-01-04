import { VStack } from "@chakra-ui/react";
import { useContactForm } from "@/hook/useContactForm";
import { NameInput } from "./NameInput";
import { CompanyInput } from "./CompanyInput";
import { DepartmentInput } from "./DepartmentInput";
import { PostInput } from "./PostInput";
import { EmailInput } from "./EmailInput";
import { TellInput } from "./TellInput";
import { PurposeInput } from "./PurposeInput";
import { DetailInput } from "./DetailInput";
import { SubmitBtn } from "./SubmitBtn";

const inputComponents = [
  NameInput,
  CompanyInput,
  DepartmentInput,
  PostInput,
  EmailInput,
  TellInput,
  PurposeInput,
  DetailInput
];

export const ContactForm = () => {
  const { handleSubmit, control, errors } = useContactForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <VStack
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      align='start'
      bgColor='white'
      ml={{ base: '4.27vw', md: '11.1vw' }}
      mb={{ base: '10vw', md: '15vw' }}
      pl={{ base: '6.4vw', md: '13.89vw' }}
      pr={{ base: '6.4vw', md: '25vw' }}
      py={{ base: '17vw', md: '7.2vw' }}
      spacing={{ base: '17vw', md: '3.89vw' }}
      w={{ base: 'auto', md: '100%' }}
    >
      {inputComponents.map((InputComponent, index) => (
        <InputComponent key={index} control={control} errors={errors} />
      ))}
      <SubmitBtn />
    </VStack>
  );
}