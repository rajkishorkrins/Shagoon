import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Globe2, ArrowUpRight } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
};

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.14, delayChildren: 0.1 },
    },
};

const leaders = [
    {
        name: "Late Mr Anurag Birla",
        role: "Founder",
        note: "Laid the foundation of Air Shagoon's aviation legacy in 1990.",
        image: "/images/founder.png",
    },
    {
        name: "Mr Rishabh Birla",
        role: "Managing Director",
        note: "Leads day-to-day operations across civil and military aviation.",
        image: "/images/mag.png",
    },
];

function LeaderRow({ leader, index }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="group relative flex items-center gap-6 border-b border-secondary/10 py-10 first:pt-0 last:border-b-0 sm:gap-8"
        >
            {/* Rail node */}
            <span className="absolute -left-[41px] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-success bg-white lg:block" />

            {/* Portrait — clip-path wipe reveal */}
            <div className="relative w-28 shrink-0 sm:w-32">
                <motion.div
                    variants={{
                        hidden: { clipPath: "inset(0 100% 0 0)" },
                        visible: {
                            clipPath: "inset(0 0% 0 0)",
                            transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
                        },
                    }}
                    className="relative aspect-[3/4] overflow-hidden rounded-2xl"
                >
                    <motion.img
                        src={leader.image}
                        alt={leader.name}
                        initial={{ scale: 1.3 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/0 to-transparent" />

                    {/* Hover overlay */}
                    <span className="absolute inset-0 flex origin-bottom scale-y-0 items-center justify-center bg-success/85 transition-transform duration-500 ease-out group-hover:scale-y-100">
                        <ArrowUpRight className="text-white" size={22} />
                    </span>

                    {/* Numeral badge, springs in after wipe */}
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
                                    delay: 0.5,
                                },
                            },
                        }}
                        className="absolute -bottom-3 -right-3 flex h-10 w-10 items-center justify-center rounded-xl bg-success text-sm font-bold text-white shadow-lg"
                    >
                        {String(index + 1).padStart(2, "0")}
                    </motion.div>
                </motion.div>
            </div>

            {/* Text */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
                    },
                }}
                className="min-w-0 flex-1"
            >
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[2.5px] text-success">
                    <span className="h-px w-5 bg-success" />
                    {leader.role}
                </span>
                <p className="mt-2 font-heading text-xl font-bold text-secondary transition-colors duration-300 group-hover:text-primary sm:text-2xl">
                    {leader.name}
                </p>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-dark/60">
                    {leader.note}
                </p>
            </motion.div>
        </motion.div>
    );
}

const LeaderShip = () => {
    const listRef = useRef(null);

    // Scroll-linked rail fill running down the right column, matching
    // the Services section's connecting-line treatment.
    const { scrollYProgress } = useScroll({
        target: listRef,
        offset: ["start 0.75", "end 0.4"],
    });
    const railHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section className="relative overflow-hidden bg-white py-24">
            {/* Ambient accents, echoing the Services section */}
            <motion.div
                aria-hidden
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-success/10 blur-3xl"
            />
            <motion.div
                aria-hidden
                animate={{ opacity: [0.1, 0.22, 0.1], scale: [1, 1.15, 1] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                className="pointer-events-none absolute -left-24 bottom-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-6xl px-6">
                <div className="grid gap-14 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-20">
                    {/* ---------------------------------------------------- */}
                    {/* Left — sticky heading, quote, stat chips             */}
                    {/* ---------------------------------------------------- */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={containerVariants}
                        className="lg:sticky lg:top-28 lg:self-start"
                    >
                        <motion.span
                            variants={fadeUp}
                            className="text-sm font-semibold uppercase tracking-[4px] text-success"
                        >
                            Our Leadership
                        </motion.span>

                        <motion.h2
                            variants={fadeUp}
                            className="mt-4 font-heading text-4xl font-bold leading-tight text-secondary"
                        >
                            Three Decades of{" "}
                            <span className="text-primary">Trusted Excellence</span>
                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-5 text-base leading-7 text-gray"
                        >
                            With over three decades of experience, Air Shagoon combines
                            modern infrastructure with a dedicated team of professionals
                            across civil and military aviation.
                        </motion.p>

                        {/* Quote card */}
                        <motion.div
                            variants={fadeUp}
                            className="relative mt-8 rounded-2xl bg-light p-6"
                        >
                            <span className="absolute -left-1 top-4 h-8 w-1 rounded-full bg-success" />
                            <p className="font-heading text-base italic leading-relaxed text-secondary">
                                "Our commitment has always been to move what matters most,
                                safely and on time — every single time."
                            </p>
                        </motion.div>

                        {/* Stat chips */}
                        <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-3">
                            <motion.span
                                whileHover={{ y: -3 }}
                                className="inline-flex items-center gap-2 rounded-full border border-secondary/10 px-4 py-2 text-sm font-semibold text-secondary"
                            >
                                <Award size={15} className="text-primary" />
                                35+ Years
                            </motion.span>
                            <motion.span
                                whileHover={{ y: -3 }}
                                className="inline-flex items-center gap-2 rounded-full border border-secondary/10 px-4 py-2 text-sm font-semibold text-secondary"
                            >
                                <Globe2 size={15} className="text-primary" />
                                Global Network
                            </motion.span>
                            <motion.span
                                whileHover={{ y: -3 }}
                                className="inline-flex items-center gap-2 rounded-full bg-success px-4 py-2 text-sm font-semibold text-white"
                            >
                                Since 1990
                            </motion.span>
                        </motion.div>
                    </motion.div>

                    {/* ---------------------------------------------------- */}
                    {/* Right — vertical leader rows with scroll rail       */}
                    {/* ---------------------------------------------------- */}
                    <div ref={listRef} className="relative">
                        {/* Static track */}
                        <div className="absolute -left-10 top-0 hidden h-full w-px bg-secondary/10 lg:block" />
                        {/* Animated fill */}
                        <motion.div
                            style={{ height: railHeight }}
                            className="absolute -left-10 top-0 hidden w-px bg-gradient-to-b from-success via-success/60 to-transparent lg:block"
                        />

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={containerVariants}
                        >
                            {leaders.map((leader, i) => (
                                <LeaderRow key={leader.name} leader={leader} index={i} />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeaderShip;