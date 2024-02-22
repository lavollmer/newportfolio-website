import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";

const Project = () => {
  return (
    <div>
      <Stack spacing="4">
        {["sm", "md", "lg"].map((size) => (
          <Card key={size} size={size}>
            <CardHeader>
              <Heading size="sm"> Project</Heading>
            </CardHeader>
            <CardBody>
              <Text>size = {size}</Text>
            </CardBody>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default Project;
