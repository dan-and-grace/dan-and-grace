import { Container, Text, VStack } from "@chakra-ui/react";
import Link from "./link";
import Section, { SectionProps } from "./section";
import SectionHeading from "./sectionHeading";
import SectionSubHeading from "./sectionSubHeading";

export default function TravelSection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.md">
        <VStack fontWeight={400} textAlign="left" gap="1em">
          <SectionHeading>Getting to Nottingham</SectionHeading>
          <SectionSubHeading>From outside the UK </SectionSubHeading>
          <Text>
            We recommend that you fly to Heathrow Airport and then take a
            National Rail train from St Pancras station to Nottingham. You can
            get to St Pancras station using the London Underground.
          </Text>
          <SectionSubHeading>From within the UK</SectionSubHeading>
          <Text>
            Taking the train will be your best bet if you don&apos;t have a car.
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
          <Text>
            Another way is to drive to Nottingham. If you are new to driving in
            the UK, we highly recommend using the{" "}
            <Link href="https://www.waze.com/apps/">Waze app</Link> to navigate
            around.
          </Text>
          <SectionHeading>Getting to the ceremony</SectionHeading>
          <Text>
            <strong>By Car 🚗 - </strong> The church has roughly 45 parking
            spaces. Other parking options are Carlton Hill Tesco, 2 Standhill
            Road, or the Reception venue which is ~15 minutes&apos; walk away.
            If you do decide to park, please kindly move your car to the
            reception venue after the service as the church will have other
            bookings later in the day. Many thanks!
          </Text>
          <Text>
            <strong>By Taxi 🚕 - </strong>
            We recommend the local company{" "}
            <Link href="https://dgcars.co.uk/">DG Cars</Link> (which
            coincidentally uses the same first letters of our names,{" "}
            <strong>D</strong>an and <strong>G</strong>race) for booking by
            phone or using their app. Alternatively,{" "}
            <Link href="https://www.uber.com/gb/en/r/cities/taxi/nottingham-eng-gb/">
              Uber
            </Link>{" "}
            is also available in Nottingham.
          </Text>
          <Text>
            <strong>By Public Transport 🚌 - </strong>
            If travelling from Nottingham City centre, buses 25, 26, and 27 stop
            near the church.
          </Text>
          <SectionHeading>Getting to the reception</SectionHeading>
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
