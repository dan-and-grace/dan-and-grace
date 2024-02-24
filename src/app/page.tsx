import { Heading, Image, VStack, Text } from "@chakra-ui/react";

export default function SaveTheDateApp() {
  return (
    <main className="flex flex-col items-center justify-center h-full overflow-hidden">
      <VStack p={5} w="100vw" textAlign="center">
        <Heading>Save the date</Heading>
        <Image
          maxW={700}
          rounded="sm"
          objectFit="cover"
          src="save_the_date_nottingham.svg"
          alt="Drawing of Nottingham notable landmarks, such as the Robin Hood statue and the Nottingham Council House."
        />
        <VStack>
          <Text fontSize="2xl" fontWeight={500}>
            Dan & Grace
          </Text>
          <VStack fontSize="xl" gap={0}>
            <Text>10th May 2025</Text>
            <Text>Carlton, Nottingham, UK</Text>
          </VStack>
          <Text>Invite and updates on this website to come!</Text>
        </VStack>
      </VStack>
    </main>
  );
}
