import { ContactForm } from "@/components/page/contact/ContactForm";
import { ContactPageHeadline } from "@/components/page/contact/ContactPageHeadline";
import { Box } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box bgColor='#EDEDED'>
      <ContactPageHeadline />
      <ContactForm />
    </Box>
  )
}
