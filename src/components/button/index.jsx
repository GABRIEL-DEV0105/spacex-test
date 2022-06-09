import { Button as CkButton } from '@chakra-ui/react'

export const Button = ({ action, children }) => (
    <CkButton
        _active={{
            color: 'white'
        }}
        onClick={action}
        m='0'
        fontFamily={'Mohave'}
        size='sm'
        color={'gray'}
        bg={'none'}
        _hover={{ color: 'white' }}
        variant='link'
        _focus={{ boxShadow: 'none', }}>{children}</CkButton>
)
