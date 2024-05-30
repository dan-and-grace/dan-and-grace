import { VStack } from "@chakra-ui/react";
import * as React from "react";
import { pageConfiguration } from "./pageConfig";
import HomeLayout from "./homeLayout";

export default function HomePage() {
  return (
    <HomeLayout>
      <pageConfiguration.home.component name={pageConfiguration.home.name} />
      {pageConfiguration.sections.map((props) => {
        return (
          <VStack key={props.name}>
            <props.component name={props.name} />
          </VStack>
        );
      })}
    </HomeLayout>
  );
}
