import { Container, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function DoodleView({ children }: { children: ReactNode }) {
  return (
    <VStack
      w="full"
      bgImage={{ base: undefined, md: "faded_bg_doodles.svg" }}
      bgRepeat="repeat-y"
      bgSize="cover"
      bgPosition="center"
      flexGrow={1}
    >
      <Container maxW="container.md" minH="100%">
        <VStack
          fontWeight={400}
          textAlign="left"
          gap="1em"
          py={75}
          px={10}
          w="full"
          bg="white"
          minH="100%"
          borderColor="brandOrange.500"
          borderRightWidth={{ base: 0, md: 7 }}
          borderLeftWidth={{ base: 0, md: 7 }}
        >
          {children}
        </VStack>
      </Container>
    </VStack>
  );
}
