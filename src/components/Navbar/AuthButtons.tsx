import { AuthModalState, authModalState } from '@/src/atom/authModalAtoms';
import { Button } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';

const AuthButtons = () => {
  const setAutModalState = useSetRecoilState(authModalState);

  return (
    <>
      <Button
        variant='outline'
        height='28px'
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={2}
        onClick={() => setAutModalState({ open: true, view: 'login' })}
      >
        Log in
      </Button>
      <Button
        variant='solid'
        height='28px'
        display={{ base: 'none', sm: 'flex' }}
        width={{ base: '70px', md: '110px' }}
        mr={2}
        onClick={() => setAutModalState({ open: true, view: 'signup' })}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
