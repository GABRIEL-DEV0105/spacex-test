import { Box, Image, Link, Text, VStack } from "@chakra-ui/react"
import { BiLinkExternal } from 'react-icons/bi'
import { theme } from "../../styles/theme"
import { formatDate } from "../../utils"

export const CardLaunch = ({ launch }) => {
  return (
    <VStack
      bg={theme.colors.light[100]}
      borderRadius="0.5rem"
      h="18rem"
      justifyContent="center"
      p="1rem"
      w="15rem" 
    >
      <Box>
        <Text>{launch.name}</Text>
      </Box>
      <Box>
        {!!launch.links.patch.small
          ? <Image boxSize='120px' objectFit='contain' src={launch.links.patch.small}/>
          : <Text>No image</Text>
        }
      </Box>
      <Text>{formatDate(launch.date_local)}</Text>
      <Link
        href={launch.links.webcast}
        isExternal
      >
        <BiLinkExternal />
      </Link>
    </VStack>
  )
}