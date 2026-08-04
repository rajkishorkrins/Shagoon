import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "../../data/services";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
};

// -----------------------------------------------------------------------
// One service row — image reveals via clip-path wipe, content slides in,
// numeral badge pops with a spring. Alternates side left/right by index.
// -----------------------------------------------------------------------
function ServiceRow({ service, index }) {
    const Icon = service.icon;
    const reversed = index % 2 === 1;

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="group relative py-16 first:pt-0"
        >
            <div
                className={`flex flex-col gap-10 lg:items-center ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
            >
                {/* Image panel — clip-path wipe reveal */}
                <div className="relative w-full lg:w-[45%]">
                    <motion.div
                        variants={{
                            hidden: {
                                clipPath: reversed
                                    ? "inset(0 0 0 100%)"
                                    : "inset(0 100% 0 0)",
                            },
                            visible: {
                                clipPath: "inset(0 0% 0 0%)",
                                transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                            },
                        }}
                        className="relative h-72 overflow-hidden rounded-3xl lg:h-96"
                    >
                        <motion.img
                            src={service.image}
                            alt={service.title}
                            initial={{ scale: 1.25 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.35 }}
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/0 to-transparent" />

                        {/* Numeral badge, springs in after the wipe finishes */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.4, rotate: -20 },
                                visible: {
                                    opacity: 1,
                                    scale: 1,
                                    rotate: 0,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 16,
                                        delay: 0.55,
                                    },
                                },
                            }}
                            className="absolute bottom-5 left-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-success text-lg font-bold text-white shadow-lg"
                        >
                            {String(index + 1).padStart(2, "0")}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Connector line + icon, desktop only */}
                <div className="relative hidden shrink-0 lg:flex lg:w-16 lg:items-center lg:justify-center">
                    <motion.span
                        variants={{
                            hidden: { scaleY: 0 },
                            visible: {
                                scaleY: 1,
                                transition: { duration: 0.7, delay: 0.3, ease: "easeOut" },
                            },
                        }}
                        className="absolute h-full w-px origin-top bg-gradient-to-b from-success/60 via-secondary/15 to-transparent"
                    />
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, scale: 0 },
                            visible: {
                                opacity: 1,
                                scale: 1,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 14,
                                    delay: 0.5,
                                },
                            },
                        }}
                        className="relative flex h-11 w-11 items-center justify-center rounded-full border-2 border-success bg-white shadow-md"
                    >
                        <Icon size={18} className="text-primary" />
                    </motion.div>
                </div>

                {/* Content panel */}
                <motion.div
                    variants={{
                        hidden: { opacity: 0, x: reversed ? -40 : 40 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                        },
                    }}
                    className="relative w-full lg:w-[45%]"
                >
                    <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[3px] text-success">
                        <span className="h-px w-6 bg-success" />
                        Service {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-4 font-heading text-3xl font-bold text-secondary transition-colors duration-300 group-hover:text-primary lg:text-4xl">
                        {service.title}
                    </h3>

                    <p className="mt-5 max-w-xl leading-8 text-dark/70">
                        {service.description}
                    </p>

                    <motion.button
                        whileHover={{ x: 6 }}
                        whileTap={{ scale: 0.96 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="group/btn mt-7 flex items-center gap-2 font-semibold text-primary transition-colors duration-300 hover:text-success"
                    >
                        Learn More
                        <motion.span
                            className="flex"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ArrowRight size={18} />
                        </motion.span>
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}

const Services = () => {
    const sectionRef = useRef(null);

    // Scroll-linked progress rail that fills as the user scrolls through
    // the whole section.
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 0.8", "end 0.2"],
    });
    const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={sectionRef} className="relative overflow-hidden bg-white py-24">
            {/* Ambient background accents */}
            <motion.div
                aria-hidden
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -left-32 top-40 h-96 w-96 rounded-full bg-success/10 blur-3xl"
            />
            <motion.div
                aria-hidden
                animate={{ opacity: [0.1, 0.22, 0.1], scale: [1, 1.15, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="pointer-events-none absolute -right-24 bottom-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-6xl px-6">
                {/* Heading */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="text-sm font-semibold uppercase tracking-[4px] text-success">
                        What We Do
                    </span>

                    <h2 className="mt-4 font-heading text-4xl font-bold text-secondary lg:text-5xl">
                        Our Core Services
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-gray">
                        Delivering comprehensive aviation, defence and logistics
                        solutions across India with precision, safety, and reliability.
                    </p>
                </motion.div>

                {/* Rows with scroll-linked progress rail behind them */}
                <div className="relative mt-16">
                    {/* Static track */}
                    <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-secondary/10 lg:block" />
                    {/* Animated fill */}
                    <motion.div
                        style={{ height: railHeight }}
                        className="absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-success via-success/60 to-transparent lg:block"
                    />

                    {services.map((service, i) => (
                        <ServiceRow key={service.title} service={service} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;