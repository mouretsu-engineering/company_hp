import { Flex, Text } from "@chakra-ui/react";

type NavigateContactBoxProps = {
  text: string;
  icon : React.ReactNode;
  bgGradient: string;
  onClick?: () => void;
}

export const NavigateContactBox: React.FC<NavigateContactBoxProps> = ({text, icon, bgGradient, onClick}) => {
  return (
    <Flex
      align='center'
      bgGradient={bgGradient}
      borderRadius='16px'
      boxShadow="2px 2px 6px rgba(0, 0, 0, 0.25)"
      cursor='pointer'
      h={{ base: '30vw', md: '14vw' }}
      w={{ base: '100%', md: '37.2vw' }}
      px={{ base: '6.4vw', md: '2.8vw' }}
      justify='space-between'
      onClick={onClick}
    >
      <Text color='white' fontSize={{ base: '4.27vw', md: '1.7vw' }} fontWeight='bold'>{text}</Text>
      <Flex align='center' justify='center' boxSize={{ base: '14vw', md: '5.56vw' }} bgColor='white' borderRadius='50%'>
        {icon}
      </Flex>
    </Flex>
  );
}
