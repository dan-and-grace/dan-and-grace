"use client";

import { Button, Container, VStack, Text } from "@chakra-ui/react";
import { useCallback } from "react";
import Section, { SectionProps } from "../components/section";
import SectionHeading from "../components/sectionHeading";

export default function RsvpSection(props: SectionProps) {
  const rsvpHandler = useCallback(() => {
    // TODO: Send to RSVP Form
  }, []);
  return (
    <Section
      {...props}
      pt="3em"
      pb="3em"
      backgroundColor="#FFCF00"
      showTopDivider={false}
    >
      <Container maxW="4xl">
        <VStack fontWeight={400} alignContent="center" alignItems="center">
          <SectionHeading>{props.name}</SectionHeading>
          <VStack gap="1em">
            <VStack gap={0}>
              <Text fontSize="lg">
                We&apos;re so excited to see you! Hope you can make it!
              </Text>
              <Text fontSize="lg">
                Please let us know by the <strong>15th March 2025</strong>.
              </Text>
            </VStack>
            <Button variant="light" onClick={rsvpHandler} fontSize="xl">
              RSVP
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}
