import {
  Container,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import Link from "./link";
import Section, { SectionProps } from "./section";

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
    name: "Watch the Eurovision grand final",
    description:
      "The Eurovision is an annual international song competition amongst different countries. It is uncertain when the 2025 Eurovision will be yet. But there is a chance it could be in the evening or our wedding.",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
    link: "https://www.nationaljusticemuseum.org.uk/cityofcaves",
  },
  {
    name: "Clubbing at Rock City",
    description:
      "Check out Nottingham's nightclub or gigs to see whether there is something on that night.",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
    link: "https://www.rock-city.co.uk/",
  },
  {
    name: "Stay home and order takeaway",
    description:
      "To those that prefer a relaxing evening after a busy day, we recommend ordering takeaway and vegging out in the comfort of where you are staying.",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
  },
];

export default function NottsEveningGuideSection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.md">
        <VStack fontWeight={400} gap="1em">
          <Text>
            Our day wedding means that you will have time in the evening to do
            whatever you please. Here are some recommendations of what you could
            do in Nottingham:
          </Text>
          <UnorderedList>
            {nottSpots.map((item) => (
              <ListItem key={item.name}>
                <Link href={item.link}>{item.name}</Link> |{" "}
                {item.price ? `${item.price} |` : ""} {item.description}
              </ListItem>
            ))}
          </UnorderedList>
        </VStack>
      </Container>
    </Section>
  );
}
