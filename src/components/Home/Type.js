import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          " Java Software Developer",
          " SpringBoot Developer",
          "Open Source Contributor",
          "AWS Enthusiast | Currently Gaining AWS Skills",
          "Earned 4 AWS Badges"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
