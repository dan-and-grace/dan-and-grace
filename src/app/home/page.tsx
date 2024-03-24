"use client";

import * as React from "react";
import { Alert, AlertIcon, Box, HStack, Text } from "@chakra-ui/react";
import HomeSection from "../components/homeSection";
import NavBar from "../components/navbar";

const WorkInProgressWarningBar = () => (
  <Alert status="warning">
    <HStack width="100%" justifyContent="center">
      <AlertIcon />
      <Text>
        Please don't rely on any information shown here. This page is a work in
        progress.
      </Text>
    </HStack>
  </Alert>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {/* <WorkInProgressWarningBar /> */}
      <Box w="100vw" margin={0} padding={0}>
        <NavBar width="15em" display="inline-block" verticalAlign="top" />
        <Box
          width="100vw"
          display="inline-block"
          verticalAlign="top"
          overflow="hidden"
        >
          <main>{children}</main>
        </Box>
      </Box>
    </main>
  );
};

export default function Page() {
  return (
    <Layout>
      <HomeSection />
    </Layout>
  );
}
