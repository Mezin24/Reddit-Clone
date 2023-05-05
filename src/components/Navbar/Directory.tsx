import { authModalState } from '@/src/atom/authModalAtoms';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Icon, Menu, MenuButton, MenuList, Text } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { TiHome } from 'react-icons/ti';
import Comunities from './Comunities';

const Directory = () => {
  const setAutModalState = useSetRecoilState(authModalState);
  return (
    <Menu>
      <MenuButton
        cursor='pointer'
        padding='0px 6px'
        borderRadius='4'
        _hover={{ outline: '1px solid', outlineColor: 'gray.200' }}
        mr='2'
        ml={{ outline: '1px solid', outlineColor: 'gray.200' }}
      >
        <Flex
          align='center'
          justify='space-between'
          w={{ base: 'auto', lg: '200px' }}
        >
          <Flex align='center'>
            <Icon as={TiHome} display={{ base: '1', md: '2' }} fontSize='24' />
            <Flex display={{ base: 'none', lg: 'flex' }}>
              <Text fontWeight={700} fontSize='10pt'>
                Home
              </Text>
            </Flex>
          </Flex>
          <ChevronDownIcon />
        </Flex>
      </MenuButton>
      <MenuList>
        <Comunities />
      </MenuList>
    </Menu>
  );
};
export default Directory;
