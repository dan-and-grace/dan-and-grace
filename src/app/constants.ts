import { getDatetime } from "./datetime-utils";

export const navigationPathItems: Record<string, string> = {
  "Info & RSVP": "/#details",
  Schedule: "/schedule",
  Travel: "/travel",
  Accomodation: "/accomodation",
  "Nottingham Guide": "/nottingham-guide",
  FAQS: "/faqs",
};

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
  description: { text: "" },
  button: { label: "Ceremony program coming soon!" },
};

export const reception = {
  event: "Reception",
  location: receptionLocation,
};

interface ScheduleItem {
  event: string;
  time: Date;
  location: Location;
  description: { text: string; link?: string };
  button?: { label: string };
}

export const schedule: ScheduleItem[] = [
  ceremony,
  {
    event: "Photo-taking & journey to reception",
    time: getDatetime(date, "13:00:00"),
    location: receptionLocation,
    description: {
      text: "Learn how to get to there",
      link: navigationPathItems.Travel,
    },
  },
  {
    event: "Lunch & speeches",
    time: getDatetime(date, "14:00:00"),
    location: receptionLocation,
    description: {
      text:
        "Please be sure to let us know your dietary requirements when you RSVP!",
    },
    button: { label: "Menu preview coming soon!" },
  },
  {
    event: "Dancing",
    time: getDatetime(date, "16:00:00"),
    location: receptionLocation,
    description: { text: "Bring comfy shoes if you want to dance." },
  },
  {
    event: "The End",
    time: getDatetime(date, "18:30:00"),
    location: receptionLocation,
    description: {
      text: "Find out more things to do on your trip",
      link: navigationPathItems["Nottingham Guide"],
    },
  },
];
