
import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Image,
  useDisclosure,
  VStack
} from "@chakra-ui/react"
import { useRef } from "react"
import { HiMenu } from "react-icons/hi"
import logo from '../../../image/logo.png'



export const Mobile = ({ next, latest, past, upComing }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const handleClick = (event) => {
    onClose()
  }


  const objButton = [
    { action: next, label: 'próximo lançameto' },
    { action: latest, label: 'último lançamento' },
    { action: past, label: 'lançamentos passados' },
    { action: upComing, label: 'futuros lançamentos' }
  ]

  return (
    <>
      <Image
        h='120px'
        paddingBottom='12px'
        objectFit='cover'
        src={logo}
        alt='logo-spaceX'
      />
      <Button
        colorScheme="light"
        onClick={onOpen}
        position="absolute"
        right="0.8rem"
        variant='ghost'
      >
        <HiMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent >
          <DrawerCloseButton />

          <VStack w="100%" mt="2.5rem" px="1rem" alignItems={"flex-start"}>
            {objButton.map(item => (
              <Box
                key={item.label}
                onClick={() => handleClick(item.event)}
                w="100%"
              >
                <Button
                  colorScheme="light"
                  fontSize="sm"
                  variant="ghost"
                  onClick={item.action}
                >
                  {item.label}
                </Button>
              </Box>
            ))}
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  )
}