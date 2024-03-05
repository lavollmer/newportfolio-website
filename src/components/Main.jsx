import React from "react";
import backgroundImage from "../assets/background.jpg";
import { Box, Heading } from "@chakra-ui/react";

const Main = () => {
  return (
    <div>
      <Box
        bgImage={`url(${backgroundImage})`}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        h="100vh"
        // zIndex={-1}
      >
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          pt="100px"
          // zIndex={1}
        >
          <Heading size={{ base: "xl", md: "2xl" }} color="white" zIndex={1}>
            Laura Vollmer
          </Heading>
        </Box>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
        >
          <Heading size={{ base: "lg", md: "xl" }} color="white" zIndex={1}>
            Software Developer
          </Heading>
        </Box>
      </Box>
    </div>
  );
};

export default Main;
