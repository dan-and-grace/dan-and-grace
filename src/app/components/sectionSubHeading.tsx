import { Heading, HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionSubHeadingProps extends HeadingProps {
  children: ReactNode;
}

export default function SectionSubHeading({
  children,
  ...props
}: SectionSubHeadingProps) {
  return (
    <Heading
      as="h3"
      fontSize="lg"
      pb={2}
      pt={3}
      textAlign="left"
      w="full"
      color="brandOrange.700"
      {...props}
    >
      {children}
    </Heading>
  );
}
