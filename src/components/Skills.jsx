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

const Skills = () => {
  return (
    <div>
      <Stack spacing="4">
        {["sm", "md", "lg"].map((size) => (
          <Card key={size} size={size}>
            <CardHeader>
              <Heading size="sm"> {size}</Heading>
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

export default Skills;
