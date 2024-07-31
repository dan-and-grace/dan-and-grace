import {
  Container,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ceremony, reception } from "../constants";
import LocationText from "./locationText";
import Section from "./section";

const LocationSection = () => {
  return (
    <Section showTopDivider={false} showBottomDivider={false} pt={0}>
      <Container maxW="5xl">
        <Grid
          templateAreas={{
            base: `"${ceremony.event}-img" "${ceremony.event}-loc"
                "${reception.event}-img" "${reception.event}-loc"`,
            lg: `"${ceremony.event}-img ${reception.event}-img" 
                "${ceremony.event}-loc ${reception.event}-loc"`,
          }}
          templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
          templateRows="repeat(2, fit-content)"
          gap={{ base: 10, lg: 0 }}
        >
          {[ceremony, reception].map((p) => (
            <>
              <GridItem area={`${p.event}-img`} w="full" m="auto">
                <Image
                  width="100%"
                  objectFit="cover"
                  src={`${p.location.image}`}
                  alt={`Digital drawing of ${p.location.name}`}
                />
              </GridItem>
              <GridItem
                area={`${p.event}-loc`}
                h="fit-content"
                mt={{ base: 0, lg: 5 }}
              >
                <VStack justifyContent="center" fontSize="lg">
                  <Text fontSize="xl" fontWeight={600} textAlign="center">
                    {p.event} Location
                  </Text>
                  <LocationText {...p.location} />
                </VStack>
              </GridItem>
            </>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default LocationSection;
