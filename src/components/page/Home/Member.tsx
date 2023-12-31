import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function Member() {
    return (
      <Flex
        as="section"
        direction={{ base: "column", md: "row" }} // レスポンシブ対応
        align="center" // 中央揃え
        id="member"
      >
        <Box flex={1} maxWidth={{ base: "100%", md: "50%" }}> {/* フレキシブルな幅の設定 */}

        </Box>

        <Box flex={1} maxWidth={{ base: "100%", md: "50%" }}>
        <Text fontSize="2xl" fontWeight="bold" mb="10" color="black">
          杉本悠哉
        </Text>
        <Text fontSize="md" mb="10" color="black">
          駆け出しのエンジニアで、日々猛烈に勉強中。
        </Text>
        <Flex direction="row" alignItems="flex-start">
          <Text fontSize="sm" fontWeight="bold" color="black">
            経歴
          </Text>
          <Box>
            <Text fontSize="sm" color="black" ml={"8%"}>
              甲南大学卒業<br /><br />
              株式会社ベネフィット・ワン入社<br />
              営業本部・特別法人チームとして、従業員1万名超えの企業を担当。<br /><br />
              株式会社みんなシステムズ入社<br />
              バックエンドエンジニアとして、PHP, Laravelを用いたシステム開発に従事。<br /><br />
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
