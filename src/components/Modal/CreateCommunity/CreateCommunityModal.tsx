import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Box,
  Divider,
  Text,
  Input,
  Stack,
  Checkbox,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { HiLockClosed } from 'react-icons/hi';
import { BsFillEyeFill, BsFillPersonFill } from 'react-icons/bs';

const MAX_COMMUNITY_NAME_LENGTH = 21;

type Props = {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreateCommunityModal = ({ open, handleClose }: Props) => {
  const [communityName, setCommunityName] = useState('');
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [communityType, setcommunityType] = useState('public');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_COMMUNITY_NAME_LENGTH) return;
    setCommunityName(e.target.value);
    setCharsRemaining(MAX_COMMUNITY_NAME_LENGTH - e.target.value.length);
  };

  const onCommunityTypeChange = (e: ChangeEvent<HTMLInputElement>) => {};

  return (
    <>
      <Modal isOpen={open} onClose={() => handleClose(false)} size='lg'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            display='flex'
            flexDirection='column'
            p='3'
            fontSize={15}
          >
            Create a Community
          </ModalHeader>
          <Box px={3}>
            <Divider />
            <ModalCloseButton />
            <ModalBody display='flex' flexDirection={'column'} p='10px 0'>
              <Text fontSize={15} fontWeight={600}>
                Name
              </Text>
              <Text fontSize={11} color='gray.500'>
                Community names including capitalization cannot be changed
              </Text>
              <Text
                position={'relative'}
                top={'28px'}
                left='10px'
                w='20px'
                color='gray.400'
              >
                r/
              </Text>
              <Input
                value={communityName}
                size='sm'
                pl={'22px'}
                position={'relative'}
                onChange={handleChange}
              />
              <Text
                fontSize='9pt'
                color={charsRemaining === 0 ? 'red' : 'gray.500'}
              >
                {charsRemaining} Characters remaining
              </Text>
              <Box mt={4} mb={4}>
                <Text fontWeight={600} fontSize={15}>
                  Community Type
                </Text>
                <Stack>
                  <Checkbox
                    name='public'
                    isChecked={communityType === 'public'}
                    onChange={onCommunityTypeChange}
                  >
                    <Flex align='center'>
                      <Icon mr={2} color='gray.500' as={BsFillPersonFill} />
                      <Text fontWeight={600} fontSize={15} mr={2}>
                        Public
                      </Text>
                      <Text fontSize='8pt' color='500' pt={1}>
                        Anyone can view post, and comment to this community
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    name='restricted'
                    isChecked={communityType === 'restricted'}
                    onChange={onCommunityTypeChange}
                  >
                    <Flex align='center'>
                      <Icon mr={2} color='gray.500' as={BsFillEyeFill} />

                      <Text fontWeight={600} fontSize={15} mr={2}>
                        Restricted
                      </Text>
                      <Text fontSize='8pt' color='500' pt={1}>
                        Anyone can view post, but only approved users can post
                      </Text>
                    </Flex>
                  </Checkbox>
                  <Checkbox
                    name='private'
                    isChecked={communityType === 'private'}
                    onChange={onCommunityTypeChange}
                  >
                    <Flex align='center'>
                      <Icon mr={2} color='gray.500' as={HiLockClosed} />

                      <Text fontWeight={600} fontSize={15} mr={2}>
                        Private
                      </Text>
                      <Text fontSize='8pt' color='500' pt={1}>
                        Only approved users can view and submit to this
                        community
                      </Text>
                    </Flex>
                  </Checkbox>
                </Stack>
              </Box>
            </ModalBody>
          </Box>

          <ModalFooter bg='gray.100' borderRadius='0px 0px 10px 10px'>
            <Button
              variant='outline'
              height='30px'
              mr={3}
              onClick={() => handleClose(false)}
            >
              Close
            </Button>
            <Button height='30px'>Create Community</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;
