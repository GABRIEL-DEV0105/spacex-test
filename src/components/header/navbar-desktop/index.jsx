import { Button, HStack } from "@chakra-ui/react"
import { theme } from "../../../styles/theme"

export const NavbarDesktop = ({ itensMenuList }) => {
  return (
    <HStack>
      {itensMenuList.map(item => (
        <Button
          color={theme.colors.light[200]}
          colorScheme={"light"}
          fontSize="sm"
          key={item.label}
          onClick={item.action}
          variant="ghost"
        >
          {item.label}
        </Button>
      ))}
    </HStack>
  )
}