import { Heading, HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionSubSubHeadingProps extends HeadingProps {
  children: ReactNode;
}

export default function SectionSubSubHeading({
  children,
  ...props
}: SectionSubSubHeadingProps) {
  return (
    <Heading as="h4" fontSize="lg" pb={1} pt={1} {...props}>
      {children}
    </Heading>
  );
}
