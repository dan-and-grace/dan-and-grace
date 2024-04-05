import * as React from "react";
import HomeSection from "../components/homeSection";
import TravelSection from "../components/travelSection";
import { Divider } from "@chakra-ui/react";
import AccomodationSection from "../components/accomodationSection";
import { SectionProps } from "../components/section";

interface SectionConfig {
  name: string;
  component: React.ComponentType<SectionProps>;
}

interface PageConfig {
  home: SectionConfig;
  sections: SectionConfig[];
}

export const config: PageConfig = {
  home: {
    name: "home",
    component: HomeSection,
  },
  sections: [
    // {
    //   name: "Location",
    //   component: TravelSection,
    // },
    // {
    //   name: "Schedule",
    //   component: AccomodationSection,
    // },
    {
      name: "Travel",
      component: TravelSection,
    },
    {
      name: "Accomodation",
      component: AccomodationSection,
    },
    // {
    //   name: "Nottingham",
    //   component: AccomodationSection,
    // },
    // {
    //   name: "Q & A",
    //   component: AccomodationSection,
    // },
  ],
};

export default function Page() {
  return (
    <>
      <config.home.component name={config.home.name} />
      {config.sections.map((props) => {
        return (
          <>
            <Divider />
            <props.component name={props.name} />
          </>
        );
      })}
    </>
  );
}
