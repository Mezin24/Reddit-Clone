import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { authModalState } from '@/src/atom/authModalAtoms';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { FormEvent, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { auth } from '@/src/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/src/firebase/errors';

const Login = () => {
  const setAutModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        name='email'
        placeholder='email'
        type='email'
        mb='2'
        onChange={onChange}
        required
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
      />
      <Input
        name='password'
        placeholder='password'
        type='password'
        mb='2'
        onChange={onChange}
        required
        fontSize='10pt'
        _placeholder={{ color: 'gray.500' }}
        _hover={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
        _focus={{
          bg: 'white',
          border: '1px solid',
          borderColor: 'blue.500',
        }}
      />
      <Text textAlign='center' color='red' fontSize='10pt'>
        {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>
      <Button type='submit' w='100%' h='35px' mt={2} isLoading={loading}>
        Log In
      </Button>
      <Flex
        fontSize='9pt'
        justifyContent='center'
        align={'center'}
        mt={1}
        gap={'5px'}
      >
        <Text>New here?</Text>
        <Text
          color='blue.500'
          fontWeight={700}
          cursor={'pointer'}
          textTransform='uppercase'
          onClick={() =>
            setAutModalState((prev) => ({ ...prev, view: 'signup' }))
          }
        >
          Sign Up
        </Text>
      </Flex>
    </form>
  );
};
export default Login;
