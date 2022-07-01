import {
  Button,
  Center,
  Heading,
  Image,
  Text,
  Link,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
import breve from './../../image/breve.png'


export const Items = ({ apiData }) => {

  const gridColumns = [
    1,
    2,
    3,
    apiData.length > 4 ? 4 : apiData.length
  ]

  return (
    <SimpleGrid columns={gridColumns} spacing='1rem'>
      {apiData.map(e => (
        <Box
          key={e.name}
          bg='#E1E9FC'
          h='350px'
          w='250px'
          borderRadius='20px'
          boxShadow='dark-lg'>
          <Center flexDirection='column' p='12px'>
            <Image
              justifyContent='center'
              h='200px'
              src={e.links.patch.small
                ? e.links.patch.small
                : breve} />

            <Heading as='h4' size='md' maxH='24px'>
              {e.name}
            </Heading>
            <Text
              maxW='226px'
              whiteSpace='nowrap'
              overflow='hidden'
              textOverflow='ellipsis'
              h='50px'
              fontSize='xs'
              marginTop='20px'
            >
              {e.details}
            </Text>
            <Link
              href={e.links.wikipedia}
              isExternal>
              <Button
                textDecoration='none'
                h='25px'
                bg='#030508'
                color='white'
              >ver mais</Button>
            </Link>
          </Center>
        </Box>
      ))}
    </SimpleGrid>


  )
}


