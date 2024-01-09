import { CatchphraseImgBox } from "./CatchphraseImgBox";

export const CatchphraseSection = () => {
  return (
    <>
      {/* PC表示 */}
      <CatchphraseImgBox
        display={{ base: 'none', md: 'block' }}
        pl='9vw'
        h='25vw'
        src="/images/catchphrase-pc.png"
      />
      {/* SP表示 */}
      <CatchphraseImgBox
        display={{ base: 'block', md: 'none' }}
        pl='4.3vw'
        h='35vw'
        src="/images/catchphrase-sp.png"
      />
    </>
  );
}
