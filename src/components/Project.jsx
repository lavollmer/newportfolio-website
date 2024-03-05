import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  CardBody,
  Button,
  Box,
} from "@chakra-ui/react";

import { Image } from "@chakra-ui/react";

const Project = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <Heading size="sm">Giftify Website</Heading>
        </CardHeader>
        <CardBody>
          <Box boxSize="sm">
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
          <Text> This project is based on the Giftify website.</Text>
        </CardBody>
        <CardFooter>
          <Button>Github Code</Button>
          <Button>Website</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Project;
