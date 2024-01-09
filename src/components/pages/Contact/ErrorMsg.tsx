import { FormErrorMessage } from "@chakra-ui/react";

type ErrorMsgProps = {
  error: string;
}

export const ErrorMsg: React.FC<ErrorMsgProps> = ({error}) => {
  return (
    <FormErrorMessage fontSize={{ base: '3.2vw', md: '0.83vw' }} fontWeight='bold'>{error}</FormErrorMessage>
  );
}