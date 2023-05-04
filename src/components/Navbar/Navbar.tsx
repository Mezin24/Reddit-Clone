import { Flex, Image } from '@chakra-ui/react';
import React from 'react';
import SearchInput from './SearchInput';
import RightContent from './RightContent';
import { auth } from '@/src/firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex
      bg='white'
      height='44px'
      padding='6px 12px'
      justify='space-between'
      align='center'
    >
      <Flex align='center'>
        <Image
          src='/images/redditFace.svg'
          height={30}
          alt='reddit face'
          width={30}
        />
        <Image
          src='/images/redditText.svg'
          height={46}
          width={70}
          alt='reddit text'
          display={{ base: 'none', md: 'unset' }}
        />
      </Flex>
      {/* <Directory /> */}
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
