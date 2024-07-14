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
import TwoColSectionLayout from "../components/twoColSectionLayout";

// TODO: Make it fit mobile
export default function CeremonySection(props: SectionProps) {
  return (
    <Section {...props} showTopDivider={false}>
      <TwoColSectionLayout
        sectionName={props.name}
        left={
          <Image
            width="100%"
            objectFit="cover"
            src="church.svg"
            alt="Digital drawing of Sacred Heart Catholic Church"
          />
        }
        right={
          <VStack justifyContent="center" height="100%" fontSize="lg">
            <Text fontWeight={600}>12:00 PM to 12:45 PM</Text>
            <LocationText
              name="Sacred Heart Catholic Church"
              address="99 Carlton Hill, Carlton, Nottingham NG4 1FP"
              googleMapsUrl="https://maps.app.goo.gl/mWaN1A2ANPjMHGgT6"
            />
          </VStack>
        }
      />
    </Section>
  );
}
