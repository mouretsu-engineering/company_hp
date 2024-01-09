import { Button, Flex } from "@chakra-ui/react";

type SubmitBtnProps = {
  isSubmitting: boolean;
}

export const SubmitBtn: React.FC<SubmitBtnProps> = ({isSubmitting}) => {
  return (
    <Flex w='100%' justifyContent='center'>
      <Button
        borderRadius='30px'
        bgColor='#E61515'
        colorScheme='red'
        fontSize={{ base: '4.27vw', md: '1.25vw' }}
        w={{ base: '64vw', md: '19.4vw' }}
        type='submit'
        isLoading={isSubmitting}
      >
        送信
      </Button>
    </Flex>
  );
}