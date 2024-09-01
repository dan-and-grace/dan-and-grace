import { Grid, GridItem, VStack, Text, Button } from "@chakra-ui/react";
import PageHeading from "../components/pageHeading";
import SectionSubHeading from "../components/sectionSubHeading";
import { schedule } from "../constants";
import { formatAMPM } from "../datetime-utils";
import SectionSubSubHeading from "../components/sectionSubSubHeading";
import React from "react";
import DoodleView from "../components/doodleView";
import Link from "../components/link";

export default function Page() {
  return (
    <DoodleView>
      <PageHeading>Schedule</PageHeading>
      <VStack>
        <Grid
          templateColumns={{ base: "1fr", md: "max-content 1fr" }}
          templateRows="repeat(2, fit-content)"
          gap={{ base: 3, md: 10 }}
        >
          {schedule.map((scheduledEvent, idx) => (
            <React.Fragment key={idx}>
              <GridItem
                display="flex"
                flexDirection="column"
                gap={3}
                pr={3}
                pt={{ base: 5, md: 0 }}
                borderRightWidth={{ base: 0, md: 4 }}
                borderColor="brandBlue.500"
              >
                <SectionSubHeading
                  color="accentBlue.700"
                  py={0}
                  fontSize={{ base: "3xl", md: "xl" }}
                  textAlign={{ base: "left", md: "right" }}
                >
                  {formatAMPM(scheduledEvent.time)}
                </SectionSubHeading>
                <Text textAlign={{ base: "left", md: "right" }}>
                  {scheduledEvent.location.name}
                </Text>
              </GridItem>
              <GridItem
                display="flex"
                flexDirection="column"
                gap={3}
                pb={{ base: 5, md: 0 }}
                borderBottomWidth={{ base: 4, md: 0 }}
                borderColor="brandBlue.500"
              >
                <SectionSubSubHeading
                  color="accentBlue.700"
                  py={0}
                  fontSize="xl"
                >
                  {scheduledEvent.event}
                </SectionSubSubHeading>
                {scheduledEvent.description.link ? (
                  <Link href={scheduledEvent.description.link}>
                    {scheduledEvent.description.text}
                  </Link>
                ) : (
                  <Text>{scheduledEvent.description.text}</Text>
                )}

                {scheduledEvent.button && (
                  <Button isDisabled>{scheduledEvent.button.label}</Button>
                )}
              </GridItem>
            </React.Fragment>
          ))}
        </Grid>
      </VStack>
    </DoodleView>
  );
}
