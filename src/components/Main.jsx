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
        <Box>
          <Heading size={{ base: "xl", md: "2xl" }} color={"white"}>
            Laura Vollmer
          </Heading>
          <p size={{ base: "xl", md: "2xl" }} color="white">
            Software Developer
          </p>
        </Box>
      </Box>
    </div>
  );
};

export default Main;
