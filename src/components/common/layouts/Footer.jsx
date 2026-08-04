import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { ArrowRight, PhoneCall, MapPin, Mail, Phone } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const serviceList = [
  "Air Charter Services",
  "Defence & Aerospace Logistics",
  "Aviation Refueling",
  "DGR & Forbidden Cargo",
  "Ground Handling",
];

const socials = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const columnContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const column = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const listItem = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

const Footer = () => {
  return (
    <footer className="overflow-hidden bg-secondary text-white">
      {/* CTA Section */}
      <section className="relative">
        {/* Ambient glow drifting behind the CTA copy */}
        <motion.div
          aria-hidden
          animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-success/30 blur-3xl"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={columnContainer}
          className="relative mx-auto max-w-7xl px-6 py-24 text-center"
        >
          <motion.span
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 rounded-full bg-success px-5 py-2 text-sm font-semibold text-white"
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
            Let's Work Together
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-6 font-heading text-4xl font-bold lg:text-5xl"
          >
            Ready to Move Your Cargo
            <span className="block text-success">With Confidence?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80"
          >
            Air Shagoon Group delivers trusted aviation, travel, defence, and
            logistics solutions across India, offering air charter, travel
            management, refueling, ground support, and dangerous goods handling.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap justify-center gap-5"
          >
            <motion.button
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-lg transition-colors duration-300 hover:bg-secondary hover:shadow-xl"
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

            <motion.button
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="flex items-center gap-2 rounded-xl border border-white bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-secondary"
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
        </motion.div>
      </section>

      {/* Main Footer */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={columnContainer}
        className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4"
      >
        {/* Company */}
        <motion.div variants={column}>
          <p className="mt-6 leading-7 text-white/70">
            Air Shagoon Group has been delivering trusted aviation, defence and
            logistics solutions for over 35 years, serving government, military
            and commercial sectors.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={column}>
          <h3 className="font-heading text-xl font-semibold text-success">
            Quick Links
          </h3>

          <motion.ul variants={columnContainer} className="mt-6 space-y-4">
            {quickLinks.map((item) => (
              <motion.li key={item.name} variants={listItem}>
                <a
                  href={item.href}
                  className="group inline-flex items-center gap-1 text-white/70 transition-colors duration-300 hover:text-success"
                >
                  <span className="relative">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-success transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Services */}
        <motion.div variants={column}>
          <h3 className="font-heading text-xl font-semibold text-success">
            Services
          </h3>

          <motion.ul variants={columnContainer} className="mt-6 space-y-4">
            {serviceList.map((service) => (
              <motion.li
                key={service}
                variants={listItem}
                className="text-white/70 transition-colors duration-300 hover:text-white"
              >
                {service}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Contact */}
        <motion.div variants={column}>
          <h3 className="font-heading text-xl font-semibold text-success">
            Contact Us
          </h3>

          <motion.div variants={columnContainer} className="mt-6 space-y-5">
            <motion.div variants={listItem} className="flex items-start gap-3">
              <MapPin className="mt-1 text-success" size={20} />
              <span className="text-white/70">New Delhi, India</span>
            </motion.div>

            <motion.div variants={listItem} className="flex items-center gap-3">
              <Phone className="text-success" size={20} />
              <span className="text-white/70">+91 XXXXX XXXXX</span>
            </motion.div>

            <motion.div variants={listItem} className="flex items-center gap-3">
              <Mail className="text-success" size={20} />
              <span className="text-white/70">info@airshagoon.com</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="border-t border-white/15"
      >
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 lg:flex-row">
          <p className="text-sm text-white/60">
            © 2026 Air Shagoon Group. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 320, damping: 16 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors duration-300 hover:border-success hover:bg-success hover:text-secondary"
              >
                <Icon />
              </motion.a>
            ))}
          </div>

          {/* Policies */}
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-white/60 transition-colors duration-300 hover:text-success"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-white/60 transition-colors duration-300 hover:text-success"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
