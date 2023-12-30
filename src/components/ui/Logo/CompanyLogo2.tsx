import Image from 'next/image';

export const CompanyLogo2: React.FC = () => {
  return (
    <Image
      src="/images/company-logo-2.png"
      alt="株式会社猛烈エンジニアリング"
      layout="fill"
      objectFit="cover"
    />
    );
};
