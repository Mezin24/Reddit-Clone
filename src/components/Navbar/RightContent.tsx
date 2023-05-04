import { Flex } from '@chakra-ui/react';
import AuthButtons from './AuthButtons';
import AuthModal from '../Modal/Auth/AuthModal';

type Props = {};
const RightContent = (props: Props) => {
  return (
    <>
      <AuthModal />
      <Flex align='center' justify='center'>
        <AuthButtons />
      </Flex>
    </>
  );
};
export default RightContent;
