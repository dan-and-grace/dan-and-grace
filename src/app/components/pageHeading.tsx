import { Heading, HeadingProps, Image } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PageHeadingProps extends HeadingProps {
  children: ReactNode;
}

export default function PageHeading({ children, ...props }: PageHeadingProps) {
  return (
    <Heading
      as="h1"
      fontSize="5xl"
      fontWeight={700}
      pb={3}
      textAlign="center"
      {...props}
    >
      {children}
    </Heading>
  );
}
