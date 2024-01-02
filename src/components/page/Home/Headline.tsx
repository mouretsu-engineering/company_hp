import { Box, VStack } from "@chakra-ui/react";

type HeadlineProps = {
  label: string;
  labelColor?: string;
  title: string;
  titleColor?: string;
}

export const Headline: React.FC<HeadlineProps> = ({label, labelColor, title, titleColor}) => {
  return (
    <VStack align='start' fontWeight='bold' gap={{ base: '4.27vw', md: '2.5vw' }}>
      <Box color={labelColor} fontSize={{ base: '3.7vw', md: '1.4vw' }} >/* {label} */</Box>
      <Box fontSize={{ base: '8.53vw', md: '3.9vw' }} color={titleColor}>{title}</Box>
    </VStack>
  );
}
