import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Our Fleet", href: "/fleet" },
  { title: "Our Team", href: "/team" },
  { title: "Global Network", href: "/network" },
  { title: "Contact Us", href: "/contact" },
];

const socialLinks = [
  { icon: FaFacebookF, href: "#" },
  { icon: FaLinkedinIn, href: "#" },
  { icon: FaInstagram, href: "#" },
];

const offices = [
  {
    title: "New Delhi",
    tag: "Head Office",
    addresses: [
      "C-37, Hauz Khas, New Delhi – 110016, India.",
      "705, DLF South Court, District Centre, Saket, New Delhi – 110017, India.",
      "103, Tolstoy House, Tolstoy Marg, Connaught Place, New Delhi – 110001, India.",
    ],
    phone: { label: "+91 11 49081111", href: "tel:+911149081111" },
    email: { label: "info@airshagoon.com", href: "mailto:info@airshagoon.com" },
  },
  {
    title: "Mumbai",
    tag: "Branch Office",
    addresses: [
      "Flat No. 202, A Wing, 2nd Floor, Koldangri CHS, Parsiwada, Sahar Road, Andheri (East), Mumbai – 400099, India.",
    ],
    phone: { label: "+91 22 28227706", href: "tel:+912228227706" },
    email: {
      label: "airshagoonbom@gmail.com",
      href: "mailto:airshagoonbom@gmail.com",
    },
  },
];

export default function Footer() {
  return (
    <footer className="relative flex min-h-[400px] flex-col overflow-hidden bg-secondary">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-primary/15 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-[450px] w-[450px] rounded-full bg-accent/10 blur-[170px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_2.1fr]">
          {/* Brand + nav */}
          <div>
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Quick Navigation
            </span>

            <h2 className="mt-3 font-heading text-2xl font-bold text-white">
              Air Shagoon
            </h2>

            <p className="mt-1 text-sm text-white/60">
              Aviation & Aerospace Group
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-1 lg:grid-cols-1">
              {quickLinks.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    className="group flex items-center justify-between rounded-xl border border-transparent px-3 py-2 text-sm text-white/70 transition-all duration-300 hover:border-white/10 hover:bg-white/5 hover:text-accent"
                  >
                    {item.title}
                    <FaArrowRight
                      size={12}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Offices */}
          <div>
            <div className="text-right">
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Contact Information
              </span>

              <h2 className="mt-3 font-heading text-2xl font-bold text-white">
                Our Offices
              </h2>

              <p className="mt-1 text-sm text-white/60">
                Reach our aviation specialists across India.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {offices.map((office) => (
                <address
                  key={office.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 not-italic shadow-lg shadow-black/20 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:bg-white/[0.05]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/20 text-white">
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-white">
                        {office.title}
                      </h3>
                      <p className="text-xs text-white/60">{office.tag}</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2 text-xs leading-6 text-white/70">
                    {office.addresses.map((line, i) => (
                      <p key={i} className="flex items-start gap-2">
                        <FaArrowRight
                          className="mt-1 shrink-0 text-white/40"
                          size={9}
                        />
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <FaPhoneAlt
                        className="shrink-0 text-white/70"
                        size={12}
                      />
                      <a
                        href={office.phone.href}
                        className="text-xs text-white/70 transition hover:text-white"
                      >
                        {office.phone.label}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaEnvelope
                        className="shrink-0 text-white/70"
                        size={12}
                      />
                      <a
                        href={office.email.href}
                        className="truncate text-xs text-white/70 transition hover:text-white"
                      >
                        {office.email.label}
                      </a>
                    </div>
                  </div>
                </address>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 pt-5 text-sm md:flex-row">
          <p className="text-white/60">
            © {new Date().getFullYear()} Air Shagoon Group. All Rights Reserved.
          </p>

          <div className="flex items-center gap-8">
            <a
              href="/privacy-policy"
              className="text-white/60 transition hover:text-accent"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-white/60 transition hover:text-accent"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
