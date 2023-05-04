import { auth } from '@/src/firebase/clientApp';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const OAuthButtons = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <Flex direction='column' width='100%' mb='4' gap='2'>
      <Button
        variant='oauth'
        isLoading={loading}
        onClick={() => signInWithGoogle()}
      >
        <Image
          src='/images/googlelogo.png'
          width='20px'
          height='20px'
          alt='google logo'
          mr={2}
        />
        Continue with Google
      </Button>
      <Button variant='oauth'>Some other provider </Button>
      {error && <Text>{error.message}</Text>}
    </Flex>
  );
};
export default OAuthButtons;
