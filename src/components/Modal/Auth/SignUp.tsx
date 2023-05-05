import { authModalState } from '@/src/atom/authModalAtoms';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import { FormEvent, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '@/src/firebase/clientApp';
import { FIREBASE_ERRORS } from '@/src/firebase/errors';
import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

const SignUp = () => {
  const setAutModalState = useSetRecoilState(authModalState);
  const [createUserWithEmailAndPassword, userCred, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (error) {
      setError('');
    }
    if (signUpForm.password !== signUpForm.confirmPassword) {
      setError('Password do not match');
      return;
    }
    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const createUserDocument = async (user: User) => {
    await addDoc(
      collection(firestore, 'users'),
      JSON.parse(JSON.stringify(user))
    );
  };

  useEffect(() => {
    if (userCred) {
      createUserDocument(userCred.user);
    }
  }, [userCred]);

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
      <Input
        name='confirmPassword'
        placeholder='confirm password'
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
      {(error || userError) && (
        <Text textAlign='center' color='red' fontSize='10pt'>
          {error ||
            FIREBASE_ERRORS[userError?.message as keyof typeof FIREBASE_ERRORS]}
        </Text>
      )}
      <Button type='submit' w='100%' h='35px' mt={2} isLoading={loading}>
        Continue
      </Button>
      <Flex
        fontSize='9pt'
        justifyContent='center'
        align={'center'}
        mt={1}
        gap={'5px'}
      >
        <Text>Already a redditor?</Text>
        <Text
          color='blue.500'
          fontWeight={700}
          cursor={'pointer'}
          textTransform='uppercase'
          onClick={() =>
            setAutModalState((prev) => ({ ...prev, view: 'login' }))
          }
        >
          Login
        </Text>
      </Flex>
    </form>
  );
};
export default SignUp;
