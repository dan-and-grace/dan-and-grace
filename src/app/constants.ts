import { getDatetime } from "./datetime-utils";

const date = "2025-05-10";
export const weddingDate = "Saturday 10th May 2025";
export const donationHref =
  "https://www.justgiving.com/page/dan-and-grace-wedding";

export const rsvp = {
  deadline: "15th March 2025",
  link: "https://forms.gle/xnhnirVif6jdzAeP9",
};

interface Location {
  name: string;
  address: string;
  googleMapsUrl: string;
  image: string;
}

const churchLocation = {
  name: "Sacred Heart Catholic Church",
  address: "99 Carlton Hill, Carlton, Nottingham NG4 1FP",
  googleMapsUrl: "https://maps.app.goo.gl/mWaN1A2ANPjMHGgT6",
  image: "church.svg",
};

const receptionLocation = {
  name: "Richard Herrod Centre",
  address: "Foxhill Rd, Carlton, Nottingham NG4 1RL",
  googleMapsUrl: "https://maps.app.goo.gl/zvSumVdHfDPBo7PL6",
  image: "richard_herrod.svg",
};

export const ceremony = {
  event: "Ceremony",
  time: getDatetime(date, "12:00:00"),
  location: churchLocation,
  description: "Join us for our convalidation ceremony.",
  link: { label: "Ceremony program coming soon!" },
};

export const reception = {
  event: "Reception",
  location: receptionLocation,
};

interface ScheduleItem {
  event: string;
  time: Date;
  location: Location;
  description: string;
  link?: { label: string };
}

export const schedule: ScheduleItem[] = [
  ceremony,
  {
    event: "Photo-taking & Reception begins",
    time: getDatetime(date, "13:00:00"),
    location: receptionLocation,
    description:
      "Slowly make your way to the our reception venue. Catchup with your loved ones and grab yourself a drink when you get there!",
  },
  {
    event: "Lunch",
    time: getDatetime(date, "14:00:00"),
    location: receptionLocation,
    description:
      "Lunch is served! Please be sure to let us know your dietary requirements when you RSVP!",
    link: { label: "Menu preview coming soon!" },
  },
  {
    event: "Cake & Speeches",
    time: getDatetime(date, "15:00:00"),
    location: receptionLocation,
    description:
      "Help yourself to cake while you listen to us waffle. This might be a long one, make sure you're comfortable!",
  },
  {
    event: "Activities (TBD)",
    time: getDatetime(date, "16:00:00"),
    location: receptionLocation,
    description:
      "We are still in the process of planning the details for this part, but there will definitely be a chance to dance the afternoon away, or simply connect with friends and family and enjoy the music.",
  },
  {
    event: "Winding down & goodbyes",
    time: getDatetime(date, "18:00:00"),
    location: receptionLocation,
    description:
      "It's been a long day! You're probably as exhausted as we are. Thank you all for coming! Have a great rest of the day whether it will entail a fancy dinner out, a cheeky takeaway, TV-watching, or simply the comfort of returning home and being out of your fancy clothes.",
  },
  {
    event: "The End",
    time: getDatetime(date, "18:30:00"),
    location: receptionLocation,
    description:
      "We wish everyone a happily ever after. This is where we say our final goodbyes and pack up. Hopefully we will see each of you soon whenever that might be!",
  },
];

export const navigationPathItems: Record<string, string> = {
  "Info & RSVP": "/#details",
  Schedule: "/schedule",
  Travel: "/travel",
  Accomodation: "/accomodation",
  "Nottingham Guide": "/nottingham-guide",
  FAQS: "/faqs",
};
