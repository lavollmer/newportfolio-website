import React from "react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <div>
        <Heading>Laura Vollmer</Heading>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
      </div>
    </>
  );
};

export default Header;
