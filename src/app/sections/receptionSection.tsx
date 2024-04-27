import { Container, Image, VStack, Text } from "@chakra-ui/react";
import LocationText from "../components/locationText";
import Section, { SectionProps } from "../components/section";
import SectionHeading from "../components/sectionHeading";

export default function ReceptionSection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.sm">
        <VStack fontWeight={400} textAlign="left" gap="1em">
          <SectionHeading>{props.name}</SectionHeading>
          <Text textAlign="center">
            Food will be served at around 2pm, followed by speeches, sweet
            things, music, and dancing. Remember to bring or wear some comfy
            shoes!
          </Text>
          <Image
            width="100%"
            objectFit="cover"
            src="richard_herrod.svg"
            alt="Digital drawing of Richard Herrod Centre"
          />
          <LocationText
            name="Richard Herrod Centre"
            address="Foxhill Rd, Carlton, Nottingham NG4 1RL"
            googleMapsUrl="https://maps.app.goo.gl/zvSumVdHfDPBo7PL6"
            url="https://www.gedling.gov.uk/leisure/ourcentres/richardherrodcentre/"
          >
            <Text>(~15 minutes walk from the church)</Text>
          </LocationText>
        </VStack>
      </Container>
    </Section>
  );
}
