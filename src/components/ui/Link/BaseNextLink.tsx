import NextLink from 'next/link'
import { Link, LinkProps } from '@chakra-ui/react'

export const BaseNextLink: React.FC<LinkProps> = (props) => {
  return (
    <Link as={NextLink}  {...props} >
      {props.children}
    </Link>
  );
};
