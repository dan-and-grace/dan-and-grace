import { StackProps, VStack } from "@chakra-ui/react";

const HighlightCard = ({ children, ...props }: StackProps) => {
  return (
    <VStack
      bgColor="white"
      p={5}
      borderColor="accentBlue.800"
      borderWidth={4}
      gap={5}
      {...props}
    >
      {children}
    </VStack>
  );
};

export default HighlightCard;
