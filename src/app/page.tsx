import { Heading, Image, VStack, Text } from "@chakra-ui/react";

export default function SaveTheDateApp() {
  return (
    <main className="flex flex-col items-center justify-center h-full overflow-hidden bg-#f9f9f9">
      <VStack p={5} w="100vw" textAlign="center">
        <Heading fontWeight={700}>Save the date</Heading>
        <Image
          maxW={700}
          rounded="sm"
          objectFit="cover"
          src="save_the_date_nottingham.svg"
          alt="Drawing of Nottingham notable landmarks, such as the Robin Hood statue and the Nottingham Council House."
        />
        <VStack m={5} fontWeight={400}>
          <Text fontSize="2xl" fontWeight={600}>
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
