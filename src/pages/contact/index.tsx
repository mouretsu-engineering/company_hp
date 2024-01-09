import { ContactForm } from "@/components/pages/Contact/ContactForm";
import { ContactPageHeadline } from "@/components/pages/Contact/ContactPageHeadline";
import { Box } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box bgColor='#EDEDED'>
      <ContactPageHeadline />
      <ContactForm />
    </Box>
  )
}
