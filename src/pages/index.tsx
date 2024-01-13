import { AboutUs } from '@/components/pages/Home/AboutUs';
import { Contact } from '@/components/pages/Home/Contact';
import { Member } from '@/components/pages/Home/Member';
import { Member2 } from '@/components/pages/Home/Member2';
import { Service } from '@/components/pages/Home/Service';

export default function Home() {
  return (
    <>
      <AboutUs />
      <Service />
      <Member />
      <Member2 />

      <Contact/>
    </>
  )
}
