import { SearchIcon } from '@chakra-ui/icons';
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { User } from 'firebase/auth';

type Props = {
  user?: User | null;
};
const SearchInput = ({ user }: Props) => {
  return (
    <Flex flex='1' mr={2} align='center' maxW={user ? 'auto' : '600px'}>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <SearchIcon color='gray.400' mb='1' />
        </InputLeftElement>
        <Input
          fontSize='10pt'
          _placeholder={{ color: 'gray.500' }}
          _hover={{ bg: 'white', border: '1px solid', borderColor: 'blue.500' }}
          _focus={{
            outline: 'none',
            borderColor: 'blue.500',
            border: '1px solid',
          }}
          height='34px'
          bg='gray.50'
          placeholder='Search Reddit'
        />
      </InputGroup>
    </Flex>
  );
};
export default SearchInput;
