import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      backgroundColor="white"
      color="black"
      borderRadius="md"
      overflow="hidden"
      spacing={0}
      alignItems="flex-start"
    >
      <Image src={imageSrc} alt={title} width="100%" />
      <VStack p={4} spacing={2} alignItems="flex-start" width="100%">
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text>{description}</Text>
        <HStack spacing={2} alignItems="center">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
