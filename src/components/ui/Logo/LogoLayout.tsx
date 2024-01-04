import { PrimaryImg } from '../PrimaryImg';

type LogoLayoutProps = {
  src: string;
}

export const LogoLayout: React.FC<LogoLayoutProps> = ({src}) => {
  return (
    <PrimaryImg src={src} alt="株式会社猛烈エンジニアリング" />
    );
};
