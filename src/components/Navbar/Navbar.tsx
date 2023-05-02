import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import ChakraNextImage from '../UI/ChakraNextImage';

const Navbar: React.FC = () => {
  return (
    <Flex bg='white' height='44px' padding='6px 12px'>
      <Flex align='center'>
        <Image
          src='/images/redditFace.svg'
          height={30}
          alt='reddit face'
          width={30}
        />
        <ChakraNextImage
          src='/images/redditText.svg'
          height={46}
          width={70}
          alt='reddit text'
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      {/* <Directory />
      <SearchInput />
      <RightContent /> */}
    </Flex>
  );
};
export default Navbar;
