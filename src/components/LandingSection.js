import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Francisco!";
const bio1 = "A full stack developer";
const bio2 = "specialised in React and Node.js";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={4}>
      <Avatar size="2xl" name="Francisco" 
      src="https://media.licdn.com/dms/image/v2/C5603AQFgqoaB_2NaIg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517004624461?e=1768435200&v=beta&t=AKG7r_7iCazRSmHS0hKR7XzDlJ24SV5A441wMrrSwf4" 
      />
      <Heading as="h1" size="xl">
        {greeting}
      </Heading>
      <VStack spacing={2}>
        <Heading as="h2" size="md">
          {bio1}
        </Heading>
        <Heading as="h2" size="md">
          {bio2}
        </Heading>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
