import { AboutUs } from '@/components/page/Home/AboutUs';
import { Contact } from '@/components/page/Home/Contact';
import { Member } from '@/components/page/Home/Member';
import { Service } from '@/components/page/Home/Service';

export default function Home() {
  return (
    <>
      <AboutUs />
      <Service />
      <Member />
      <Contact/>
    </>
  )
}
