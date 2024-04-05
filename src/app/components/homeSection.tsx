import { Heading, Image, VStack, Text } from "@chakra-ui/react";
import Section, { SectionProps } from "./section";

// TODO: Update home section to no longer be save the date contents
export default function HomeSection(props: SectionProps) {
  return (
    <Section
      {...props}
      height="100vh"
      justifyContent="center"
      textAlign="center"
      m="0"
    >
      <Image
        maxH="50vh"
        minW={750}
        rounded="sm"
        objectFit="cover"
        src="save_the_date_nottingham.svg"
        alt="Drawing of Nottingham notable landmarks, such as the Robin Hood statue and the Nottingham Council House."
      />
      <VStack mt={5} mb={5} fontWeight={400} gap={0}>
        <Heading fontSize="3xl" fontWeight={700}>
          SAVE THE DATE
        </Heading>
        <Text fontSize="3xl" fontWeight={600}>
          10th May 2025
        </Text>
        <Text fontFamily="Pacifico, sans-serif">for the wedding of</Text>
        <Text fontSize="2xl">Dan Bartley & Grace Chin</Text>
        <Text fontSize="xl">Carlton, Nottingham, UK</Text>
        <Text>Invitations & updates on this website to come!</Text>
      </VStack>
    </Section>
  );
}
