import { Heading, Image, VStack, Text, HStack } from "@chakra-ui/react";
import Section, { SectionProps } from "./section";

// TODO: Update home section to no longer be save the date contents
export default function HomeSection(props: SectionProps) {
  return (
    <Section
      {...props}
      height="100vh"
      justifyContent="center"
      textAlign="center"
      m="0"
      bgImage="bg_doodles.svg"
      bgRepeat="repeat"
      bgPosition="center"
      bgSize="cover"
    >
      <VStack mt={5} mb={5} fontWeight={400} gap={0}>
        <HStack bgColor="white" p={5} borderColor="black" borderWidth={4}>
          <Heading as="h1" fontSize="3xl" fontWeight={700}>
            Dan Bartley & Grace Chin
          </Heading>
        </HStack>
      </VStack>
    </Section>
  );
}
