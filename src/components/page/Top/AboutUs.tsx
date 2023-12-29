import { Box, Text, Flex, Container } from "@chakra-ui/react";

export default function AboutUs() {
  return (
    <Flex
      as="section"
      direction="column"
      justify="center"
      maxW="container.lg"
      width="100%"
      id="about-us"
    >
      <Text fontSize="xl" color="black" mt="120px" mb="70">ABOUT US</Text>

      <Flex direction="row" justifyContent="center">
        <Box mr={100}>
          {"コンセプトが入ります".split("").map((char, index) => (
            <Box key={index}>
              <Text fontSize="50px" fontWeight="bold" color="black" lineHeight="1.2">
                {char}
              </Text>
            </Box>
          ))}
        </Box>
        <Box ml={8}>
          <Text fontSize="20px" color="black" fontWeight="bold" lineHeight="2">
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
            こちらのセクションには、コンセプト、メッセージが入る予定です。<br />
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
}
