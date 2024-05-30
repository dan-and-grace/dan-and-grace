import { StackProps, VStack } from "@chakra-ui/react";

export default function CenterPageLayout(props: StackProps) {
  return (
    <main style={{ height: "100%", width: "100%" }}>
      <VStack
        p={3}
        w="100%"
        textAlign="center"
        h="100%"
        justifyContent="center"
        overflow="hidden"
        {...props}
      />
    </main>
  );
}
