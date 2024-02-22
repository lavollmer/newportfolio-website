import React from "react";
import { Icon, Flex, Heading, Text } from "@chakra-ui/react";

const NavHoverBox = ({ icon, title, description }) => {
  return (
    <>
      <Flex />
      <Flex
        h={200}
        w={200}
        flexDir="column"
        alignItems="center"
        justify="center"
        backgroundColor="green"
        borderRadius="10px"
        color="white"
        textAlign="center"
      >
        <Icon as={Icon} fontSize="3xl" mb={4}></Icon>
        <Heading size="md" fontWeight="normal"></Heading>
        <Text>{description}</Text>
      </Flex>
    </>
  );
};

export default NavHoverBox;
