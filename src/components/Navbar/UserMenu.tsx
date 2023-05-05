import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  Flex,
  Text,
} from '@chakra-ui/react';
import { User, signOut } from 'firebase/auth';
import { FaRedditSquare } from 'react-icons/fa';
import { VscAccount } from 'react-icons/vsc';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineLogin } from 'react-icons/md';
import { IoSparkles } from 'react-icons/io5';
import { auth } from '@/src/firebase/clientApp';
import { authModalState } from '@/src/atom/authModalAtoms';
import { useSetRecoilState } from 'recoil';

type Props = {
  user?: User | null;
};
const UserMenu = ({ user }: Props) => {
  const setAutModalState = useSetRecoilState(authModalState);
  return (
    <Menu>
      <MenuButton
        cursor='pointer'
        padding='0px 6px'
        borderRadius='4'
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex align='center'>
          <Flex>
            {user ? (
              <>
                <Icon
                  fontSize='24'
                  mr='1'
                  color='gray.300'
                  as={FaRedditSquare}
                />
                <Flex
                  direction='column'
                  display={{ base: 'none', lg: 'flex' }}
                  fontSize='8pt'
                  align='flex-start'
                  mr='8'
                >
                  <Text fontWeight='700'>
                    {user?.displayName || user.email?.split('@')[0]}
                  </Text>
                  <Flex>
                    <Icon as={IoSparkles} color='brand.100' mr='1' />
                    <Text color='gray.400'>1 karma</Text>
                  </Flex>
                </Flex>
              </>
            ) : (
              <Icon as={VscAccount} fontSize='24' color='gray.400' />
            )}
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        {user ? (
          <>
            <MenuItem
              fontSize='10pt'
              fontWeight={700}
              _hover={{ bg: 'blue.500', color: 'white' }}
            >
              <Flex align='center' gap='10px'>
                <Icon as={CgProfile} fontSize='20' />
                Profile
              </Flex>
            </MenuItem>
            <MenuItem
              fontSize='10pt'
              fontWeight={700}
              _hover={{ bg: 'blue.500', color: 'white' }}
              onClick={() => signOut(auth)}
            >
              <Flex align='center' gap='10px'>
                <Icon as={MdOutlineLogin} fontSize='20' />
                Logout
              </Flex>
            </MenuItem>
          </>
        ) : (
          <MenuItem
            fontSize='10pt'
            fontWeight={700}
            _hover={{ bg: 'blue.500', color: 'white' }}
            onClick={() => setAutModalState({ open: true, view: 'login' })}
          >
            <Flex align='center' gap='10px'>
              <Icon as={MdOutlineLogin} fontSize='20' />
              Log In / Sign Up
            </Flex>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};
export default UserMenu;
