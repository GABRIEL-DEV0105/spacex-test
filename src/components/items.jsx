import { Button, Center, Heading, Image, Text, Grid, GridItem } from "@chakra-ui/react";


export const Items = ({
    nextLaunchApi,
    latestLaunchApi,
    pastLaunchApi,
    upComingLaunchApi }) => {


    return (
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            <GridItem bg='#E1E9FC'
                h='350px'
                w='250px'
                borderRadius='20px'
                boxShadow='dark-lg'>
                <Center flexDirection='column' p='12px'>
                    <Image
                        justifyContent='center'
                        w='200px'
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/SpaceX_CRS-6_Patch.png/400px-SpaceX_CRS-6_Patch.png' />

                    <Heading as='h4' size='md'>
                        SpaceX CRS-6
                    </Heading>
                    <Text fontSize='xs' marginTop='20px' h='50px'>
                        SpaceX CRS-6, também conhecida como SpX-6, foi uma (...)
                    </Text>
                    <Button h='25px' bg='#030508' color='white'>ver mais</Button>
                </Center>
            </GridItem>

        </Grid>

    )
}