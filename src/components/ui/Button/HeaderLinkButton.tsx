import { Text } from "@chakra-ui/react";

interface HeaderLinkButtonProps {
  label: string;
  href: string;
}

export const HeaderLinkButton: React.FC<HeaderLinkButtonProps> = ({ label, href }) => {
  return (
    <Text
      as="a"
      href={href}
      fontWeight="bold"
      fontSize="20"
      color="black"
      ml={10}
      mt={20}
    >
      {label}
    </Text>
  );
};
