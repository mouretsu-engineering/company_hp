import { Color } from "@/utils/Color";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

type PhilosophyProps = {
  label: string;
  title: string;
  text: string;
}

export const Philosophy: React.FC<PhilosophyProps> = ({label, title, text}) => {
  return (
    <Box mr={{ base: '4.27vw', md: '11.1vw' }} ml={{ base: '4.27vw', md: '25vw' }}>
      <VStack align='start' spacing={{ base: '12vw', md: '3.89vw' }}>
        <VStack align='start' spacing={{ base: '4.27vw', md: '2.22vw' }}>
          <Text color={Color.mouretsuRed} fontSize={{ base: '3.73vw', md: '1.39vw' }} fontWeight='bold'>/* {label} */</Text>
          <Heading as='h2' fontSize={{ base: '8.53vw', md: '3.89vw' }} fontWeight='bold' whiteSpace='pre-wrap'>{title}</Heading>
        </VStack>
        <Text fontSize={{ base: '5.33vw', md: '1.67vw' }} fontWeight='bold' lineHeight={{ base: '10vw', md: '3.33vw' }}>
          {text}
        </Text>
      </VStack>
    </Box>
  );
}
