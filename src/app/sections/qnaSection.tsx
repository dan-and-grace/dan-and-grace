import {
  VStack,
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
  AccordionPanel,
  Image,
} from "@chakra-ui/react";
import Section, { SectionProps } from "../components/section";
import SectionHeading from "../components/sectionHeading";
import { ReactNode } from "react";

const QnAs: {
  q: string;
  a: ReactNode;
}[] = [
  {
    q: "Didn't you already get married?",
    a: (
      <>
        <Text mb="1em">
          Yes! Our engagement happened in 2019 and we were originally planning
          for two wedding ceremonies in 2020: a civil ceremony in Hong Kong and
          a church ceremony in the UK. These plans had to be cancelled due to
          the pandemic, but we were able to hold a very small civil ceremony on
          10th May 2020, exactly five years before our newly planned church
          ceremony! We are so glad that we&apos;ll finally be able to celebrate
          with all our loved ones. Better late than never!
        </Text>
        <Image
          width="100%"
          borderRadius="1em"
          m="auto"
          objectFit="contain"
          src="covid_wedding.JPG"
          alt="Dan and Grace holding their marriage certificate with their mask on outside the City Hall Marriage Registry in Hong Kong during COVID-19"
        />
      </>
    ),
  },
  {
    q: "What is the dress code?",
    a: (
      <Text>
        Formal but comfortable, don&apos;t forget comfortable shoes if you want
        to dance!
      </Text>
    ),
  },
  {
    q: "What time will it finish?",
    a: (
      <Text>
        We have the venue booked until 6.30pm, please stay as long or as short
        as you&apos;d like!
      </Text>
    ),
  },
  {
    q: "What food will be served?",
    a: (
      <Text>
        We&apos;ll be having a buffet-style meal at around 2pm where there will
        be lots of food to choose from! We will provide a preview of the menu at
        a closer date. We&apos;re sorry though that we won&apos;t be able to
        provide an evening meal.
      </Text>
    ),
  },
  {
    q: "Are the ceremony and reception locations wheelchair accessible?",
    a: (
      <Text>
        Yes, there are ramps at the reception venue as well as a wheelchair
        accessible toilet.
      </Text>
    ),
  },
  {
    q: "Is the reception venue indoors?",
    a: <Text>Yes!</Text>,
  },
  {
    q: "Will there be quiet space available?",
    a: (
      <Text>
        Yes, there will be a conference room made available outside the
        reception room which will be available for those who want some quiet
        time.
      </Text>
    ),
  },
  {
    q: "Is there space for plus-ones?",
    a: (
      <Text>
        If there are additional people you wish to bring, please get in touch
        with us before the RSVP date and we&apos;ll do our best to include them
        if possible.
      </Text>
    ),
  },
  {
    q: "What about wedding presents?",
    a: (
      <Text>We will have updated information about this at a closer date.</Text>
    ),
  },
  {
    q: "Is it ok to take pictures during the wedding?",
    a: (
      <Text>
        Definitely! It would be great if you shared them too. We will provide
        more information on how to share your photos at a closer date.
      </Text>
    ),
  },
  {
    q: "I am coming from overseas. How long should I stay in the UK?",
    a: (
      <>
        <Text>
          Thank you for coming such a long way to see us! Nottingham has enough
          sights to see for about a day or two, but you may wish to visit other
          cities during your time in the UK. Please do get in touch with us if
          you&apos;d like any advice about places you can travel to.
        </Text>
        <Text>
          If you would like to plan some time to meet with us outside of the
          wedding day, please don&apos;t hesitate to contact us about that as
          well. If it helps, we plan to take the week before and after our
          wedding day off to prepare and recover, and it would be lovely to see
          you during that time.
        </Text>
      </>
    ),
  },
  {
    q: "Where can I get more information?",
    a: <Text>Please do not hesitate to contact us!</Text>,
  },
];

export default function QnASection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.sm">
        <VStack fontWeight={400} textAlign="left" gap="1em">
          <SectionHeading>{props.name}</SectionHeading>
          <Accordion allowMultiple width="100%">
            {QnAs.map((item, idx) => (
              <AccordionItem key={`faq-${idx}`} borderColor="green.500">
                <h2>
                  <AccordionButton>
                    <Box as="span" fontWeight={600} flex="1" textAlign="left">
                      {item.q}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{item.a}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </VStack>
      </Container>
    </Section>
  );
}
