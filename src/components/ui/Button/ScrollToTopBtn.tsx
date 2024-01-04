import React, { useState, useEffect } from 'react';
import { Box, Button, HStack } from "@chakra-ui/react";

export const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Box
      position="fixed"
      bottom="1rem"
      right="1rem"
      display={{ base: 'none', md: 'block' }}
      color='white'
      zIndex={3}
    >
      {isVisible &&
      <HStack spacing='1vw'>
        <Box fontWeight='bold' fontSize='1vw' textShadow='1px 1px 1.5px #222222'>page top</Box>
        <Button
          onClick={scrollToTop}
          variant='outline'
          colorScheme='white'
          borderRadius='50%'
          h='3.5vw'
          w='3.5vw'
          fontSize='0.5vw'
          boxShadow='1px 1px 2px #222222'
          textShadow='0.5px 0.5px 0.5px #222222'
        >
          ▲
        </Button>
      </HStack>
      }
    </Box>
  );
}