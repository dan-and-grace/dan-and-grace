import DoodleView from "../components/doodleView";
import PageHeading from "../components/pageHeading";
import SectionHeading from "../components/sectionHeading";
import NottsEveningGuideSection from "../components/nottsEveningGuideSection";
import NottsGuideSection from "../components/nottsGuideSection";

export default function Page() {
  return (
    <DoodleView>
      <PageHeading>Nottingham Guide</PageHeading>
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
