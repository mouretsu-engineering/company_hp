import { AsteriskLabel } from "@/components/ui/AsteriskLabel";
import { Box, VStack } from "@chakra-ui/react";

type HeadlineProps = {
  align?: string;
  label: string;
  labelColor?: string;
  title: string;
  titleColor?: string;
}

export const Headline: React.FC<HeadlineProps> = ({align='start', label, labelColor, title, titleColor}) => {
  return (
    <VStack align={align} fontWeight='bold' gap={{ base: '4.27vw', md: '2.5vw' }} >
      <AsteriskLabel label={label} labelColor={labelColor} />
      <Box fontSize={{ base: '8.53vw', md: '3.9vw' }} color={titleColor}>{title}</Box>
    </VStack>
  );
}
