"use client";

import { ArrowDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Divider,
  Heading,
  StackProps,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import HighlightCard from "./components/highlightCard";
import Link from "./components/link";
import Section from "./components/section";
import TwoColSectionLayout from "./components/twoColSectionLayout";
import { navigationPathItems, rsvp, schedule, weddingDate } from "./constants";
import { formatAMPM } from "./datetime-utils";

export default function HomePage() {
  return (
    <VStack w="full" gap={0}>
      <VStack
        height="fit-content"
        width="100%"
        justifyContent="center"
        textAlign="center"
        bgImage="bg_doodles.svg"
        bgRepeat="repeat"
        bgPosition="center"
        bgSize="cover"
        gap={0}
        m={0}
      >
        <VStack
          height="100vh"
          width="100%"
          justifyContent="center"
          textAlign="center"
        >
          <HighlightCard>
            <VStack>
              <Heading as="h1" fontSize="xl" fontWeight={700}>
                Join us to celebrate our marriage
              </Heading>
              <Heading
                as="h1"
                fontSize="3xl"
                fontWeight={700}
                width={{ base: "250px", md: "fit-content" }}
              >
                Dan Bartley & Grace Chin
              </Heading>
              <Text fontSize="2xl" fontWeight={700} textAlign="center">
                {weddingDate}
              </Text>
            </VStack>
          </HighlightCard>
        </VStack>
        <Button
          h="fit-content"
          position="absolute"
          bottom={10}
          as="a"
          href="#details"
          // Faded brandBlue.100
          bgColor="rgba(212, 245, 243, 0.96)"
          borderWidth={0}
          rounded="full"
          py={5}
          color="black"
          _hover={{
            bgColor: "accentBlue.700",
            textColor: "white",
          }}
        >
          <VStack
            justifyContent="center"
            alignItems="center"
            w="full"
            h="full"
            gap={0}
          >
            <Text pt={3} fontWeight={700}>
              Info & RSVP
            </Text>
            <ArrowDownIcon boxSize={10} />
          </VStack>
        </Button>
      </VStack>
      <Section id="details" minH="100vh" showBottomDivider={false}>
        <TwoColSectionLayout
          left={
            <VStack fontWeight={400} justifyContent="start" w="full">
              <VStack
                gap={{ base: 5, lg: 10 }}
                mb={10}
                justifyContent="center"
                w="full"
                alignItems="center"
              >
                <VStack gap={5} w="full">
                  <Image
                    borderRadius={10}
                    width="90%"
                    objectFit="cover"
                    src="we_waving.gif"
                    alt=""
                  />
                  <VStack w="full">
                    <Text fontSize="2xl" textAlign="center" w="full">
                      We&apos;re so excited to see you!
                    </Text>
                    <Text fontSize="2xl" textAlign="center" w="full">
                      Hope you can make it!
                    </Text>
                  </VStack>
                  <Text fontSize="xl" textAlign="center" w="full">
                    Please reply by <strong>{rsvp.deadline}</strong>.
                  </Text>
                </VStack>
                <Button
                  as="a"
                  variant="primary"
                  href={rsvp.link}
                  fontSize="3xl"
                  size="lg"
                  rel="noopener noreferrer"
                >
                  RSVP
                </Button>
              </VStack>
            </VStack>
          }
          right={
            <VStack
              justifyContent="space-evenly"
              height="full"
              fontSize="lg"
              borderColor="borderColor"
              borderWidth={5}
              p={3}
            >
              <DetailsItem heading="When" gap={2}>
                <Text textAlign="left">
                  {weddingDate} at {formatAMPM(schedule[0].time)} -{" "}
                  {formatAMPM(schedule[schedule.length - 1].time)}
                </Text>
                <VStack w="full" gap={0}>
                  <Link
                    w="full"
                    textAlign="left"
                    href={navigationPathItems.Schedule}
                  >
                    See schedule
                  </Link>
                </VStack>
              </DetailsItem>
              <Divider />
              <DetailsItem heading="Where" gap={2}>
                <VStack w="full" gap={0}>
                  <Text textAlign="left">{schedule[0].location.name}</Text>
                  <Text textAlign="left">{schedule[0].location.address}</Text>
                </VStack>
                <VStack w="full" gap={0}>
                  <Link
                    w="full"
                    textAlign="left"
                    href={navigationPathItems.Travel}
                  >
                    Learn how to get there
                  </Link>
                  <Text as="i" textAlign="left">
                    The reception venue is ~15 minutes walk away.
                  </Text>
                </VStack>
              </DetailsItem>
              <Divider />
              <DetailsItem heading="Dress code">
                <Text textAlign="left">
                  Formal and comfortable shoes that you can dance in.
                </Text>
              </DetailsItem>
              <Divider />
              <DetailsItem heading="RSVP" gap={2}>
                <Text textAlign="left">
                  Please RSVP to let us know if you can make it by the{" "}
                  <strong>{rsvp.deadline}</strong>. Thank you!
                </Text>
                <Link w="full" textAlign="left" href={rsvp.link}>
                  RSVP now
                </Link>
              </DetailsItem>
            </VStack>
          }
        />
      </Section>
    </VStack>
  );
}

interface DetailsItemProps extends StackProps {
  heading: string;
  children: ReactNode;
}

const DetailsItem = ({ heading, children, ...props }: DetailsItemProps) => {
  return (
    <VStack w="full" p={3}>
      <Heading
        w="full"
        as="h3"
        fontSize="lg"
        fontWeight={700}
        color="accentBlue.800"
        textAlign="left"
      >
        {heading}
      </Heading>
      <VStack w="full" gap={0} {...props}>
        {children}
      </VStack>
    </VStack>
  );
};
