import { Button, Center, Heading, Image, Text, Grid, GridItem } from "@chakra-ui/react";


export const Items = ({ apiData }) => {

  return (
    <Grid templateColumns={`repeat(${apiData.length > 4 ? 4 : apiData.length}, 1fr)`} gap={6}>
      {apiData.map(e => (
        <GridItem
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
              src={`${e.links.patch.small}`} />

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
            <Button h='25px' bg='#030508' color='white'>ver mais</Button>
          </Center>
        </GridItem>

      ))}

    </Grid>

  )
}