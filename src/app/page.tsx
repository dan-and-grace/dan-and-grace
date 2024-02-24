import { Card, CardBody, CardHeader } from "@chakra-ui/card";
import { Heading, Image, VStack, Text, AspectRatio } from "@chakra-ui/react";

export default function SaveTheDateApp() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <VStack p={5}>
        <Card>
          <CardHeader pb={0}>
            <Heading>Save the date</Heading>
          </CardHeader>
          <CardBody>
            {/* Image to be replaced */}
            <Image
              maxW={500}
              rounded="sm"
              objectFit="cover"
              src="/save-the-date.jpeg"
              alt="Dan and Grace smiling and hugging each other sweetly."
            />
            <VStack m={5}>
              <Text fontSize="2xl">Dan & Grace</Text>
              <VStack fontSize="xl" gap={0}>
                <Text>10th May 2023</Text>
                <Text>Carlton, Nottingham, UK</Text>
              </VStack>
              <Text>More information to come!</Text>
            </VStack>
          </CardBody>
        </Card>
      </VStack>
    </main>
  );
}
