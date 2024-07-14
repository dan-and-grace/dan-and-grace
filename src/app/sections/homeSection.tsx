import { Heading, Text, VStack } from "@chakra-ui/react";
import Section, { SectionProps } from "../components/section";

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
      showTopDivider={false}
    >
      <VStack fontWeight={400} gap={0}>
        <VStack
          bgColor="white"
          py={{ base: 5, md: 10 }}
          px={{ base: 3, md: 10 }}
          borderColor="black"
          borderWidth={{ base: 5, md: 10 }}
        >
          <Heading
            as="h1"
            fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
            fontWeight={700}
            width={{ base: "250px", md: "fit-content" }}
          >
            Dan Bartley & Grace Chin
          </Heading>
          <Text fontSize={{ base: "xl", sm: "2xl" }} fontWeight={700}>
            Saturday 10 May 2025
          </Text>
        </VStack>
      </VStack>
    </Section>
  );
}
