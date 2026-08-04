import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  "Air Charter",
  "Defence Logistics",
  "Aviation Refueling",
  "Cargo Handling",
  "DGR Cargo",
  "Ground Handling",
  "Surface Transportation",
  "Travel",
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
];

const navLinksAfterServices = [
  { label: "Our Fleet", href: "/fleet" },
  { label: "Our Team", href: "/team" },
  { label: "Global Network", href: "/network" },
  { label: "Contact Us", href: "/contact" },
];

// Underlined nav link used across the desktop menu — the underline grows
// from the center on hover instead of just a color swap.
function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="group relative font-heading font-medium text-primary transition hover:text-accent"
    >
      {children}
      <span className="absolute -bottom-1 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

const mobilePanelVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.3, ease: [0.4, 0, 1, 1] },
  },
};

const mobileListVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
  },
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Subtle shadow/height tightening once the page has scrolled a bit,
  // so the bar feels responsive rather than just permanently fixed.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 w-full border-b border-slate-200 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-24" : "h-32"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center">
          <motion.img
            src="/images/logo1.png"
            alt="Air Shagoon Group"
            animate={{ height: scrolled ? "6.5rem" : "7rem" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-auto max-w-none"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <button className="group flex items-center gap-1 font-heading font-medium text-primary transition hover:text-accent">
              Services
              <motion.span
                animate={{ rotate: serviceOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
              >
                <ChevronDown size={18} />
              </motion.span>
            </button>

            <AnimatePresence>
              {serviceOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 mt-4 w-72 origin-top rounded-xl border border-slate-200 bg-white py-3 shadow-xl"
                >
                  {services.map((service, i) => (
                    <motion.a
                      key={service}
                      href="#"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: i * 0.03 }}
                      className="block px-5 py-3 text-sm text-slate-700 transition hover:bg-primary hover:text-white"
                    >
                      {service}
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinksAfterServices.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:block">
          <motion.button
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
            className="rounded-lg bg-primary px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-secondary"
          >
            Request Quote
          </motion.button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative h-8 w-8 lg:hidden"
          aria-label="Toggle menu"
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {mobileOpen ? (
                <X size={30} className="text-primary" />
              ) : (
                <Menu size={30} className="text-primary" />
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            variants={mobilePanelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden border-t bg-white lg:hidden"
          >
            <motion.nav
              variants={mobileListVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col p-6"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={mobileItemVariants}
                  className="py-3 font-medium text-primary"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div variants={mobileItemVariants} className="py-3">
                <button
                  onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                  className="flex w-full items-center justify-between font-medium text-primary"
                >
                  Services
                  <motion.span
                    animate={{ rotate: mobileServiceOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileServiceOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="ml-4 mt-2 flex flex-col overflow-hidden"
                    >
                      {services.map((service) => (
                        <a
                          key={service}
                          href="#"
                          className="py-2 text-slate-600 transition hover:text-primary"
                        >
                          {service}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {navLinksAfterServices.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  variants={mobileItemVariants}
                  className="py-3 font-medium text-primary"
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.button
                variants={mobileItemVariants}
                whileTap={{ scale: 0.96 }}
                className="mt-5 rounded-lg bg-primary py-3 text-white"
              >
                Request Quote
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
