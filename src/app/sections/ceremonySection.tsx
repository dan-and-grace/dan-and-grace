"use client";

import {
  AspectRatio,
  Container,
  Stack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import LocationText from "../components/locationText";
import Section, { SectionProps } from "../components/section";
import SectionHeading from "../components/sectionHeading";

// TODO: Make it fit mobile
export default function CeremonySection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="4xl">
        <VStack fontWeight={400} gap="1em">
          <SectionHeading>{props.name}</SectionHeading>
          <Stack width="100%" direction="row">
            <Image
              width="50%"
              objectFit="cover"
              src="church.svg"
              alt="Digital drawing of Sacred Heart Catholic Church"
            />
            <VStack justifyContent="center">
              <Text fontWeight={600}>12:00 PM to 12:45 PM</Text>
              <LocationText
                name="Sacred Heart Catholic Church"
                address="99 Carlton Hill, Carlton, Nottingham NG4 1FP"
                googleMapsUrl="https://maps.app.goo.gl/mWaN1A2ANPjMHGgT6"
              />
            </VStack>
          </Stack>
        </VStack>
      </Container>
    </Section>
  );
}
