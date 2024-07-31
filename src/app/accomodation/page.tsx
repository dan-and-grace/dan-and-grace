import { Container, Image } from "@chakra-ui/react";
import DoodleView from "../components/doodleView";
import PageHeading from "../components/pageHeading";
import AccomodationSection from "../components/accomodationSection";

export default function Page() {
  return (
    <DoodleView>
      <PageHeading>Accomodation</PageHeading>
      <Container maxW="container.md">
        <Image
          width="100%"
          objectFit="cover"
          src="nottingham.svg"
          alt="Drawing of Nottingham notable landmarks, such as the Robin Hood statue and the Nottingham Council House."
        />
      </Container>
      <AccomodationSection
        showTopDivider={false}
        showBottomDivider={false}
        py={0}
      />
    </DoodleView>
  );
}
