const currentDate = new Date();
const year = currentDate.getFullYear();

export const Admission = [
  { name: "Fees Structure", link: './feeStructure.html' },
  { name: `Admission ${year}`, link: "#" },
];

export const Miscellaneous = [
  { name: "Ordinances", link: "#" },
  { name: "Grievance", link: "#" },
  { name: "Faculty Profile", link: "#" },
  { name: "Staff Profile", link: "#" },
  { name: "Video Channel", link: "#" },
  { name: "NSS", link: "#" },
];

export const Downloads = [
  { name: "Academic Calendar", link:"../src/assest/Academic_Calendar.pdf", isDownload:true },
  {
    name: "Syllabus",
    link: "./syllabus.html",
  },
];

export const DigitalLibrary = [
  { name: "SWAYAM MOOCs", link: "#" },
  { name: "NPTEL", link: "#" },
];

export const Icons = [
  { name: "facebook", link: "#" },
  { name: "twitter", link: "#" },
  { name: "instagram", link: "#" },
  { name: "linkedin", link: "#" },
  { name: "youtube", link: "#" },
];
