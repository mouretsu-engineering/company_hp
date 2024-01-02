import { Box, Flex, VStack } from "@chakra-ui/react";

type MemberCardProps = {
  index: string;
  enLastName: string;
  enFirstName: string;
  name: string;
  description: string;
}

export const MemberCard: React.FC<MemberCardProps> = ({index, enLastName, enFirstName, name, description}) => {
  return (
    <Box>
      <Flex h={{ base: '120vw', md: '30.6vw' }} justifyContent='space-between' fontWeight='bold'>
        <Box color='#E61515' fontSize={{ base: '3.73vw', md: '1.39vw' }} >{index}</Box>
        <Box color='#5B5B5B' fontSize={{ base: '14.9vw', md: '3.9vw' }} style={{ writingMode: "vertical-rl" }} lineHeight={{ base: '15vw', md: '3.5vw' }}>
          <Box>{enLastName}</Box>
          <Box>{enFirstName}</Box>
        </Box>
      </Flex>
      <VStack align='start' color='white' gap={{ base: '4.27vw', md: '1.5vw' }}>
        <Box fontSize={{ base: '5.3vw', md: '1.7vw' }} fontWeight='bold'>{name}</Box>
        <Box fontSize={{ base: '3.73vw', md: '1.1vw' }}>{description}</Box>
      </VStack>
    </Box>
  );
}
