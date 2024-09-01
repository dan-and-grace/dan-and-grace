import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  VStack,
} from "@chakra-ui/react";
import PageHeading from "../components/pageHeading";
import { QnAs } from "./constants";

export default function Page() {
  return (
    <Container maxW="container.md" py={75}>
      <VStack fontWeight={400} textAlign="left" gap="1em">
        <PageHeading>FAQs</PageHeading>
        <Accordion allowMultiple width="100%">
          {QnAs.map((item, idx) => (
            <AccordionItem key={`faq-${idx}`} borderColor="brandOrange.500">
              <h2>
                <AccordionButton _hover={{ bg: "brandOrange.100" }}>
                  <Box as="span" fontWeight={600} flex="1" textAlign="left">
                    {item.q}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack>{item.a}</VStack>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </VStack>
    </Container>
  );
}
