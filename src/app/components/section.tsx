import { StackProps, VStack } from "@chakra-ui/react";

export interface SectionProps extends StackProps {
  name: string;
  showTopDivider?: boolean;
}

export default function Section({
  name,
  showTopDivider: showDivider,
  ...props
}: SectionProps) {
  return (
    <VStack
      justifyContent="center"
      pt="5em"
      pb="5em"
      id={name}
      width="100%"
      borderTopColor="brandOrange.500"
      borderTopWidth={showDivider == false ? 0 : 5}
      {...props}
    ></VStack>
  );
}
