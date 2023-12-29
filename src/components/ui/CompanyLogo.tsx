import Image from 'next/image';

export const CompanyLogo: React.FC = () => {
  return (
    <Image
      src="/images/company-logo.png"
      alt="株式会社猛烈エンジニアリング"
      layout="fill"
      objectFit="cover"
    />
    );
};
