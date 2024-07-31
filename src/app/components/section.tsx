import { StackProps, VStack } from "@chakra-ui/react";

export interface SectionProps extends StackProps {
  name?: string;
  showTopDivider?: boolean;
  showBottomDivider?: boolean;
}

export default function Section({
  name,
  showTopDivider,
  showBottomDivider,
  ...props
}: SectionProps) {
  return (
    <VStack
      justifyContent="center"
      pt="5em"
      pb="5em"
      id={name}
      width="100%"
      borderColor="brandOrange.500"
      borderTopWidth={showTopDivider == false ? 0 : 5}
      borderBottomWidth={showBottomDivider == false ? 0 : 5}
      {...props}
    ></VStack>
  );
}
