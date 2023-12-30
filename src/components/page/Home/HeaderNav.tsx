import { Wrap, WrapItem } from '@chakra-ui/react';
import { CompanyInfoLink } from '@/components/ui/Link/CompanyInfoLink';
import { ServiceLink } from '@/components/ui/Link/ServiceLink';
import { MemberLink } from '@/components/ui/Link/MemberLink';

const links = [
  { component: CompanyInfoLink },
  { component: ServiceLink },
  { component: MemberLink },
];

export const HeaderNav: React.FC = () => {
  return (
    <Wrap
      as='nav'
      color='black'
      display={{ base: 'none', md: 'block' }}
      fontSize='1.1vw'
      fontWeight='bold'
      spacing='2.2vw'
    >
      {links.map((link, index) => (
        <WrapItem key={index}>
          <link.component />
        </WrapItem>
      ))}
    </Wrap>
  );
};