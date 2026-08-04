import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, ChevronDown } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 34, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

const highlightWords = ["Excellence", "in", " Aviation,"];

const wordContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.5 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 24, rotate: -4 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { type: "spring", stiffness: 220, damping: 16 },
  },
};

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden -mt-7">
      {/* Background image, slow continuous ken-burns drift */}
      {/* Background video, slow continuous ken-burns drift */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <motion.video
          autoPlay
          muted
          loop
          playsInline
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="h-full w-full object-cover"
          src="/images/bgvid.mp4"
          poster="/images/hero/hero-bg.png"
        />
      </motion.div>

      {/* Dark blue overlay, fades in over the settling image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/75 to-primary/20"
      />

      {/* Floating glow accents for depth */}
      <motion.div
        aria-hidden
        animate={{ y: [0, -24, 0], opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-success/30 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.35, 0.2] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="pointer-events-none absolute bottom-10 right-1/3 h-64 w-64 rounded-full bg-primary/40 blur-3xl"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-8"
      >
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.span
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-success px-5 py-2 text-sm font-semibold text-white shadow-lg"
          >
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-white"
            />
            Trusted Since 1990
          </motion.span>

          {/* Heading */}
          <h1 className="mt-8 font-heading text-5xl font-bold leading-tight text-white lg:text-7xl">
            <motion.span variants={lineVariants} className="block">
              35+ Years of
            </motion.span>

            <motion.span
              variants={wordContainer}
              initial="hidden"
              animate="visible"
              className="block text-success"
            >
              {highlightWords.map((word, i) => (
                <motion.span
                  key={word + i}
                  variants={wordVariants}
                  className="mr-3 inline-block last:mr-0"
                >
                  {word}
                </motion.span>
              ))}
            </motion.span>

            <motion.span variants={lineVariants} className="block">
              Logistics & Travel
            </motion.span>
          </h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-8 text-white/85"
          >
            Air Shagoon Group delivers trusted aviation, travel, defence, and
            logistics solutions across India. From air charter services and
            travel management to aviation refueling, dangerous goods handling,
            and ground support, we ensure safe, reliable, and mission-critical
            operations.
          </motion.p>

          {/* Buttons */}
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-5">
            {/* Primary Button */}
            <motion.button
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-secondary hover:shadow-2xl"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
              <span className="relative">Request a Quote</span>
              <motion.span
                className="relative"
                animate={{ x: [0, 4, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>

            {/* Secondary Button */}
            <motion.button
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="flex items-center gap-2 rounded-xl border-2 border-white bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-secondary"
            >
              <motion.span
                animate={{ rotate: [0, -12, 12, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
              >
                <PhoneCall size={18} />
              </motion.span>
              Contact Operations
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-white/70"
        >
          {/* <span className="text-xs font-medium uppercase tracking-[3px]">Scroll</span> */}
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
