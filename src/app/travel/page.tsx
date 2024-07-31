import { VStack } from "@chakra-ui/react";
import LocationCard from "../components/locationCard";
import PageHeading from "../components/pageHeading";
import TwoColSectionLayout from "../components/twoColSectionLayout";
import { ceremony, reception } from "../constants";
import TravelSection from "../components/travelSection";
import LocationSection from "../components/locationSection";

export default function Page() {
  return (
    <VStack fontWeight={400} textAlign="left" gap="1em" py={75} w="full">
      <PageHeading>Travel</PageHeading>
      <LocationSection />
      <TravelSection showBottomDivider={false} />
    </VStack>
  );
}
