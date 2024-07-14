import { Button, Image, Text, VStack } from "@chakra-ui/react";
import LocationText from "../components/locationText";
import Section, { SectionProps } from "../components/section";
import TwoColSectionLayout from "../components/twoColSectionLayout";

export default function ReceptionSection(props: SectionProps) {
  return (
    <Section {...props}>
      <TwoColSectionLayout
        sectionName={props.name}
        left={
          <Image
            height="100%"
            objectFit="cover"
            src="richard_herrod.svg"
            alt="Digital drawing of Richard Herrod Centre"
          />
        }
        right={
          <VStack justifyContent="center" gap="1em" fontSize="lg">
            <LocationText
              name="Richard Herrod Centre"
              address="Foxhill Rd, Carlton, Nottingham NG4 1RL"
              googleMapsUrl="https://maps.app.goo.gl/zvSumVdHfDPBo7PL6"
            >
              <Text>(~15 minutes walk from the church)</Text>
            </LocationText>
            <Text textAlign="center">
              Food will be served at around 2pm,
              <br /> followed by speeches, music, and dancing.
            </Text>
            <Button isDisabled>Menu Preview: Coming soon!</Button>
          </VStack>
        }
      />
    </Section>
  );
}
