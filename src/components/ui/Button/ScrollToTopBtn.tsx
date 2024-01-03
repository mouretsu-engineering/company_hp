import React, { useState, useEffect } from 'react';
import { Box, Button, HStack } from "@chakra-ui/react";
import { ArrowUpIcon } from '@chakra-ui/icons';

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
        <Box fontWeight='bold' fontSize='1vw' >page top</Box>
        <Button
          onClick={scrollToTop}
          variant='outline'
          colorScheme='white'
          borderRadius='50%'
          h='3.5vw'
          w='3.5vw'
          fontSize='0.5vw'
        >
          ▲
        </Button>
        </HStack>
      }
    </Box>
  );
}