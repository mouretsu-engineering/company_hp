import { Box, Flex, Text, Image } from "@chakra-ui/react";

export default function Member() {
    return (
      <Flex
        as="section"
        minH="100vh" // 画面の縦幅全体を占めるように最小高さを設定
        width="100vw" // 画面の横幅全体に広がるように設定
        direction={{ base: "column", md: "row" }} // レスポンシブ対応
        justify="space-evenly" // コンテンツ間に均等なスペースを確保
        align="center" // 中央揃え
        id="member"
        paddingX={{ base: "4", md: "8" }} // 横の内側の余白を設定
        paddingY={{ base: "4", md: "8" }} // 縦の内側の余白を設定
        bgColor="white" // 白い背景色を設定
      >
        <Box flex={1} maxWidth={{ base: "100%", md: "50%" }}> {/* フレキシブルな幅の設定 */}
            <Image
            src="/images/20200502_noimage.jpg"
            alt="メンバーの写真"
            objectFit="contain" // 画像をBox内に収める
            width="100%" // 幅を100%に設定
            height="auto" // 高さを自動調整
            />
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
