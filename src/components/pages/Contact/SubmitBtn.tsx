import { Color } from "@/utils/Color";
import { Button, Flex } from "@chakra-ui/react";

type SubmitBtnProps = {
  isSubmitting: boolean;
}

export const SubmitBtn: React.FC<SubmitBtnProps> = ({isSubmitting}) => {
  return (
    <Flex w='100%' justifyContent='center'>
      <Button
        borderRadius='30px'
        bgColor={{ base: Color.mouretsuRed, md: 'white' }}
        borderColor={Color.mouretsuRed}
        borderWidth="1px"
        boxShadow={{ base: 'none', md: '2px 2px 2px rgba(0, 0, 0, 0.2)' }}
        color={{ base: 'white', md: Color.mouretsuRed }}
        fontSize={{ base: '4.27vw', md: '1.25vw' }}
        w={{ base: '64vw', md: '19.4vw' }}
        type='submit'
        isLoading={isSubmitting}
        _hover={{ md: { bgColor: Color.mouretsuRed, boxShadow: 'none', color: 'white' } }}
      >
        送信
      </Button>
    </Flex>
  );
}