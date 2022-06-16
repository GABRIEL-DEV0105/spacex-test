
import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  VStack
} from "@chakra-ui/react"
import { useRef } from "react"
import {HiMenu} from "react-icons/hi"
import { theme } from "../../../styles/theme"

export const NavbarMobile = ({ itensMenuList, handleEvent }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  const handleClick = (event) => {
    handleEvent(event)
    onClose()
  }

  return (
    <>
      <Button
        color={theme.colors.light[200]}
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
        <DrawerContent bg={theme.colors.dark[800]}>
          <DrawerCloseButton color={theme.colors.light[200]}/>
          
          <VStack w="100%" mt="2.5rem" px="1rem" alignItems={"flex-start"}>
            {itensMenuList.map(item => (
              <Box
                key={item.label}
                onClick={() => handleClick(item.event)}
                w="100%"
                _hover={{ bg: theme.colors.light[500] }}
              >
                <Button
                  color={theme.colors.light[200]}
                  colorScheme="light"
                  fontSize="sm"  
                  variant="ghost"
                  _hover={{ color: theme.colors.dark[800] }}
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