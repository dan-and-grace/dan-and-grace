import * as React from "react";
import HomeSection from "../components/homeSection";
import TravelSection from "../components/travelSection";
import { Divider } from "@chakra-ui/react";

export default function Page() {
  return (
    <>
      <HomeSection />
      <Divider />
      <TravelSection />
    </>
  );
}
