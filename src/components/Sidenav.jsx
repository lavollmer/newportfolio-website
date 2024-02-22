import React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import NavItem from "./NavItem";
import { VscProject } from "react-icons/vsc";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineAlignLeft } from "react-icons/ai";
import { AiFillCamera } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { FiHome } from "react-icons/fi";

const Sidenav = () => {
  //NavBar is at the large state default
  const [navSize, changeNavSize] = useState("large");
  return (
    <>
      <Flex
        pos="sticky"
        left="5px"
        h="95vh"
        marginTop="2.5vh"
        boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
        borderRadius={navSize == "small" ? "15px" : "30px"}
        w={navSize == "small" ? "75px" : "200px"}
        justifyContent="space-between"
        zIndex="100"
      >
        <Flex
          p="5%"
          flexDir="column"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          as="nav"
        >
          <IconButton
            background="none"
            mt={5}
            _hover={{ background: "none" }}
            icon={<FiMenu />}
            onClick={() => {
              if (navSize === "small") changeNavSize("large");
              else changeNavSize("small");
            }}
          />
          <NavItem navSize={navSize} Icon={FiHome} title="Dashboard" />

          <NavItem navSize={navSize} Icon={VscProject} title="Projects" />
          <NavItem navSize={navSize} Icon={RxAvatar} title="About" />
          <NavItem navSize={navSize} Icon={AiOutlineAlignLeft} title="Skills" />
          <NavItem navSize={navSize} Icon={AiFillCamera} title="Design" />
          <NavItem navSize={navSize} Icon={AiFillMail} title="Contact" />
        </Flex>
        {/* <Flex
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          mb={4}
        > */}
        {/* <Divider display={navSize == "small" ? "none" : "flex"} /> */}
        {/* <Flex mt={4} align="center">
            <FaStar color="blue" />
            <Flex
              flexDir="column"
              ml={4}
              display={navSize === "small" ? "none" : "flex"}
            >
              <Heading as="h3" size="sm" color="gray">
                Laura Vollmer
              </Heading>
              <Text color="gray">Admin</Text>
            </Flex>
          </Flex> */}
        {/* </Flex> */}
      </Flex>
    </>
  );
};

export default Sidenav;
