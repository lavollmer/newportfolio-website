import React from "react";
import { Divider } from "@chakra-ui/react";

const Sidenav = () => {
  return (
    <div>
      <Flex
        pos="sticky"
        left="5px"
        h="95vh"
        marginTop="2.5vh"
        boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
        w="200px"
        justify-content="space-between"
      >
        <Flex></Flex>
        <Flex p="5%" flexDir="column" w="100%" alignItems="flex-start" mb={4}>
          <Divider />
        </Flex>
      </Flex>
    </div>
  );
};

export default Sidenav;
