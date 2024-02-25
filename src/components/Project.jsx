import React from "react";
import { SimpleGrid, Heading, Button, Text, Stack } from "@chakra-ui/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  Image,
} from "@chakra-ui/react";

const Project = () => {
  return (
    <>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Giftify</Heading>
            <Text>JavaScript, React.js, Chakra UI</Text>
            <Text color="blue.600" fontSize="2xl">
              This project was a gift guide created by a group.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2" alignItems="center">
            <Button variant="solid" colorScheme="blue">
              Giftify App
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Code
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Tutorial Personal Portfolio</Heading>
            <Text>JavaScript, React.js, Chakra UI</Text>
            <Text color="blue.600" fontSize="2xl">
              This project was a personal portfolio.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2" alignItems="center">
            <Button variant="solid" colorScheme="blue">
              Tutorial Portfolio
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Code
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
      <Card maxW="sm">
        <CardBody>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Robot Murder Mystery</Heading>
            <Text>JavaScript, React.js, Chakra UI</Text>
            <Text color="blue.600" fontSize="2xl">
              This project was a gift guide created by a group.
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2" alignItems="center">
            <Button variant="solid" colorScheme="blue">
              Giftify App
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Code
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};

export default Project;
