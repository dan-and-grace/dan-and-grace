import { StackProps, VStack } from "@chakra-ui/react";

export interface SectionProps extends StackProps {
  name: string;
}

export default function Section({ name, ...props }: SectionProps) {
  return (
    <VStack
      justifyContent="center"
      mt="5em"
      mb="5em"
      id={name}
      {...props}
    ></VStack>
  );
}
