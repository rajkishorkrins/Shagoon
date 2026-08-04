import {
    Plane,
    ShieldCheck,
    Fuel,
    PackageCheck,
    Wrench,
    Truck,
} from "lucide-react";

export const services = [
    {
        title: "Air Charter Services",
        image: "/images/services/air-charter.png",
        description:
            "Reliable passenger and cargo charter operations for domestic and international missions.",
        icon: Plane,
    },
    {
        title: "Defence & Aerospace Logistics",
        image: "/images/services/defence.png",
        description:
            "Mission-critical logistics support for defence, aerospace and government organizations.",
        icon: ShieldCheck,
    },
    {
        title: "Aviation Refueling",
        image: "/images/services/refuling.png",
        description:
            "PAN India aviation fuel supply with efficient turnaround support.",
        icon: Fuel,
    },
    {
        title: "DGR & Forbidden Cargo",
        image: "/images/services/inspection.png",
        description:
            "Certified dangerous goods handling with complete regulatory compliance.",
        icon: PackageCheck,
    },
    {
        title: "Ground Handling",
        image: "/images/services/loading.png",
        description:
            "Airport ground support including loading, permits and operational assistance.",
        icon: Wrench,
    },
];