import React from "react";
import { Icon, Flex, Heading, Text } from "@chakra-ui/react";

const NavHoverBox = ({ icon, title, description }) => {
  return (
    <>
      <Flex
        pos="absolute"
        //dynamically calculate the margin top
        mt="calc(100px - 7.5px)"
        ml="-10px"
        width={0}
        height={0}
        borderTop="10px solid transparent"
        borderBottom="10px solid transparent"
        borderRight="10px solid green"
      />
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
