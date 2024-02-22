import React from "react";
import backgroundImage from "../assets/background.jpg";
import { Box, Heading, Text } from "@chakra-ui/react";

const Main = () => {
  return (
    <div>
      <Box
        bgImage={`url(${backgroundImage})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="100vh"
      >
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          pt="100px"
        >
          <Heading size={{ base: "xl", md: "2xl" }} color="white">
            Laura Vollmer
          </Heading>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size={{ base: "lg", md: "xl" }} color="white">
            Software Developer
          </Heading>
        </Box>
      </Box>
    </div>
  );
};

export default Main;
