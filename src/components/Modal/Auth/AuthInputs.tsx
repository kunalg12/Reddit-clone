import { authModalState } from '@/src/atoms/authModalAtom';
import { Flex } from '@chakra-ui/react';
import { Sign } from 'crypto';
import React from 'react';
import { useRecoilValue } from 'recoil';
import Login from './Login';
import SingUp from './SingUp';

type AuthInputsProps = {
    
};

const AuthInputs:React.FC<AuthInputsProps> = () => {
    const modalState = useRecoilValue(authModalState); 

    return(
        <Flex direction='column' align='center' width='100%' mt={4}>
            {modalState.view === 'login' && <Login/>}
            {modalState.view === 'singup' && <SingUp/>}
        </Flex>
    )
}
export default AuthInputs;