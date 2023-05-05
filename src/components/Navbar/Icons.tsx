import { AddIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { BsArrowUpRightCircle, BsChatDots } from 'react-icons/bs';
import { GrAdd } from 'react-icons/gr';
import {
  IoFilterCircleOutline,
  IoNotificationsOutline,
  IoVideocamOutline,
} from 'react-icons/io5';

const Icons = () => {
  return (
    <Flex>
      <Flex
        display={{ base: 'none', md: 'flex' }}
        align='center'
        borderRight='1px solid'
        borderColor='gray.200'
      >
        <Flex
          mx='1.5'
          padding='1'
          cursor='pointer'
          borderRadius='4'
          _hover={{ bg: 'gray.200' }}
          transition='0.3s'
        >
          <Icon as={BsArrowUpRightCircle} fontSize='20' />
        </Flex>
        <Flex
          mx='1.5'
          padding='1'
          cursor='pointer'
          borderRadius='4'
          _hover={{ bg: 'gray.200' }}
          transition='0.3s'
        >
          <Icon as={IoFilterCircleOutline} fontSize='22' />
        </Flex>
        <Flex
          mx='1.5'
          padding='1'
          cursor='pointer'
          borderRadius='4'
          _hover={{ bg: 'gray.200' }}
          transition='0.3s'
        >
          <Icon as={IoVideocamOutline} fontSize='22' />
        </Flex>
      </Flex>
      <Flex>
        <Flex
          mx='1.5'
          padding='1'
          cursor='pointer'
          borderRadius='4'
          _hover={{ bg: 'gray.200' }}
          transition='0.3s'
        >
          <Icon as={BsChatDots} fontSize='20' />
        </Flex>
        <Flex
          mx='1.5'
          padding='1'
          cursor='pointer'
          borderRadius='4'
          _hover={{ bg: 'gray.200' }}
          transition='0.3s'
        >
          <Icon as={IoNotificationsOutline} fontSize='20' />
        </Flex>
      </Flex>
      <Flex
        mx='1.5'
        padding='1'
        cursor='pointer'
        borderRadius='4'
        _hover={{ bg: 'gray.200' }}
        transition='0.3s'
        display={{ base: 'none', md: 'flex' }}
      >
        <Icon as={GrAdd} fontSize='20' />
      </Flex>
    </Flex>
  );
};
export default Icons;
