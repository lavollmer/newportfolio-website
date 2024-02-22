import React from "react";
import { Image } from "@chakra-ui/react";
import backgroundImage from "../assets/background.jpg";

const Main = () => {
  return (
    <div>
      <Image
        src={backgroundImage}
        alt="Night sky background image"
        objectFit="cover"
        height="100vh"
      />
    </div>
  );
};

export default Main;
