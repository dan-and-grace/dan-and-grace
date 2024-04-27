import { StackProps, VStack } from "@chakra-ui/react";

export interface SectionProps extends StackProps {
  name: string;
}

export default function Section({ name, ...props }: SectionProps) {
  return (
    <VStack
      justifyContent="center"
      pt="5em"
      pb="5em"
      id={name}
      width="100%"
      borderTopColor="black.500"
      borderTopWidth={1}
      {...props}
    ></VStack>
  );
}
