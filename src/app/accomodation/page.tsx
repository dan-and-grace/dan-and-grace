import { Container, Image } from "@chakra-ui/react";
import DoodleView from "../components/doodleView";
import PageHeading from "../components/pageHeading";
import AccomodationSection from "../components/accomodationSection";

export default function Page() {
  return (
    <DoodleView>
      <PageHeading>Accomodation</PageHeading>
      <AccomodationSection
        showTopDivider={false}
        showBottomDivider={false}
        py={0}
      />
    </DoodleView>
  );
}
