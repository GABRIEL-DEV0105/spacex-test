import { Box, HStack, Image } from '@chakra-ui/react'
import { Button } from './button'
import logo from "../image/logo.png"


export const Header = ({ nextLaunch }) => {

    const objButton = [
        { action: nextLaunch, label: 'PRÓXIMO LANÇAMENTO' },
        { action: () => console.log('click 2'), label: 'ULTIMO LANÇAMENTO' },
        { action: () => console.log('click 3'), label: 'FUTUROS LANÇAMENTOS' },
        { action: () => console.log('click 4'), label: 'LANÇAMENTOS PASSADOS' }
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
                    // boxSize='150px'
                    paddingBottom='12px'
                    objectFit='cover'
                    src={logo}
                    alt='logo-spaceX'
                />
            </Box>

            {
                objButton.map((e) => (
                    <Button action={e.action} key={e.label}>{e.label}</Button>
                ))
            }

        </HStack>

    )
}