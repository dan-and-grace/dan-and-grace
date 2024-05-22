import { VStack } from "@chakra-ui/react";
import * as React from "react";
import { pageConfiguration } from "./pageConfig";

export default function Page() {
  return (
    <>
      <pageConfiguration.home.component name={pageConfiguration.home.name} />
      {pageConfiguration.sections.map((props) => {
        return (
          <VStack key={props.name}>
            <props.component name={props.name} />
          </VStack>
        );
      })}
    </>
  );
}
