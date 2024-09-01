import { Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { donationHref, rsvp, schedule } from "../constants";
import { formatAMPM } from "../datetime-utils";
import Link from "../components/link";

export const QnAs: {
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
        We have the venue booked until{" "}
        {formatAMPM(schedule[schedule.length - 1].time)}, please stay as long or
        as short as you&apos;d like!
      </Text>
    ),
  },
  {
    q: "What food will be served?",
    a: (
      <Text>
        We&apos;ll be having a meal at around 2pm! We will provide a preview of
        the menu at a closer date. We&apos;re sorry though that we won&apos;t be
        able to provide an evening meal.
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
      <Text>
        Instead of getting wedding presents, Dan and I would like to support
        Young Lives vs Cancer. Any amount of donation would be very much
        appreciated! Please donate via our{" "}
        <Link href={donationHref}>donation page</Link>.
      </Text>
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
    q: "How do I RSVP?",
    a: (
      <Text>
        You can RSVP by submitting <Link href={rsvp.link}>this form</Link> by{" "}
        the {rsvp.deadline}.
      </Text>
    ),
  },
  {
    q: "Can I update my RSVP response?",
    a: (
      <Text>
        Yes! You can update your response by making a new submission with{" "}
        <Link href={rsvp.link}>this form</Link> by the {rsvp.deadline}. We will
        take the latest version as the final version.
      </Text>
    ),
  },
  {
    q: "I still have a question not answered.",
    a: <Text>Please do not hesitate to contact us!</Text>,
  },
];
