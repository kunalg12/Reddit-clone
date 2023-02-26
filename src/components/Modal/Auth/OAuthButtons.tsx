import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';

type OAuthButtonsProps = {
    
};

const OAuthButtons:React.FC<OAuthButtonsProps> = () => {
    
    return (
        <Flex direction='column' width='100%' mb={4}>
            <Button variant={'oauth'} mb={2}><Image src='/images/google.svg' alt='Google logo' height='20px' mr={4}/>Continue with Google</Button>
            <Button variant={'oauth'}>Another Provider</Button>
        </Flex>
    )
}
export default OAuthButtons; 