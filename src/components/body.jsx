import { Heading, Flex, VStack, Button } from "@chakra-ui/react";
import { Items } from "./items";

export const Body = ({ apiData, headerTitle }) => {

  return (
    <VStack>
      <Heading paddingTop='50px' color='white'>{headerTitle}</Heading>
      <Flex
        flexDirection='row'
        display='flex'
        w='100%'
        h='100vh'
        paddingY='50px'>
        {!!apiData && <Items apiData={apiData} />}
      </Flex >
    </VStack>
  )
}