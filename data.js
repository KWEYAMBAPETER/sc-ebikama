// ============================================================
// SC EBIKAMA — SITE DATA & FIXTURES
// ============================================================
// Edit this file to update committee members, gallery items,
// and other content across the site.
// ============================================================

export const SITE = {
  name: "SC Ebikama",
  tagline: "Strength. Unity. Community.",
  description:
    "SC Ebikama is a community-driven sports club bringing together players, supporters, and friends. We compete with passion and stand united on and off the pitch.",
  donateUrl: "https://eversend.me/kspeter",
  designer: {
    name: "KWEYAMBA PETER",
    url: "https://peterkweyamba.netlify.app/",
  },
  contact: {
    email: "info@scebikama.org",
    phone: "+256 700 000 000",
    address: "Kampala, Uganda",
  },
  social: {
    facebook: "#",
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },
};

// Committee table — edit, add, or remove members here.
export const COMMITTEE = [
  { role: "Chairman", name: "John Mukasa", contact: "+256 700 111 111" },
  { role: "Vice Chairman", name: "David Okello", contact: "+256 700 222 222" },
  { role: "Secretary", name: "Sarah Namutebi", contact: "+256 700 333 333" },
  { role: "Treasurer", name: "Michael Ssenyonga", contact: "+256 700 444 444" },
  { role: "Team Manager", name: "Robert Byaruhanga", contact: "+256 700 555 555" },
  { role: "PRO", name: "Aisha Nabukenya", contact: "+256 700 666 666" },
  { role: "Welfare Officer", name: "Joseph Lwanga", contact: "+256 700 777 777" },
  { role: "Technical Director", name: "Emuel Kakoma", contact: "+256 700 888 888" },
];

// Gallery — replace placeholder paths with your own photo paths.
// Put photos in the /images folder and update the src values below.
export const GALLERY = [
  { src: "images/gallery-1.jpg", alt: "Team in action", caption: "Match Day" },
  { src: "images/gallery-2.jpg", alt: "Team celebration", caption: "Victory Celebration" },
  { src: "images/gallery-3.jpg", alt: "Training session", caption: "Training Session" },
  { src: "images/gallery-4.jpg", alt: "Team photo", caption: "Team Photo" },
  { src: "images/gallery-5.jpg", alt: "Community outreach", caption: "Community Outreach" },
  { src: "images/gallery-6.jpg", alt: "Trophy moment", caption: "Trophy Moment" },
  { src: "images/gallery-7.jpg", alt: "Fans cheering", caption: "Fans Support" },
  { src: "images/gallery-8.jpg", alt: "Club event", caption: "Club Event" },
];

// Recent fixtures / upcoming matches — update as needed.
export const FIXTURES = [
  {
    date: "2026-10-05",
    opponent: "Riverside FC",
    venue: "Home — Ebikama Grounds",
    time: "15:00",
    status: "upcoming",
  },
  {
    date: "2026-10-12",
    opponent: "United Stars",
    venue: "Away — Star Stadium",
    time: "14:00",
    status: "upcoming",
  },
  {
    date: "2026-10-19",
    opponent: "Kampala Eagles",
    venue: "Home — Ebikama Grounds",
    time: "16:00",
    status: "upcoming",
  },
  {
    date: "2026-09-21",
    opponent: "Highland FC",
    venue: "Away — Highland Park",
    time: "15:00",
    status: "finished",
    result: "2 - 1 Win",
  },
  {
    date: "2026-09-14",
    opponent: "City Rovers",
    venue: "Home — Ebikama Grounds",
    time: "15:00",
    status: "finished",
    result: "3 - 0 Win",
  },
  {
    date: "2026-09-07",
    opponent: "Garden United",
    venue: "Away — Garden Arena",
    time: "14:00",
    status: "finished",
    result: "1 - 1 Draw",
  },
];
