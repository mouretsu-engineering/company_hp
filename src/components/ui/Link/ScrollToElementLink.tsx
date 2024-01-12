import useScrollToElement from "@/hook/useScrollToElement";
import { Box } from "@chakra-ui/react";

type ScrollToElementLinkProps = {
  elementId: string;
  text: string;
};

export const ScrollToElementLink: React.FC<ScrollToElementLinkProps> = ({elementId, text}) => {
  const scrollToElement = useScrollToElement();
  return (
    <Box
      as="a"
      cursor='pointer'
      onClick={() => scrollToElement(elementId)}
      _hover={{ textDecoration: 'underline' }}
    >
      {text}
    </Box>
  );
}