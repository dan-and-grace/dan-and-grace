import { Container, Text, VStack } from "@chakra-ui/react";
import Link from "../components/link";
import Section, { SectionProps } from "../components/section";
import SectionHeading from "../components/sectionHeading";

export default function AccomodationSection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.sm">
        <VStack fontWeight={400} textAlign="left" gap="1em">
          <SectionHeading>{props.name}</SectionHeading>
          <Text>
            If you are looking for an affordable hotel and are happy with just
            the standard basic accomodation, we recommend staying at a{" "}
            <Link href="https://www.travelodge.co.uk/">Travelodge</Link> or a{" "}
            <Link href="https://www.premierinn.com/gb/en/home.html">
              Premier Inn
            </Link>
            .
          </Text>
          <Text>
            Travelling within Nottinghamshire can take an hour or more and
            public transport may not be convenient in all places, so we would
            suggest considering your journeys to and from the wedding venue when
            choosing a place to stay. Accomodations in Nottingham City, for
            example, will probably have the best access to public transport.
          </Text>
        </VStack>
      </Container>
    </Section>
  );
}
