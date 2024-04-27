import { VStack } from "@chakra-ui/react";
import * as React from "react";
import { SectionProps } from "../components/section";
import AccomodationSection from "../sections/accomodationSection";
import CeremonySection from "../sections/ceremonySection";
import HomeSection from "../sections/homeSection";
import NottsGuideSection from "../sections/nottsGuideSection";
import QnASection from "../sections/qnaSection";
import ReceptionSection from "../sections/receptionSection";
import RsvpSection from "../sections/rsvpSection";
import TravelSection from "../sections/travelSection";

interface SectionConfig {
  name: string;
  component: React.ComponentType<SectionProps>;
}

interface PageConfig {
  home: SectionConfig;
  sections: SectionConfig[];
}

export const pageConfig: PageConfig = {
  home: {
    name: "home",
    component: HomeSection,
  },
  sections: [
    // This section is hidden until we are ready for RSVPs
    // {
    //   name: "RSVP",
    //   component: RsvpSection,
    // },
    {
      name: "Ceremony",
      component: CeremonySection,
    },
    {
      name: "Reception",
      component: ReceptionSection,
    },
    {
      name: "Travel",
      component: TravelSection,
    },
    {
      name: "Accomodation",
      component: AccomodationSection,
    },
    {
      name: "Nottingham Guide",
      component: NottsGuideSection,
    },
    {
      name: "FAQs",
      component: QnASection,
    },
  ],
};

export default function Page() {
  return (
    <>
      <pageConfig.home.component name={pageConfig.home.name} />
      {pageConfig.sections.map((props) => {
        return (
          <VStack key={props.name}>
            <props.component name={props.name} />
          </VStack>
        );
      })}
    </>
  );
}
