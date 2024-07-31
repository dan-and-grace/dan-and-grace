import {
  Box,
  BoxProps,
  Container,
  ContainerProps,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
import SectionHeading from "./sectionHeading";

interface TwoColSectionLayoutProps extends ContainerProps {
  sectionName?: string;
  left: React.ReactNode;
  right: React.ReactNode;
  leftProps?: BoxProps;
}

export default function TwoColSectionLayout({
  sectionName,
  left,
  right,
  leftProps,
  ...props
}: TwoColSectionLayoutProps) {
  return (
    <Container maxW="5xl" {...props}>
      <VStack gap="1em">
        <SimpleGrid columns={{ base: 1, lg: 2 }} width="100%" gap="1em">
          <Box margin="auto" width="100%" {...leftProps}>
            {left}
          </Box>
          <Box margin="auto" width="100%">
            {sectionName && (
              <SectionHeading py={5}>{sectionName}</SectionHeading>
            )}
            {right}
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
}
