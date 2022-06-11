import { Box, HStack, Image } from '@chakra-ui/react'
import { Button } from './button'
import logo from "../image/logo.png"


export const Header = ({ nextLaunch, latestLaunch, pastLaunch, upComingLaunch }) => {

  const objButton = [
    { action: nextLaunch, label: 'próximo lançameto' },
    { action: latestLaunch, label: 'ultimo lançamento' },
    { action: pastLaunch, label: 'futuros lançamentos' },
    { action: upComingLaunch, label: 'lançamentos passados' }
  ]

  return (
    <HStack
      w='100%'
      maxH='100px'
      paddingX='350px'
      justifyContent='space-around'
      bg='#030508'
    >
      <Box h='100%' w='150px'>
        <Image
          paddingBottom='12px'
          objectFit='cover'
          src={logo}
          alt='logo-spaceX'
        />
      </Box>

      {
        objButton.map((e) => (
          <Button
            action={e.action}
            key={e.label}>{e.label}</Button>
        ))
      }

    </HStack>

  )
}