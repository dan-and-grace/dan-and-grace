import { Container, Text, VStack } from "@chakra-ui/react";
import Link from "../components/link";
import Section, { SectionProps } from "../components/section";
import SectionHeading from "../components/sectionHeading";
import SectionSubHeading from "../components/sectionSubHeading";

export default function TravelSection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.sm">
        <VStack fontWeight={400} textAlign="left" gap="1em">
          <SectionHeading>{props.name}</SectionHeading>
          <SectionSubHeading>
            For those arriving from outside the UK
          </SectionSubHeading>
          <Text>
            We recommend that you fly to Heathrow Airport and then take a
            National Rail train from St Pancras station to Nottingham. You can
            get to St Pancras station using the London Underground.
          </Text>
          <Text>
            Try to book your National Rail tickets as far in advance as
            possible, as these can get expensive otherwise. You can use{" "}
            <Link href="https://www.thetrainline.com/">Trainline</Link> to book
            your tickets.
          </Text>
          <Text>
            As an alternative, it can be cheaper to take a coach instead of the
            train, although this is less straightforward and will take longer.
            These are the main coach providers in the UK:{" "}
            <Link href="https://uk.megabus.com/">Megabus</Link>,{" "}
            <Link href="https://www.nationalexpress.com/en">
              National Express
            </Link>
            , and <Link href="https://www.flixbus.co.uk/">FlixBus</Link>.
          </Text>
          <SectionSubHeading>Getting to the church</SectionSubHeading>
          <Text>
            <strong>By Car 🚗 - </strong> The church has approximately 45
            parking spaces. Other parking options are Carlton Hill Tesco, 2
            Standhill Road, or the Reception venue which is approximately 15
            minutes&apos; walk away. If using the church car park, please move
            your car to the reception venue after the service as the church will
            have other bookings later in the day.
          </Text>
          <Text>
            <strong>By Taxi 🚕 - </strong> We recommend the local company{" "}
            <Link href="https://dgcars.co.uk/">DG Cars</Link> for booking by
            phone or using their app. Alternatively,{" "}
            <Link href="https://www.uber.com/gb/en/r/cities/taxi/nottingham-eng-gb/">
              Uber
            </Link>{" "}
            is available in Nottingham.
          </Text>
          <Text>
            <strong>By Public Transport 🚌 - </strong>If travelling from
            Nottingham City centre, buses 25, 26, and 27 stop near the church.
          </Text>
          <SectionSubHeading>Getting to the reception</SectionSubHeading>
          <Text>
            <strong>On foot 👣 - </strong>The reception venue is approximately a
            15-minute walk from the church (
            <Link href="https://maps.app.goo.gl/VnUegRTyczGbAT8W6">
              open directions in Google Maps
            </Link>
            ).
          </Text>
          <Text>
            <strong>By Car 🚗 - </strong>The venue has plenty of parking
            available. As above, if you park in the church car park for the
            ceremony please drive to the reception venue afterwards as the
            church will need their car park for another booking.
          </Text>
        </VStack>
      </Container>
    </Section>
  );
}
