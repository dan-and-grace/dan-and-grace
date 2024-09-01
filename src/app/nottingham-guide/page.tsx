import { Container, Image } from "@chakra-ui/react";
import DoodleView from "../components/doodleView";
import NottsEveningGuideSection from "../components/nottsEveningGuideSection";
import NottsGuideSection from "../components/nottsGuideSection";
import PageHeading from "../components/pageHeading";
import SectionHeading from "../components/sectionHeading";

export default function Page() {
  return (
    <DoodleView>
      <PageHeading>Nottingham Guide</PageHeading>
      <Container maxW="container.md">
        <Image
          width="100%"
          objectFit="cover"
          src="nottingham.svg"
          alt="Drawing of Nottingham notable landmarks, such as the Robin Hood statue and the Nottingham Council House."
        />
      </Container>
      <SectionHeading>Evening activities</SectionHeading>
      <NottsEveningGuideSection
        showTopDivider={false}
        showBottomDivider={false}
        py={0}
      />
      <SectionHeading>Attractions</SectionHeading>
      <NottsGuideSection
        showTopDivider={false}
        showBottomDivider={false}
        pt={0}
      />
    </DoodleView>
  );
}
