import { Flex, Icon, MenuItem } from '@chakra-ui/react';
import CreateCommunityModal from '../Modal/CreateCommunity/CreateCommunityModal';
import { GrAdd } from 'react-icons/gr';
import { useState } from 'react';

const Comunities = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open && <CreateCommunityModal open={open} handleClose={setOpen} />}
      <MenuItem>
        <Flex
          align='center'
          w={'full'}
          fontSize='10pt'
          _hover={{ bg: 'gray.100' }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <Icon as={GrAdd} mr={2} />
          Create Community
        </Flex>
      </MenuItem>
    </>
  );
};
export default Comunities;
