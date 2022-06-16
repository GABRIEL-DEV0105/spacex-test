import { Flex, HStack, Image, useMediaQuery } from '@chakra-ui/react'
import { theme } from '../../styles/theme'
import { NavbarMobile } from './navbar-mobile'
import { useMemo } from 'react'
import { NavbarDesktop } from './navbar-desktop'


export const Header = ({
  nextLaunch,
  latestLaunch,
  pastLaunch,
  upComingLaunch
}) => {
  const [isLargerThan1025] = useMediaQuery('(min-width: 1025px)')
  
  const itensNavbar = useMemo(() => 
    [
      { action: nextLaunch, label: 'Próximo Lançamento' },
      { action: latestLaunch, label: 'Último Lançamento' },
      { action: pastLaunch, label: 'Futuros Lançamentos' },
      { action: upComingLaunch, label: 'Lançamentos Passados' }
    ]
  ,[nextLaunch, latestLaunch, pastLaunch, upComingLaunch])

  return (
    <HStack
      alignItems='center'
      bg={theme.colors.dark[800]}
      h='10vh'
      justifyContent={isLargerThan1025 ? "space-between" : "center"}
      position="relative"
      w='100%'
      p="1rem 2rem"
    >
      <Flex alignItems="center"  maxW="150px" minW="100px" h="90%">
        <Image
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/1024px-SpaceX-Logo.svg.png?20150525050531"
          alt='logo-spaceX'
        />
      </Flex>
      {isLargerThan1025
        ? <NavbarDesktop itensMenuList={itensNavbar} />
        : <NavbarMobile itensMenuList={itensNavbar} />
      }
    </HStack>

  )
}