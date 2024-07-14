"use client";

import {
  Box,
  Container,
  SimpleGrid,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import SectionHeading from "./sectionHeading";

interface TwoColSectionLayout {
  sectionName: string;
  left: React.ReactNode;
  right: React.ReactNode;
}

export default function TwoColSectionLayout({
  sectionName,
  left,
  right,
}: TwoColSectionLayout) {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");
  return (
    <Container maxW="5xl">
      <VStack gap="1em">
        <SimpleGrid columns={isLargerThan800 ? 2 : 1} width="100%" gap="1em">
          <Box margin="auto" width="100%">
            {left}
          </Box>
          <Box margin="auto" width="100%">
            <SectionHeading py={5}>{sectionName}</SectionHeading>
            {right}
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
