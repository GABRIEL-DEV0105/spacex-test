import { Heading, Flex, VStack } from "@chakra-ui/react";
import { Items } from "./items";

export const Body = ({ apiData }) => {


  return (
    <VStack>
      <Heading color='white'>Lançamentos Passados</Heading>
      <Flex
        display='flex'
        justifyContent='space-around'
        w='100%'
        h='100vh'
        paddingY='50px'>
        {!!apiData && <Items apiData={apiData} />}
      </Flex >
    </VStack>
  )
}