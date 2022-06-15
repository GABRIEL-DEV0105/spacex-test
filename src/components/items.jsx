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

            <Heading as='h4' size='md'>
              {e.name}
            </Heading>
            <Text fontSize='xs' marginTop='20px' h='50px'>
              SpaceX CRS-6, também conhecida como SpX-6, foi uma (...)
            </Text>
            <Button h='25px' bg='#030508' color='white'>ver mais</Button>
          </Center>
        </GridItem>

      ))}

    </Grid>

  )
}