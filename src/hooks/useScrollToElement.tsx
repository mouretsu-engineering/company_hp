import { useRouter } from 'next/router'

const useScrollToElement = () => {
  const router = useRouter()

  const scrollToElement = async (elementId:string) => {
    if (router.asPath !== '/') {
      await router.push('/')
    }
    const element = document.getElementById(elementId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return scrollToElement;
}

export default useScrollToElement;