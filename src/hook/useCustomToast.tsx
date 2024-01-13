import { useToast } from '@chakra-ui/react'

export const useCustomToast = () => {
  const toast = useToast();

  const showToast = (title: string, description: string, status: "success" | "error") => {
    toast({
      title: title,
      description: description,
      status: status,
      duration: 5000,
      isClosable: true,
    });
  };

  return showToast;
};