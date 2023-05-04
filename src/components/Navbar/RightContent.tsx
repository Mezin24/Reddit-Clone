import { Button, Flex } from '@chakra-ui/react';
import AuthButtons from './AuthButtons';
import AuthModal from '../Modal/Auth/AuthModal';
import { signOut } from 'firebase/auth';
import { auth } from '@/src/firebase/clientApp';

type Props = {
  user: any;
};
const RightContent = ({ user }: Props) => {
  return (
    <>
      <AuthModal />
      <Flex align='center' justify='center'>
        {user ? (
          <Button onClick={() => signOut(auth)}>Logout</Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};
export default RightContent;
