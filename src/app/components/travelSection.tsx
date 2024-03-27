import { Heading, VStack, Text, Container } from "@chakra-ui/react";

export default function TravelSection() {
  return (
    <VStack justifyContent="center" textAlign="center">
      <Container>
        <VStack mt="5em" mb="5em" fontWeight={400}>
          <Heading as="h2" fontSize="3xl" fontWeight={700}>
            TRAVEL
          </Heading>
          <Text as="h3" fontSize="2xl">
            Getting to Nottingham
          </Text>
          <Text>
            If you're coming from out of the UK, we recommend you fly into
            London airports. Your best bet would probably be Heathrow Airport.
          </Text>
          <Text>
            Depending on the London airport, you can travel to London St.
            Pancras or King's Cross train station by coach or metro.
            {/* TODO: To be completed */}
          </Text>
        </VStack>
      </Container>
    </VStack>
  );
}
