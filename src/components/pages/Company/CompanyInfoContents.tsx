import { VStack } from "@chakra-ui/react";
import { CompanyInfoItem } from "./CompanyInfoItem";

export const CompanyInfoContents = () => {
  const companyInfo = [
    { label: '会社名', text: '株式会社猛烈エンジニアリング' },
    { label: '所在地', text: '株式会社猛烈エンジニアリング' },
    { label: '設立', text: '株式会社猛烈エンジニアリング' },
    { label: '代表者', text: '藤井 達也' },
    { label: '従業員数', text: '株式会社猛烈エンジニアリング' },
    { label: '沿革', text: '株式会社猛烈エンジニアリング' },
  ];

  return (
    <VStack
      align='start'
      bgColor='white'
      pl={{ base: '6.4vw', md: '4.4vw' }}
      pr={{ base: '6.4vw', md: '11.1vw' }}
      py={{ base: '17vw', md: '5.56vw' }}
      spacing={{ base: '10.67vw', md: '3.89vw' }}
      w='100%'
    >
      {companyInfo.map((info, index) => (
        <CompanyInfoItem key={index} label={info.label} text={info.text} />
      ))}
    </VStack>
  );
}