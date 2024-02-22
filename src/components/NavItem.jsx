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

const NavItem = ({ navSize, title, Icon }) => {
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
        <Link>
          <MenuButton>
            <Flex>
              <Icon as={Icon} />
              <Text>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </>
  );
};

export default NavItem;
