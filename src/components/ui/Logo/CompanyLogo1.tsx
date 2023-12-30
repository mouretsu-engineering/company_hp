import Image from 'next/image';

export const CompanyLogo1: React.FC = () => {
  return (
    <Image
      src="/images/company-logo-1.png"
      alt="株式会社猛烈エンジニアリング"
      layout="fill"
      objectFit="cover"
    />
    );
};
