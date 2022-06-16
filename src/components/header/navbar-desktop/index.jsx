import { Button, HStack } from "@chakra-ui/react"
import { theme } from "../../../styles/theme"

export const NavbarDesktop = ({ itensMenuList, handleEvent }) => {
  return (
    <HStack>
      {itensMenuList.map(item => (
        <Button
          color={theme.colors.light[200]}
          colorScheme={"light"}
          fontSize="sm"
          key={item.label}
          onClick={() => handleEvent(item.event)}
          variant="ghost"
        >
          {item.label}
        </Button>
      ))}
    </HStack>
  )
}