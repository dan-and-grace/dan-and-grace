import {
  Container,
  VStack,
  Text,
  Tag,
  HStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Section, { SectionProps } from "../components/section";
import SectionHeading from "../components/sectionHeading";
import Link from "../components/link";

enum TagTypes {
  ReachableByPublicTransport = "Public transport friendly",
}

enum CategoryTypes {
  Attractions = "Attraction",
}

interface TouristSpot {
  name: string;
  description: string;
  tags: string[];
  category: string;
  price?: string;
  link?: string;
}

const nottSpots: TouristSpot[] = [
  {
    name: "City of Caves",
    description: "Nottingham's most unique attraction",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
    price: "£",
    link: "https://www.nationaljusticemuseum.org.uk/cityofcaves",
  },
  {
    name: "Ye Olde Trip To Jerusalem",
    description: "Working pub dating back to the 12th Century",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
    link: "https://www.greeneking.co.uk/pubs/nottinghamshire/ye-olde-trip-to-jerusalem",
  },
  {
    name: "National Justice Museum",
    description: "Housed in the city's Victorian courthouse and jail",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
    price: "££",
    link: "https://www.nationaljusticemuseum.org.uk/museum",
  },
  {
    name: "Wollaton Hall",
    description: "Beautiful stately home and grounds",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
    price: "free",
    link: "https://wollatonhall.org.uk/",
  },
  {
    name: "Nottingham Contemporary",
    description: "Art gallery in the city center",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
    price: "free",
    link: "https://www.nottinghamcontemporary.org/",
  },
];

export default function NottsGuideSection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.sm">
        <VStack fontWeight={400} textAlign="center" gap="1em">
          <SectionHeading>{props.name}</SectionHeading>
          <Text>
            If you are spending some time in Nottingham, here are some
            recommendations!
          </Text>
          <UnorderedList textAlign="left">
            {nottSpots.map((item) => (
              <ListItem key={item.name}>
                <Link href={item.link}>{item.name}</Link> |{" "}
                {item.price ? `${item.price} |` : ""} {item.description}
              </ListItem>
            ))}
          </UnorderedList>
          <Text>
            If you have your own car and don’t mind travelling further away, we
            can suggest,{" "}
            <Link href="https://ruffordabbey.co.uk/">Rufford Abbey</Link>,{" "}
            <Link href="https://newsteadabbey.org.uk/">Newstead Abbey</Link>,
            and{" "}
            <Link href="https://www.visitsherwood.co.uk/">
              Sherwood Forest Visitor Centre
            </Link>
            .
          </Text>
        </VStack>
      </Container>
    </Section>
  );
}
