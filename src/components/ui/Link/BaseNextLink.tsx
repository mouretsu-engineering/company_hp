import { Link, LinkProps } from '@chakra-ui/react'

export const BaseNextLink: React.FC<LinkProps> = (props) => {
  return (
    <Link {...props} >
      {props.children}
    </Link>
  );
};
