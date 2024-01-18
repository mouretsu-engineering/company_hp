import { List } from '@chakra-ui/react'
import { CompanyInfoLink } from "./Link/CompanyInfoLink";
import { MenuContentsListItem } from "./MenuContentsListItem";
import { ServiceLink } from "./Link/ServiceLink";
import { MemberLink } from "./Link/MemberLink";
import { ContactLink } from "./Link/ContactLink";

type MenuContentsListProps = {
  onClose: () => void;
}

const menuItems = [
  { label: 'COMPANY', component: CompanyInfoLink },
  { label: 'SERVICE', component: ServiceLink },
  { label: 'MEMBER', component: MemberLink },
  { label: 'CONTACT', component: ContactLink },
];

export const MenuContentsList: React.FC<MenuContentsListProps> = ({onClose}) => {
  return (
    <List color='white' spacing={7} fontWeight='bold' >
      {menuItems.map(({ label, component: Component }) => (
        <MenuContentsListItem key={label} label={label} onClose={onClose}>
          <Component/>
        </MenuContentsListItem>
      ))}
    </List>
  );
}