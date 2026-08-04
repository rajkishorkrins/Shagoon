// aviationServices.js
// ---------------------------------------------------------------------------
// Single source of truth for the 8 services shown in the Solution section.
// `anchor` is a normalised 0-1 vertical position used by Solution.jsx to
// place each card and its connector line (0 = top of stage, 1 = bottom).
// ---------------------------------------------------------------------------

import {
    Truck,
    ShieldCheck,
    HeartHandshake,
    PlaneLanding,
    Briefcase,
    Fuel,
    Crown,
    ShieldHalf,
} from "lucide-react";

export const LEFT_SERVICES = [
    {
        id: "ground-handling",
        side: "left",
        anchor: 0.08,
        icon: Truck,
        title: "Ground Handling",
        desc: "End-to-end ground support to ensure seamless turnarounds at airports worldwide.",
    },
    {
        id: "dgr-compliance",
        side: "left",
        anchor: 0.36,
        icon: ShieldCheck,
        title: "DGR/Forbidden Cargo Compliance",
        desc: "Strict adherence to safety and regulatory requirements for dangerous goods and restricted shipments.",
    },
    {
        id: "flight-support",
        side: "left",
        anchor: 0.64,
        icon: HeartHandshake,
        title: "Flight Support Services",
        desc: "Operational coordination, route planning, and real-time assistance for smooth voyages.",
    },
    {
        id: "landing-permissions",
        side: "left",
        anchor: 0.92,
        icon: PlaneLanding,
        title: "Landing Permissions",
        desc: "Expert navigation of regulatory processes to secure timely access for your missions.",
    },
];

export const RIGHT_SERVICES = [
    {
        id: "cargo-charters",
        side: "right",
        anchor: 0.08,
        icon: Briefcase,
        title: "Cargo Charters",
        desc: "Flexible, reliable freight solutions tailored to your cargo needs and deadlines.",
    },
    {
        id: "aircraft-refueling",
        side: "right",
        anchor: 0.36,
        icon: Fuel,
        title: "Aircraft Refueling",
        desc: "Efficient, on-time fuel services with utmost safety and compliance.",
    },
    {
        id: "vip-charters",
        side: "right",
        anchor: 0.64,
        icon: Crown,
        title: "VIP/Private Charters",
        desc: "Discreet, personalized travel experiences with the highest standards of comfort and security.",
    },
    {
        id: "military-ops",
        side: "right",
        anchor: 0.92,
        icon: ShieldHalf,
        title: "Military OPS",
        desc: "Dedicated solutions for secure, mission-critical aviation support.",
    },
];

// Interleaved order used for the mobile single-column stack, so it reads
// top-to-bottom the way the desktop stage does (left/right pairs together)
// rather than all of the left column followed by all of the right column.
export const aviationServices = LEFT_SERVICES.flatMap((left, i) => [
    left,
    RIGHT_SERVICES[i],
]);
