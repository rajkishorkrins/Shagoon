// Solution.jsx
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
    Package,
    Truck,
    Fuel,
    Crown,
    ShieldHalf,
    PlaneLanding,
    HeartHandshake,
    ShieldCheck,
    Plane,
} from "lucide-react";

const SERVICES = [
    {
        icon: Package,
        title: "Cargo Charters",
        description:
            "Flexible, reliable freight solutions tailored to your cargo needs and deadlines.",
    },
    {
        icon: Truck,
        title: "Ground Handling",
        description:
            "End-to-end ground support to ensure seamless turnarounds at airports worldwide.",
    },
    {
        icon: ShieldCheck,
        title: "DGR / Forbidden Cargo",
        description:
            "Strict adherence to safety and regulatory requirements for restricted shipments.",
    },
    {
        icon: HeartHandshake,
        title: "Flight Support",
        description:
            "Operational coordination, route planning, and real-time assistance.",
    },
    {
        icon: Fuel,
        title: "Aircraft Refueling",
        description: "Efficient, on-time fuel services with utmost safety and compliance.",
    },
    {
        icon: Crown,
        title: "VIP / Private Charters",
        description:
            "Discreet, personalized travel with the highest standards of comfort.",
    },
    {
        icon: ShieldHalf,
        title: "Military OPS",
        description: "Dedicated solutions for secure, mission-critical aviation support.",
    },
    // {
    //     icon: PlaneLanding,
    //     title: "Landing Permissions",
    //     description:
    //         "Expert navigation of regulatory processes to secure timely access.",
    // },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
};

const tileVariants = {
    hidden: { opacity: 0, y: 24, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
};

function Tile({ icon: Icon, title, description }) {
    return (
        <motion.div
            variants={tileVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl"
        >
            {/* Accent corner that grows on hover */}
            <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-success/10 transition-transform duration-500 ease-out group-hover:scale-[3.5]" />

            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon size={20} strokeWidth={1.75} />
            </div>

            <div className="relative mt-5">
                <h3 className="font-heading text-base font-semibold text-secondary">
                    {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-dark/60">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}

function Solution() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-light py-24">
            {/* Header */}
            <div className="mx-auto max-w-2xl px-6 text-center">
                <span className="text-sm font-semibold uppercase tracking-[4px] text-success">
                    How We Do
                </span>
                <h2 className="mt-3 font-heading text-4xl font-bold text-secondary md:text-5xl">
                    Our Aviation Solutions
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray md:text-lg">
                    Discover a complete suite of aviation solutions delivering safe,
                    reliable and world-class operations across the globe.
                </p>
            </div>

            {/* Bento grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                {/* First 4 tiles */}
                {SERVICES.slice(0, 4).map((service) => (
                    <Tile key={service.title} {...service} />
                ))}

                {/* Center hub — spans 1 col x 2 rows on desktop */}
                <motion.div
                    variants={tileVariants}
                    className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl p-8 text-center shadow-lg lg:row-span-2"
                >
                    {/* Background image */}
                    <img
                        src="/images/solution.png"
                        alt=""
                        aria-hidden
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    {/* Dark overlay so text/rings stay readable */}
                    {/* <div className="absolute inset-0 bg-secondary/85" /> */}

                    {/* Pulsing rings */}
                    <motion.span
                        aria-hidden
                        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute h-28 w-28 rounded-full border border-success/40"
                    />
                    <motion.span
                        aria-hidden
                        animate={{ scale: [1, 1.9, 1], opacity: [0.25, 0, 0.25] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                        className="absolute h-28 w-28 rounded-full border border-success/30"
                    />

                    {/* Floating icon/badge */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-success shadow-lg"
                    >
                        <Plane size={28} className="-rotate-45 text-white" strokeWidth={1.75} />
                    </motion.div>

                    <p className="relative mt-6 font-heading text-3xl font-bold text-white">
                        35+
                    </p>
                    <p className="relative mt-1 text-xs font-semibold uppercase tracking-[2px] text-success">
                        Years in Aviation
                    </p>

                    <div className="relative mt-6 h-px w-12 bg-white/15" />

                    <p className="relative mt-6 font-heading text-3xl font-bold text-white">
                        7+
                    </p>
                    <p className="relative mt-1 text-xs font-semibold uppercase tracking-[2px] text-success">
                        Core Services
                    </p>
                </motion.div>

                {/* Last 4 tiles */}
                {SERVICES.slice(4).map((service) => (
                    <Tile key={service.title} {...service} />
                ))}
            </motion.div>
        </section>
    );
}

export default Solution;