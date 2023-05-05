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
import { doc, runTransaction, serverTimestamp } from 'firebase/firestore';
import { auth, firestore } from '@/src/firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';

const MAX_COMMUNITY_NAME_LENGTH = 21;

type Props = {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
};
const CreateCommunityModal = ({ open, handleClose }: Props) => {
  const [user] = useAuthState(auth);
  const [communityName, setCommunityName] = useState('');
  const [charsRemaining, setCharsRemaining] = useState(21);
  const [communityType, setCommunityType] = useState('public');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > MAX_COMMUNITY_NAME_LENGTH) return;
    setCommunityName(e.target.value);
    setCharsRemaining(MAX_COMMUNITY_NAME_LENGTH - e.target.value.length);
  };

  const onCommunityTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCommunityType(e.target.name);
  };

  const handleCreateComunity = async () => {
    const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (format.test(communityName) || communityName.length < 3) {
      setError(
        'Community name must be between 3-21 characters, and can only contains letters, numbers and undersores'
      );
      return;
    }
    setLoading(true);
    setError('');

    try {
      // Check if community exists
      const communityDocRef = doc(firestore, 'communities', communityName);

      await runTransaction(firestore, async (transaction) => {
        const communityDoc = await transaction.get(communityDocRef);
        if (communityDoc.exists()) {
          throw new Error(`Sorry? r/${communityName} is taken/ try another`);
        }

        // Create new community
        transaction.set(communityDocRef, {
          creatorId: user?.uid,
          createdAt: serverTimestamp(),
          numberOfMembers: 1,
          privacyType: communityType,
        });

        transaction.set(
          doc(firestore, `users/${user?.uid}/communitySnippets`, communityName),
          {
            communityId: communityName,
            idModerator: true,
          }
        );
      });
    } catch (error: any) {
      console.log('handleCreatecommunuity error', error);
      setError(error.message);
    }
    setLoading(false);
  };

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
              <Text fontSize='9pt' color='red' pt={1}>
                {error}
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
            <Button
              height='30px'
              onClick={handleCreateComunity}
              isLoading={loading}
            >
              Create Community
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default CreateCommunityModal;
