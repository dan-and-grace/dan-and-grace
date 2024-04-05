import { Heading, VStack, Text, Container } from "@chakra-ui/react";
import Link from "./Link";
import Section, { SectionProps } from "./section";

export default function AccomodationSection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.sm">
        <VStack fontWeight={400} textAlign="left" gap="1em">
          <Heading as="h2" fontSize="3xl" fontWeight={700}>
            ACCOMODATION
          </Heading>
          <Text></Text>
        </VStack>
      </Container>
    </Section>
  );
}
