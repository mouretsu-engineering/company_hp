import { Badge } from "@chakra-ui/react";

export const RequiredBadge = () => {

  return (
      <Badge
        colorScheme='red'
        borderRadius='12px'
        fontSize={{ base: '3.2vw', md: '1vw' }}
        px={{ base: '1.5vw', md: '0.5vw' }}
        py={{ base: '0.5vw', md: '0.1vw' }}
        variant='outline'
      >
        必須
      </Badge>
  );
}