import React from "react";

import { Text, Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

const About = () => {
  return (
    <div>
      <Stack spacing={3}>
        <Heading>About Me</Heading>
        <Text fontSize="3xl">
          I am a software engineer with a background in healthcare.
        </Text>
      </Stack>
    </div>
  );
};

export default About;
