import { Heading, SimpleGrid, VStack } from "@chakra-ui/react"
import { theme } from "../../styles/theme"
import { CardLaunch } from "../card-launch"

export const Content = ({ launches, titlePage }) => {
  const columnsGrid = [
    1,
    2,
    3,
    launches.length >= 4 ? 4 : launches.length,
  ]
  return (
    <VStack
      alignItems="center"
      bg={theme.colors.light[500]}
      flexGrow={1}
      justifyContent="flex-start"
      p="2rem 2rem"
      spacing="1.5rem"
      w="100%"
    >
      <Heading>{titlePage}</Heading>
      {launches.length > 0 && (
        <SimpleGrid columns={columnsGrid} gap="1rem">
          {launches.map(launch => (
            <CardLaunch launch={launch} key={launch.id}/>
          ))}
        </SimpleGrid>)
      }
    </VStack>
  )
}