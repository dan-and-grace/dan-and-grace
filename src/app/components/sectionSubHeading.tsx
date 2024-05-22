import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionSubHeadingProps {
  children: ReactNode;
}

export default function SectionSubHeading({
  children,
}: SectionSubHeadingProps) {
  return (
    <Heading as="h3" fontSize="2xl" pb={2} pt={3} textAlign="center">
      {children}
    </Heading>
  );
}
