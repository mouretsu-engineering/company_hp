import { Button } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

export const ContactBtn: React.FC = () => {
  return (
    <Button bgColor='#E61515' colorScheme="red" borderRadius='50%' h='4.5vw' w='4.5vw' fontSize='2.2vw'><EmailIcon/></Button>
  );
};
