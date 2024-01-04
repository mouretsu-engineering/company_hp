import Image from 'next/image';

type PrimaryImgProps = {
  src: string;
  alt: string;
}

export const PrimaryImg: React.FC<PrimaryImgProps> = ({src, alt}) => {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      style={{
        objectFit: 'cover',
      }}
      sizes="100vw"
    />
    );
};
