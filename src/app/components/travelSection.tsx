import { Heading, VStack, Text, Container } from "@chakra-ui/react";
import Link from "./Link";
import Section, { SectionProps } from "./section";

export default function TravelSection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.sm">
        <VStack fontWeight={400} textAlign="left" gap="1em">
          <Heading as="h2" fontSize="3xl" fontWeight={700}>
            TRAVEL
          </Heading>
          <Heading as="h3" fontSize="2xl">
            Getting to Nottingham
          </Heading>
          <Text>
            If you're coming from out of the UK, we recommend you fly into
            airports in London. Your best bet would be Heathrow Airport.
          </Text>
          <Text>
            From the airports in London, there are broadly two ways to get to
            Nottingham: (1) By getting to a train station and then taking a
            train to Nottingham, or (2) by getting to a coach station and then
            taking a coach to Nottingham.
          </Text>
          <Text>
            Taking a train to Nottingham train station is usually the fastest,
            and most straightforward option. It is the one that{" "}
            <Link href="https://www.google.com/maps">Google Maps</Link> will
            suggest. We normally use{" "}
            <Link href="https://www.thetrainline.com/">Trainline</Link> to book
            train tickets. Some journeys will require you to change trains.
            Train services can get interrupted (e.g. by train strikes) so be
            sure to check the train service online before you travel. For
            cheaper train tickets, we recommend you read{" "}
            <Link href="https://www.moneysavingexpert.com/travel/cheap-train-tickets/">
              this article
            </Link>{" "}
            for tips.
          </Text>
          <Text>
            Taking a coach to Nottingham is usually more economical than the
            train, but it also takes longer. If you would like to take a coach,
            we checking out these coach providers:{" "}
            <Link href="https://uk.megabus.com/">Megabus</Link>,{" "}
            <Link href="https://www.nationalexpress.com/en">
              National Express
            </Link>
            , and <Link href="https://www.flixbus.co.uk/">FlixBus</Link>.
          </Text>
          <Heading as="h3" fontSize="2xl">
            Local transportation
          </Heading>
          <Text>
            Nottingham has <Link href="https://www.nctx.co.uk/">buses</Link> and
            taxis. If you want to get book a taxi, we would recommend using{" "}
            <Link href="https://dgcars.co.uk/">DG Cars</Link> by calling them or
            using their app, or using the{" "}
            <Link href="https://www.uber.com/gb/en/r/cities/taxi/nottingham-eng-gb/">
              Uber
            </Link>{" "}
            app.
          </Text>
        </VStack>
      </Container>
    </Section>
  );
}
