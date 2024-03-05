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
import NavHoverBox from "./NavHoverBox";

const NavItem = ({ navSize, title, Icon, active, description }) => {
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
          p={5}
          borderRadius={8}
          _hover={{ textDecor: "none", backgroundColor: "white" }}
          w={navSize == "large" && "100%"}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon
                // as={FiHome}
                fontSize="xl"
                color={active ? "green" : "gray"}
              />
              <Text ml={5} display={navSize == "small" ? "none" : "flex"}>
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList
          //padding top and bottom
          py={0}
          border="none"
          w={200}
          h={200}
          ml={5}
        >
          <NavHoverBox title={title} Icon={FiHome} description={description} />
        </MenuList>
      </Menu>
    </>
  );
};

export default NavItem;
