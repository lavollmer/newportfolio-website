import React from "react";
import { Box } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Define the new text styles
const theme = extendTheme({
  textStyles: {
    h1: {
      // you can also use responsive styles
      fontSize: ["48px", "72px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontSize: ["36px", "48px"],
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-1%",
    },
  },
});

const Header = () => {
  return (
    <>
      <div>
        <Box color="white">
          <Heading>Laura Vollmer</Heading>
        </Box>
        <Box bg="tomato" w="100%" p={4} color="white">
          This is the Box
        </Box>
      </div>
    </>
  );
};

export default Header;
