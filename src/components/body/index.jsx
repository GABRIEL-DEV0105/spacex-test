import { Heading, Flex, VStack } from "@chakra-ui/react";
import { Items } from "../items";

export const Body = ({ apiData, headerTitle }) => {

  return (
    <VStack>
      {!!apiData && <Heading paddingTop='50px' color='white'>{headerTitle}</Heading>}
      <Flex
        flexDirection='row'
        display='flex'
        paddingY='50px'>
        {!!apiData && <Items apiData={apiData} />}
      </Flex >
    </VStack>
  )
}