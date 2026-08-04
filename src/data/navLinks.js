export const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    dropdown: true,
    children: [
      { title: "Air Charter", path: "/services/air-charter" },
      { title: "Defence Logistics", path: "/services/defence" },
      { title: "Aviation Refueling", path: "/services/refueling" },
      { title: "Cargo Handling", path: "/services/cargo-handling" },
      { title: "DGR Cargo", path: "/services/dgr" },
      { title: "Ground Handling", path: "/services/ground-handling" },
      { title: "Transportation", path: "/services/transportation" },
    ],
  },
  {
    title: "Fleet",
    path: "/fleet",
  },
  {
    title: "Team",
    path: "/team",
  },
  {
    title: "Network",
    path: "/network",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];