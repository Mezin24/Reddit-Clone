import { auth } from '@/src/firebase/clientApp';
import { Button, Flex } from '@chakra-ui/react';
import { User, signOut } from 'firebase/auth';
import AuthModal from '../Modal/Auth/AuthModal';
import AuthButtons from './AuthButtons';
import Icons from './Icons';
import UserMenu from './UserMenu';

type Props = {
  user?: User | null;
};
const RightContent = ({ user }: Props) => {
  return (
    <>
      <AuthModal />
      <Flex align='center' justify='center'>
        {user ? <Icons /> : <AuthButtons />}
        <UserMenu user={user} />
      </Flex>
    </>
  );
};
export default RightContent;
