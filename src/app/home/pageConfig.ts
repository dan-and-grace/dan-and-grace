import { SectionProps } from "../components/section";
import AccomodationSection from "../sections/accomodationSection";
import CeremonySection from "../sections/ceremonySection";
import HomeSection from "../sections/homeSection";
import NottsGuideSection from "../sections/nottsGuideSection";
import QnASection from "../sections/qnaSection";
import ReceptionSection from "../sections/receptionSection";
import TravelSection from "../sections/travelSection";
import InvitationsComingSoonSection from "../sections/invitationsComingSoonSection";

interface SectionConfig {
  name: string;
  component: React.ComponentType<SectionProps>;
}

interface PageConfiguration {
  home: SectionConfig;
  sections: SectionConfig[];
}

export const pageConfiguration: PageConfiguration = {
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
      name: "Invitations coming soon!",
      component: InvitationsComingSoonSection,
    },
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
