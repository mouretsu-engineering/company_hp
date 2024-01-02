import { Button } from "@chakra-ui/react";
import Router from 'next/router'

type WhiteBorderBtnProps = {
  path: string
}

export const WhiteBorderBtn: React.FC<WhiteBorderBtnProps> = ({path}) => {
  return (
    <Button
      variant='outline'
      colorScheme='white'
      h={{ base: '21.3vw', md: '11vw' }}
      w={{ base: '21.3vw', md: '11vw' }}
      borderRadius='50%'
      onClick={() => Router.push(path)}
    >
      ▶
    </Button>
);
}
