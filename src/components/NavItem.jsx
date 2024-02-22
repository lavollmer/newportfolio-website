import React from "react";
import {
  Text,
  Flex,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuList,
} from "@chakra-ui/react";
import { FiHome } from "react-icons/fi";

const NavItem = ({ navSize, title, Icon, active }) => {
  return (
    <>
      <Flex
        mt={30}
        flexDir="column"
        w="100%"
        //if size is small align everything to center otherwise everything will be flex-start
        alignItems={navSize == "small" ? "center" : "flex-start"}
      ></Flex>
      <Menu placement="right">
        <Link
          backgroundColor={active && "white"}
          p={3}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "white" }}
          w={navSize == "large" && "100%"}
        >
          <MenuButton>
            <Flex>
              <Icon as={FiHome} />
              <Text>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </>
  );
};

export default NavItem;
