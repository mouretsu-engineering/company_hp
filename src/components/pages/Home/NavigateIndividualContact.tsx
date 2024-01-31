import { FiUser } from "react-icons/fi";
import { NavigateContactBox } from "./NavigateContactBox";

type NavigateIndividualContactProps = {
  sizeValue: string;
}

export const NavigateIndividualContact: React.FC<NavigateIndividualContactProps> = ({sizeValue}) => {
  return (
    <NavigateContactBox
      text='個人の方はこちら'
      icon={<FiUser color='#06C755' size={sizeValue} />}
      bgGradient="linear(to-r, #0BC256, #0B8A3F)"
      onClick={() => window.open('https://lin.ee/v0tqjRo', '_blank')}
    />
  );
}
