import { Box } from "@chakra-ui/react";
import { PrimaryImg } from "@/components/ui/PrimaryImg";

type CatchphraseImgBoxProps = {
  display: { base: string, md: string },
  pl: string,
  h: string,
  src: string,
};

export const CatchphraseImgBox: React.FC<CatchphraseImgBoxProps> = ({ display, pl, h, src }) => (
  <Box display={display} pl={pl} w='100%'>
    <Box h={h} position='relative'>
      <PrimaryImg src={src} alt="キャッチフレーズ" />
    </Box>
  </Box>
);