import { BaseNextLink } from '@/components/ui/Link/BaseNextLink';
import { WrapItem } from '@chakra-ui/react';

type NavItemProps = {
  href: string;
  children: React.ReactNode;
};

export const NavItem: React.FC<NavItemProps> = ({ href, children }) => (
  <WrapItem>
    <BaseNextLink href={href}>{children}</BaseNextLink>
  </WrapItem>
);