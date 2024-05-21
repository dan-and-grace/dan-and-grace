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
      pt="3em"
      pb="3em"
      backgroundColor="#FFCF00"
      showTopDivider={false}
    >
      <Container maxW="4xl">
        <VStack fontWeight={400} alignContent="center" alignItems="center">
          <SectionHeading>{props.name}</SectionHeading>
          <VStack gap="1em">
            <VStack gap={0} textAlign="center">
              <Text>
                We&apos;ll be sending invitations either by post/email.
              </Text>
              <Text>To update your details, you can do so here:</Text>
            </VStack>
            <Button
              _hover={{
                backgroundColor: "#fff9e0",
              }}
              backgroundColor="white"
              onClick={updateContactDetails}
            >
              Update Contact Details
            </Button>
          </VStack>
        </VStack>
      </Container>
    </Section>
  );
}
