import { Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <Heading as="h2" fontSize="3xl" fontWeight={700} pb={3} textAlign="center">
      {children}
    </Heading>
  );
}
