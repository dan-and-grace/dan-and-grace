import { VStack, Text, Container } from "@chakra-ui/react";
import Section, { SectionProps } from "../components/section";
import SectionHeading from "../components/sectionHeading";
import { ReactNode } from "react";
import SectionSubHeading from "../components/sectionSubHeading";

const QnAs: {
  q: string;
  a: ReactNode;
}[] = [
  {
    q: "Aren't you already married?",
    a: (
      <>
        <Text>
          Yes, we were legally married in 2020 during COVID and had a small
          legal ceremony.
        </Text>
        <Text>
          Though it was during COVID, regardless of whether it had been COVID,
          we were planning to legally marry in Hong Kong anyway. This is due to
          the relatively long and expensive process we would have to otherwise
          do if we were to legally marry in the UK when we were staying in Hong
          Kong. For example, Grace would have had to apply for a special
          marriage visa and pay an extra 115 GBP.
        </Text>
        <Text>
          Now that COVID is over and we are back in the UK, we wanted to
          celebrate our wedding and get together with loved ones as we
          originally planned.
        </Text>
      </>
    ),
  },
  {
    q: "Are children or plus ones allowed?",
    a: (
      <Text>
        We tried to include all possible children/+1s in the invitation. If you
        had anyone else you wanted to celebrate the day with, please feel free
        to contact us before the RSVP date about it! We can try and squeeze them
        in if possible.
      </Text>
    ),
  },
  {
    q: "What is the dress code?",
    a: (
      <Text>
        Dress for a wedding and dress for comfort. We recommend bringing/wearing
        comfortable shoes if you want to dance!
      </Text>
    ),
  },
  {
    q: "Is dinner included?",
    a: (
      <Text>
        I'm afraid not. We won't be offended if you decided to leave early to
        get dinner. It is a looong day! Feel free to leave as early as you feel
        comfortable, there is no pressure to stay. I imagine we'll want some
        quiet time towards the end of the day anyway.
      </Text>
    ),
  },
  {
    q: "What about wedding presents?",
    a: (
      <Text>
        GIVE US ALLL YOUR MONNNEEEYYY :P Nah, we're good. Donate here if you
        want to give something.
      </Text>
    ),
  },
  {
    q: "Where are you guys going for honeymoon?",
    a: (
      <Text>
        Ummm... Not sure yet to be honest. Trying to save for a house hehe.
      </Text>
    ),
  },
  {
    q: "You have an amazing looking website! Who made it?",
    a: (
      <Text>
        Why, what a wonderful thing to ask! You lovely person! We did (mostly
        Grace)! Thank you!
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
    q: "Is the wedding indoors or outdoors?",
    a: <Text>Indoors! We didn't want to leave the weather for chance!</Text>,
  },
  {
    q: "Is it ok to take pictures during the wedding?",
    a: (
      <Text>
        Definitely! It would be great if you shared them too into this Google
        Drive.
      </Text>
    ),
  },
  {
    q: "My question hasn't been answered. How can I contact you about them?",
    a: (
      <Text>
        Definitely! It would be great if you shared them too into this Google
        Drive.
      </Text>
    ),
  },
];

export default function QnASection(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.sm">
        <VStack fontWeight={400} textAlign="left" gap="1em">
          <SectionHeading>{props.name}</SectionHeading>
          {QnAs.map((item, idx) => (
            <VStack key={idx}>
              <SectionSubHeading>{item.q}</SectionSubHeading>
              {item.a}
            </VStack>
          ))}
        </VStack>
      </Container>
    </Section>
  );
}
