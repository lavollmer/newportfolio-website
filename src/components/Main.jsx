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
      >
        <Heading>Laura Vollmer</Heading>
      </Box>
    </div>
  );
};

export default Main;
