import { Text } from "@chakra-ui/react";

type ErrorMsgProps = {
  error: string;
}

export const ErrorMsg: React.FC<ErrorMsgProps> = ({error}) => {
  return (
    <Text color='#E61515' fontSize={{ base: '3.2vw', md: '0.83vw' }} fontWeight='bold'>{error}</Text>
  );
}