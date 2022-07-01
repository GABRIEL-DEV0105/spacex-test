import { HStack, useMediaQuery } from "@chakra-ui/react"
import { Desktop } from "./desktop"
import { Mobile } from "./mobile"

export const SideBar = ({ next, latest, past, upComing }) => {

    const [isLargerThan1025] = useMediaQuery('(min-width: 840px)')

    return (
        <HStack
            w='100%'
            h='10%'
            bg='#030508'
            justifyContent='space-around'
        >
            {isLargerThan1025
                ? <Desktop
                    next={next}
                    latest={latest}
                    past={past}
                    upComing={upComing} />
                : <Mobile
                    next={next}
                    latest={latest}
                    past={past}
                    upComing={upComing} />}
        </HStack>

    )
}

