"use client";

import { Button, Container, VStack, Text } from "@chakra-ui/react";
import { useCallback } from "react";
import Section, { SectionProps } from "../components/section";
import SectionHeading from "../components/sectionHeading";

export default function InvitationsComingSoonSection(props: SectionProps) {
  const updateContactDetails = useCallback(() => {
    window.location.href = "https://forms.gle/beXMnG23gPAuAUY17";
  }, []);
  return (
    <Section
      {...props}
      py="5em"
      backgroundColor="brand.500"
      showTopDivider={false}
      color="white"
    >
      <Container maxW="4xl">
        <VStack fontWeight={400} alignContent="center" alignItems="center">
          <SectionHeading fontSize={{ base: "3xl", md: "5xl" }}>
            {props.name}
          </SectionHeading>
          <VStack gap={10}>
            <VStack gap={0} textAlign="center">
              <Text fontSize={{ base: "xl", md: "2xl" }}>
                Send us your contact details so we can reach you.
              </Text>
            </VStack>
            <Button
              _hover={{
                backgroundColor: "blue.500",
              }}
              backgroundColor="white"
              onClick={updateContactDetails}
            >
              Send Contact Details
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}
