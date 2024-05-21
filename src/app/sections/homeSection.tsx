"use client";

import { Heading, Text, useMediaQuery, VStack } from "@chakra-ui/react";
import Section, { SectionProps } from "../components/section";

export default function HomeSection(props: SectionProps) {
  const [isSmallerThan450] = useMediaQuery("(max-width: 450px)");

  return (
    <Section
      {...props}
      height="100vh"
      justifyContent="center"
      textAlign="center"
      m="0"
      bgImage="bg_doodles.svg"
      bgRepeat="repeat"
      bgPosition="center"
      bgSize="cover"
      showTopDivider={false}
    >
      <VStack mt={5} mb={5} fontWeight={400} gap={0}>
        <VStack bgColor="white" p={5} borderColor="black" borderWidth={4}>
          <Heading as="h1" fontSize="3xl" fontWeight={700}>
            Dan Bartley & {isSmallerThan450 && <br />}Grace Chin
          </Heading>
          <Text fontSize="2xl" fontWeight={700}>
            Saturday 10 May 2025
          </Text>
        </VStack>
      </VStack>
    </Section>
  );
}
