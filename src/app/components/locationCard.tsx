import { VStack, Image, Card, CardBody, Text } from "@chakra-ui/react";
import Section from "./section";
import TwoColSectionLayout from "./twoColSectionLayout";
import SectionHeading from "./sectionHeading";
import LocationText, { LocationTextProps } from "./locationText";

interface LocationCardProps extends LocationTextProps {
  image: string;
  event: string;
}

const LocationCard = (props: LocationCardProps) => {
  return (
    <Card shadow={0}>
      <CardBody display="flex" flexDirection="column" gap={4}>
        <Image
          width="100%"
          objectFit="cover"
          src={`${props.image}`}
          alt={`Digital drawing of ${props.name}`}
        />
        <VStack justifyContent="center" height="100%" fontSize="lg">
          <Text fontSize="xl" fontWeight={600} textAlign="center">
            {props.event} Location
          </Text>
          <LocationText {...props} />
        </VStack>
      </CardBody>
    </Card>
  );
};

export default LocationCard;
