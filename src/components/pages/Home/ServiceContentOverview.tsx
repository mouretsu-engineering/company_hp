import { Box, VStack, Stack } from "@chakra-ui/react";

type ServiceContentOverviewProps = {
  index: string;
  title: string;
  text: string;
}

export const ServiceContentOverview: React.FC<ServiceContentOverviewProps> = ({index, title, text}) => {
  return (
    <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '2vw', md: '1.6vw' }}>
      <Box fontSize={{ base: '3.7vw', md: '1.25vw' }} fontWeight='bold' color='#E61515'>{index}</Box>
      <VStack align='start' w={{ base: '100%', md: '44vw' }} gap={{ base: '6.4vw', md: '1.67vw' }}>
        <Box fontSize={{ base: '5.33vw', md: '1.67vw' }} fontWeight='bold'>{title}</Box>
        <Box fontSize={{ base: '4.27vw', md: '1.11vw' }}>{text}</Box>
      </VStack>
    </Stack>
  );
}
