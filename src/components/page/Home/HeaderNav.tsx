import { Wrap } from '@chakra-ui/react';
import { NavItem } from './NavItem';

export const HeaderNav: React.FC = () => {
  return (
    <Wrap as='nav' spacing='2.2vw' fontSize='1.1vw' fontWeight='bold' color='black'>
      <NavItem href='/home'>会社案内</NavItem>
      <NavItem href='/home'>事業内容</NavItem>
      <NavItem href='/home'>メンバー</NavItem>
    </Wrap>
  );
};