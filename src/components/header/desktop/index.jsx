import { Box, Image } from '@chakra-ui/react'
import { Button } from '../../button'
import logo from '../../../image/logo.png'

export const Desktop = ({ next, latest, past, upComing }) => {

  const objButton = [
    { action: next, label: 'próximo lançameto' },
    { action: latest, label: 'último lançamento' },
    { action: past, label: 'lançamentos passados' },
    { action: upComing, label: 'futuros lançamentos' }
  ]

  return (

    <Box
      display='flex'
      flexDirection='row'
      alignItems='center'
      w='650px'
      justifyContent='space-around'>
      <Image
        h='120px'
        paddingBottom='12px'
        objectFit='cover'
        src={logo}
        alt='logo-spaceX'
      />
      {objButton.map((e) => (
        <Button
          action={e.action}
          key={e.label}>{e.label}</Button>
      ))}
    </Box>

  )
}