import { Heading, Flex, VStack } from "@chakra-ui/react";
import { Items } from "./items";

export const Body = ({
  nextLaunchApi,
  latestLaunchApi,
  pastLaunchApi,
  upComingLaunchApi }) => {

  return (
    <VStack>
      <Heading color='white'>Lançamentos Passados</Heading>
      <Flex
        display='flex'
        justifyContent='space-around'
        w='100%'
        h='100vh'
        paddingY='50px'>
        <Items
          next={nextLaunchApi}
          latest={latestLaunchApi}
          past={pastLaunchApi}
          upComing={upComingLaunchApi} />
      </Flex >
    </VStack>
  )
}