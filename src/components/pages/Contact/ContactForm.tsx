import { Box, VStack } from "@chakra-ui/react";
import { NameInput } from "./NameInput";
import { CompanyInput } from "./CompanyInput";
import { DepartmentInput } from "./DepartmentInput";
import { PostInput } from "./PostInput";
import { EmailInput } from "./EmailInput";
import { TellInput } from "./TellInput";
import { PurposeInput } from "./PurposeInput";
import { DetailInput } from "./DetailInput";
import { SubmitBtn } from "./SubmitBtn";
import { useSubmitContactForm } from "@/hook/useSubmitContactForm";

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
  const { handleSubmit, register, errors, isSubmitting } = useSubmitContactForm();

  return (
    <Box ml={{ base: '4.27vw', md: '11.1vw' }} >
      <VStack
        as="form"
        onSubmit={handleSubmit}
        align='start'
        bgColor='white'
        mb={{ base: '10vw', md: '15vw' }}
        pl={{ base: '6.4vw', md: '13.89vw' }}
        pr={{ base: '6.4vw', md: '25vw' }}
        py={{ base: '17vw', md: '7.2vw' }}
        spacing={{ base: '15vw', md: '4vw' }}
        w={{ base: 'auto', md: '100%' }}
      >
        {inputComponents.map((InputComponent, index) => (
          <InputComponent key={index} register={register} errors={errors} />
        ))}
        <SubmitBtn isSubmitting={isSubmitting} />
      </VStack>
    </Box>
  );
}