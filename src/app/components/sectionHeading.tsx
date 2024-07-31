import { Heading, HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface SectionHeadingProps extends HeadingProps {
  children: ReactNode;
}

export default function SectionHeading({
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <Heading
      mt={5}
      as="h2"
      width="100%"
      fontSize="3xl"
      fontWeight={700}
      pb={3}
      textAlign="center"
      {...props}
    >
      {children}
    </Heading>
  );
}
