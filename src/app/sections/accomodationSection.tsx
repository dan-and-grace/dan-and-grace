import {
  Container,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Link from "../components/link";
import Section, { SectionProps } from "../components/section";
import SectionHeading from "../components/sectionHeading";

interface Accomodation {
  name: string;
  link: string;
}
const accomodationRecommendations: Accomodation[] = [
  {
    name: "Premier Inn Nottingham City Centre (Chapel Bar) hotel",
    link: "https://maps.app.goo.gl/zWb1gSC1aox5RfhAA",
  },
  {
    name: "Premier Inn Nottingham City Centre (Goldsmith Street) hotel",
    link: "https://maps.app.goo.gl/EHyJ46thmdoL5jz17",
  },
  {
    name: "Travelodge Nottingham Central",
    link: "https://maps.app.goo.gl/weNSyyzaBZaLa5qG7",
  },
  {
    name: "ibis Nottingham Centre",
    link: "https://maps.app.goo.gl/RzL5o97aQYrdi4Kj8",
  },
];

export default function AccomodationSection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.md">
        <VStack fontWeight={400} textAlign="left" gap="1em">
          <SectionHeading>{props.name}</SectionHeading>
          <Text>
            If you are looking for an affordable hotel and are happy with just
            the standard basic accomodation, we recommend staying at a{" "}
            <Link href="https://www.travelodge.co.uk/">Travelodge</Link> or a{" "}
            <Link href="https://www.premierinn.com/gb/en/home.html">
              Premier Inn
            </Link>
            .
          </Text>
          <Text>
            If you will not be driving, then we recommend staying in the
            Nottingham City area as you will have access to public transport.
            For example:
          </Text>
          <UnorderedList>
            {accomodationRecommendations.map((i) => (
              <ListItem key={i.name}>
                <Link href={i.link}>{i.name}</Link>
              </ListItem>
            ))}
          </UnorderedList>
        </VStack>
      </Container>
    </Section>
  );
}
