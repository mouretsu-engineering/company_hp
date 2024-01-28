import { Color } from "@/utils/Color";
import { BsBuilding } from "react-icons/bs";
import { NavigateContactBox } from "./NavigateContactBox";
import Router from 'next/router'

type NavigateCompanyContactProps = {
  sizeValue: string;
}

export const NavigateCompanyContact: React.FC<NavigateCompanyContactProps> = ({sizeValue}) => {

  return (
    <NavigateContactBox
      text='法人の方はこちら'
      icon={<BsBuilding color={Color.mouretsuRed} size={sizeValue} />}
      bgGradient="linear(to-r, #E61515, #9b0f0f)"
      onClick={() => Router.push('contact')}
    />
  );
}
