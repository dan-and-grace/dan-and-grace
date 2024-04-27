import { Container, VStack, Text, Tag, HStack } from "@chakra-ui/react";
import Section, { SectionProps } from "../components/section";
import SectionHeading from "../components/sectionHeading";

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
  link?: string;
}

const nottSpots: TouristSpot[] = [
  {
    name: "Nottingham City Centre",
    description:
      "One-liner description about this wonderful nottingham hotspot.",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
  },
  {
    name: "City of Caves",
    description:
      "One-liner description about this wonderful nottingham hotspot.",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
  },
  {
    name: "National Justice Museum",
    description:
      "One-liner description about this wonderful nottingham hotspot.",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
  },
  {
    name: "Ye Olde Trip To Jerusalem",
    description:
      "One-liner description about this wonderful nottingham hotspot.",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
  },
  {
    name: "Nottingham Castle",
    description:
      "One-liner description about this wonderful nottingham hotspot.",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
  },
  {
    name: "Nottingham Contemporary",
    description:
      "One-liner description about this wonderful nottingham hotspot.",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
  },
  {
    name: "Rufford Abbey",
    description:
      "One-liner description about this wonderful nottingham hotspot.",
    tags: [],
    category: CategoryTypes.Attractions,
  },
  {
    name: "Wollaton Hall",
    description:
      "One-liner description about this wonderful nottingham hotspot.",
    tags: [TagTypes.ReachableByPublicTransport],
    category: CategoryTypes.Attractions,
  },
  {
    name: "Newstead Abbey",
    description:
      "One-liner description about this wonderful nottingham hotspot.",
    tags: [],
    category: CategoryTypes.Attractions,
  },
  {
    name: "Sherwood Forest Visitor Centre",
    description:
      "One-liner description about this wonderful nottingham hotspot.",
    tags: [],
    category: CategoryTypes.Attractions,
  },
];

export default function NottsGuideSection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.sm">
        <VStack fontWeight={400} textAlign="left" gap="1em">
          <SectionHeading>{props.name}</SectionHeading>
          <Text>
            Nottingham is a city in the East Midlands area of England. Its
            modern history dates back to the middle ages. Responsible for the
            development of ibuprofen, the traffic light, and the MRI scanner.{" "}
          </Text>
          {nottSpots.map((item) => (
            <VStack textAlign="left">
              <Text>
                <strong>{item.name}</strong>
              </Text>
              <HStack>
                <Tag>{item.category}</Tag>
                {item.tags?.map((tag) => (
                  <Tag>{tag}</Tag>
                ))}
              </HStack>
              <Text>{item.description}</Text>
            </VStack>
          ))}
        </VStack>
      </Container>
    </Section>
  );
}
