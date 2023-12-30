import { IconButton } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'

export const ContactBtn: React.FC = () => {
  return (
    <IconButton
      aria-label='Transition to Contact'
      bgColor='#E61515'
      colorScheme="red"
      display={{ base: 'none', md: 'block' }}
      h='4.5vw'
      icon={<EmailIcon boxSize="2.2vw" />}
      isRound={true}
      w='4.5vw'
    />
    );
};
