import { HStack } from "@chakra-ui/react";
import { ContactBtn } from "@/components/ui/Button/ContactBtn";
import { HeaderNav } from "@/components/page/Home/HeaderNav";
import { MenuDrawer } from "../../ui/MenuDrawer";

export const HeaderRight = () => {
  return (
    <HStack gap='2.8vw'>
      <HeaderNav />
      <ContactBtn />
      <MenuDrawer />
    </HStack>
  );
}