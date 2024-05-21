import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionSubSubHeadingProps {
  children: ReactNode;
}

export default function SectionSubSubHeading({
  children,
}: SectionSubSubHeadingProps) {
  return (
    <Heading as="h4" fontSize="lg" pb={1} pt={1}>
      {children}
    </Heading>
  );
}
