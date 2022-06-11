import { Button as CkButton } from '@chakra-ui/react'

export const Button = ({ action, children }) => (
  <CkButton
    textTransform='uppercase'
    onClick={action}
    m='0'
    fontFamily={'Mohave'}
    size='sm'
    color={'gray'}
    bg={'none'}
    _hover={{ color: 'white' }}
    variant='link'
    _focus={{ color: 'white' }}>{children}</CkButton>
)
