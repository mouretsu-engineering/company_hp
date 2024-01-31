import { Box, BoxProps } from "@chakra-ui/react";

type AsteriskLabelProps = BoxProps & {
  label: string;
  labelColor?: string;
}

export const AsteriskLabel: React.FC<AsteriskLabelProps> = ({label, labelColor, ...props}) => {
  return (
    <Box as="label" color={labelColor} fontSize={{ base: '3.7vw', md: '1.4vw' }} {...props}>/* {label} */</Box>
  );
}