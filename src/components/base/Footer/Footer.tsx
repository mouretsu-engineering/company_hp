import { Container, Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="gray.50" color="gray.700" as="footer">
      <Container maxW="5xl" py={4}>
        <Text as="small" color="black">© 2023 3Oinc.</Text>
      </Container>
    </Box>
  );
}