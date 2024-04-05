import { LinkProps, Link as ChakraLink } from "@chakra-ui/react";

export default function Link(props: LinkProps) {
  return (
    <ChakraLink
      textDecoration="underline"
      textUnderlineOffset="0.1em"
      rel="noopener noreferrer"
      {...props}
    />
  );
}
