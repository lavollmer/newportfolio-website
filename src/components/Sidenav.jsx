import React from "react";
import NavItem from "./NavItem";

//importing all the icons
import { Flex, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
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
        //sticky means it will remain in its position relative view in the viewport
        pos="sticky"
        //left offset to 5 pixels
        left="5px"
        //95% height of the viewport
        h="95vh"
        //sets the top margin of the element to 2.5% of the viewport
        marginTop="2.5vh"
        //adds box shadow element to the viewport
        boxShadow="0 4px 12px 0 rgba(0,0,0,0.5)"
        //border radius variable
        borderRadius={navSize == "small" ? "15px" : "30px"}
        //sets width on the navSize
        w={navSize == "small" ? "75px" : "200px"}
        //splits the items between evenly
        justifyContent="space-between"
        //higher value will mean the element is stacked on top
        zIndex="100"
      >
        <Flex
          //sets percent to 5% of the parent container
          p="5%"
          //flex direction to column based
          flexDir="column"
          alignItems={navSize == "small" ? "center" : "flex-start"}
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
          <NavItem navSize={navSize} Icon={FiHome} title="Home" />
          <NavItem navSize={navSize} Icon={VscProject} title="Projects" />
          <NavItem navSize={navSize} Icon={RxAvatar} title="About" />
          <NavItem navSize={navSize} Icon={AiOutlineAlignLeft} title="Skills" />
          <NavItem navSize={navSize} Icon={AiFillCamera} title="Design" />
          <NavItem navSize={navSize} Icon={AiFillMail} title="Contact" />
        </Flex>
      </Flex>
    </>
  );
};

export default Sidenav;
