import Image from 'next/image';

type LogoLayoutProps = {
  src: string;
}

export const LogoLayout: React.FC<LogoLayoutProps> = ({src}) => {
  return (
    <Image
      src={src}
      alt="株式会社猛烈エンジニアリング"
      fill
      style={{
        objectFit: 'cover',
      }}
      sizes="100vw"
    />
    );
};
