import { useState, useEffect } from "react";
import logoImage from "@/imports/WhatsApp_Image_2026-07-16_at_12.24.59_PM__2_-1.jpeg";

// ─── Brand colors as JS constants for inline use where Tailwind can't ──────
const NAVY = "#0D1B3E";
const EMERALD = "#16A34A";
const MINT = "#22C55E";

// ─── Logo using actual brand image ─────────────────────────────────────────
function EduFinderLogo({ height = 48 }: { height?: number }) {
  return (
    <img
      src={logoImage}
      alt="EduFinder — Sahi Chuniye"
      style={{ height, width: "auto", display: "block", objectFit: "contain" }}
    />
  );
}

// ─── Nav ────────────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: "white",
        boxShadow: scrolled
          ? "0 2px 24px rgba(0,0,0,0.12)"
          : "0 1px 0 rgba(0,0,0,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <EduFinderLogo height={44} />
        <div className="hidden md:flex items-center gap-8">
          {["Services", "How It Works", "For Institutions", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm font-medium transition-colors"
                style={{ color: NAVY }}
                onMouseEnter={(e) => (e.currentTarget.style.color = EMERALD)}
                onMouseLeave={(e) => (e.currentTarget.style.color = NAVY)}
              >
                {item}
              </a>
            )
          )}
          <a
            href="#enquiry"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
            style={{ background: EMERALD, color: "white" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = MINT)}
            onMouseLeave={(e) => (e.currentTarget.style.background = EMERALD)}
          >
            Free Counseling
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, #162447 55%, #1a2f55 100%)`,
      }}
    >
      {/* Background texture dots */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Accent arcs */}
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: EMERALD }}
      />
      <div
        className="absolute top-20 -right-16 w-64 h-64 rounded-full opacity-5"
        style={{ background: MINT }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold mb-6"
              style={{ background: "rgba(22,163,74,0.15)", color: MINT, border: `1px solid rgba(34,197,94,0.3)` }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: MINT }}
              />
              FREE Career Counseling — Limited Slots!
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: "white",
              }}
            >
              Sahi Chuniye!{" "}
              <span style={{ color: MINT }}>Find the Perfect</span>{" "}
              Coaching Institute
            </h1>
            <p className="text-lg sm:text-xl mb-2 font-bold" style={{ color: MINT, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              for Your Bright Future.
            </p>

            <p className="mt-4 text-base sm:text-lg mb-10 leading-relaxed" style={{ color: "rgba(255,255,255,0.72)" }}>
              Personalized career counseling, admission support, and expert guidance to match you with top-rated coaching institutes — according to your criteria, budget, and location.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-base transition-all hover:scale-105"
                style={{ background: EMERALD, color: "white", boxShadow: `0 8px 32px rgba(22,163,74,0.4)` }}
              >
                📞 Book Free Career Counseling
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  color: "rgba(255,255,255,0.9)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                How It Works →
              </a>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-6">
              {[
                { icon: "🏆", label: "500+ Students Placed" },
                { icon: "⭐", label: "4.9/5 Satisfaction" },
                { icon: "🏛️", label: "50+ Partner Institutes" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2">
                  <span className="text-xl">{b.icon}</span>
                  <span className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + floating card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=560&h=680&fit=crop&auto=format"
                alt="Happy students with books ready for bright future"
                className="rounded-2xl object-cover w-full max-w-md shadow-2xl"
                style={{ height: 480 }}
              />
              {/* Overlay gradient at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 rounded-b-2xl"
                style={{
                  background: `linear-gradient(to top, ${NAVY}99, transparent)`,
                }}
              />

              {/* Floating card */}
              <div
                className="absolute -bottom-6 -left-6 rounded-2xl p-4 shadow-xl"
                style={{ background: "white", minWidth: 190 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                    style={{ background: "#DCFCE7" }}
                  >
                    🎓
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: NAVY }}>
                      Priya Sharma
                    </div>
                    <div className="text-xs" style={{ color: "#6B7280" }}>
                      IIT-JEE Aspirant
                    </div>
                  </div>
                </div>
                <div className="text-xs font-medium" style={{ color: EMERALD }}>
                  ✅ Admission secured at Allen, Kota
                </div>
              </div>

              {/* Top floating pill */}
              <div
                className="absolute -top-4 right-4 px-4 py-2 rounded-full text-xs font-bold shadow-lg"
                style={{ background: EMERALD, color: "white" }}
              >
                Your Trusted Partner
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 sm:h-14">
          <path d="M0 60L1440 0V60H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────────────────
const services = [
  {
    icon: "🧭",
    title: "Career Guidance",
    desc: "Identify the right academic stream and coaching path aligned to your aptitude, goals, and future prospects.",
    highlight: "1-on-1 Expert Session",
  },
  {
    icon: "🔍",
    title: "Criteria-Based Matching",
    desc: "We shortlist institutes based on your location, budget, batch timings, faculty track record, and past results.",
    highlight: "Personalised Shortlist",
  },
  {
    icon: "📋",
    title: "Admission Support",
    desc: "End-to-end documentation, fee negotiation, and direct enrollment assistance until you're seated in class.",
    highlight: "Zero Hassle Process",
  },
  {
    icon: "🏅",
    title: "Scholarship Assistance",
    desc: "We help you find, apply for, and secure the best scholarship opportunities across partner institutes.",
    highlight: "Save on Fees",
  },
];

function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: "#DCFCE7", color: EMERALD }}
          >
            What We Do
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
          >
            One Platform, Complete{" "}
            <span style={{ color: EMERALD }}>Admission Support</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#6B7280" }}>
            From career clarity to confirmed admission — we handle every step so students and parents can focus on what matters.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="group rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-2"
              style={{
                borderColor: "#E5E7EB",
                background: "white",
                boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = EMERALD;
                el.style.boxShadow = `0 12px 40px rgba(22,163,74,0.12)`;
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#E5E7EB";
                el.style.boxShadow = "0 2px 16px rgba(0,0,0,0.04)";
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5"
                style={{ background: "#DCFCE7" }}
              >
                {s.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B7280" }}>
                {s.desc}
              </p>
              <span
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
                style={{ background: "#DCFCE7", color: EMERALD }}
              >
                {s.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ───────────────────────────────────────────────────────────
const steps = [
  {
    num: "01",
    title: "Register Online",
    desc: "Fill out our quick enquiry form with your academic background, target exams, and location preferences.",
    icon: "📝",
  },
  {
    num: "02",
    title: "Personalized Evaluation",
    desc: "Our expert counselors analyze your profile and prepare a customized list of the best-fit coaching institutes.",
    icon: "🔬",
  },
  {
    num: "03",
    title: "Secure Admission",
    desc: "We handle documentation, fee negotiation, and enrollment — you just show up on your first day of class!",
    icon: "🎓",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-20 sm:py-28"
      style={{ background: `linear-gradient(135deg, ${NAVY} 0%, #162447 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: "rgba(22,163,74,0.2)", color: MINT }}
          >
            Simple Process
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            How{" "}
            <span style={{ color: MINT }}>EduFinder</span>{" "}
            Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div
            className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 opacity-20"
            style={{ background: MINT }}
          />

          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">
              <div
                className="relative w-28 h-28 rounded-full flex flex-col items-center justify-center mb-6 text-3xl"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: `2px solid rgba(34,197,94,0.3)`,
                }}
              >
                <span>{s.icon}</span>
                <span
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold"
                  style={{ background: EMERALD, color: "white" }}
                >
                  {s.num}
                </span>
              </div>
              <h3
                className="text-xl font-bold text-white mb-3"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Student Enquiry Form ────────────────────────────────────────────────────
function EnquiryForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    exam: "",
    location: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div>
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "#DCFCE7", color: EMERALD }}
            >
              Student & Parent Enquiry
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
            >
              Get a Free{" "}
              <span style={{ color: EMERALD }}>Counseling Call</span>{" "}
              Today
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#6B7280" }}>
              Talk to our expert counselors — completely free, no obligations. We'll match you to the right coaching institute within 24 hours.
            </p>

            <div className="space-y-4">
              {[
                { icon: "✅", text: "100% Genuine & Unbiased Guidance" },
                { icon: "✅", text: "Experienced Counselors with 10+ Years" },
                { icon: "✅", text: "Personalized Institute Shortlist" },
                { icon: "✅", text: "Student-First Transparent Process" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span style={{ color: EMERALD }}>{item.icon}</span>
                  <span className="text-sm font-medium" style={{ color: NAVY }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format"
                alt="Expert career counselor Rahul Verma"
                className="w-14 h-14 rounded-full object-cover border-2"
                style={{ borderColor: EMERALD }}
              />
              <div>
                <div className="font-semibold text-sm" style={{ color: NAVY }}>
                  Rahul Verma
                </div>
                <div className="text-xs" style={{ color: "#6B7280" }}>
                  Senior Career Counselor · 12 yrs experience
                </div>
                <div className="text-xs mt-0.5" style={{ color: EMERALD }}>
                  ● Available Now
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-3xl p-8 sm:p-10 shadow-xl"
            style={{
              background: `linear-gradient(135deg, ${NAVY} 0%, #162447 100%)`,
            }}
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-6xl mb-4">🎉</div>
                <h3
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  We'll call you soon!
                </h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Our expert counselor will reach out within 24 hours. You can also WhatsApp us at{" "}
                  <span style={{ color: MINT }}>+91 9506600972</span>
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="text-xl font-bold text-white mb-6"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  Fill in your details — it takes 60 seconds
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold mb-1 block" style={{ color: "rgba(255,255,255,0.7)" }}>
                      Student Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arjun Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1.5px solid rgba(255,255,255,0.15)",
                        color: "white",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = MINT)}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block" style={{ color: "rgba(255,255,255,0.7)" }}>
                      WhatsApp / Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1.5px solid rgba(255,255,255,0.15)",
                        color: "white",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = MINT)}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block" style={{ color: "rgba(255,255,255,0.7)" }}>
                      Current Class / Target Exam *
                    </label>
                    <select
                      required
                      value={form.exam}
                      onChange={(e) => setForm({ ...form, exam: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1.5px solid rgba(255,255,255,0.15)",
                        color: form.exam ? "white" : "rgba(255,255,255,0.4)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = MINT)}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    >
                      <option value="" disabled style={{ color: "#333" }}>
                        Select your target
                      </option>
                      <option value="class10" style={{ color: "#333" }}>Class 10th</option>
                      <option value="class12" style={{ color: "#333" }}>Class 12th</option>
                      <option value="iitjee" style={{ color: "#333" }}>IIT-JEE</option>
                      <option value="neet" style={{ color: "#333" }}>NEET</option>
                      <option value="upsc" style={{ color: "#333" }}>UPSC</option>
                      <option value="others" style={{ color: "#333" }}>Others</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-semibold mb-1 block" style={{ color: "rgba(255,255,255,0.7)" }}>
                      Preferred Location / Budget
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Lucknow, budget ₹50,000/yr"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1.5px solid rgba(255,255,255,0.15)",
                        color: "white",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = MINT)}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.15)")}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold text-base transition-all hover:scale-[1.02] mt-2"
                    style={{
                      background: `linear-gradient(135deg, ${EMERALD}, ${MINT})`,
                      color: "white",
                      boxShadow: `0 8px 24px rgba(22,163,74,0.35)`,
                    }}
                  >
                    Submit & Get Expert Call 📞
                  </button>

                  <p className="text-center text-xs mt-2" style={{ color: "rgba(255,255,255,0.45)" }}>
                    🔒 Your info is 100% safe. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── B2B Partnership ─────────────────────────────────────────────────────────
function Partnership() {
  const [form, setForm] = useState({
    institute: "",
    contact: "",
    city: "",
    category: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="for-institutions"
      className="py-20 sm:py-28"
      style={{ background: "#F0FDF4" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Form */}
          <div
            className="rounded-3xl p-8 sm:p-10 shadow-xl order-2 lg:order-1"
            style={{ background: "white" }}
          >
            <h3
              className="text-xl font-bold mb-6"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
            >
              Request Partnership Details
            </h3>

            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🤝</div>
                <h4 className="font-bold text-lg mb-2" style={{ color: NAVY }}>
                  Partnership Request Received!
                </h4>
                <p className="text-sm" style={{ color: "#6B7280" }}>
                  Our partnership team will contact you within 48 hours to discuss the enrollment agreement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6B7280" }}>
                    Institute Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vision IAS Academy"
                    value={form.institute}
                    onChange={(e) => setForm({ ...form, institute: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all"
                    style={{ borderColor: "#E5E7EB", color: NAVY }}
                    onFocus={(e) => (e.target.style.borderColor = EMERALD)}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6B7280" }}>
                    Contact Person & Designation *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Gupta, Director"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all"
                    style={{ borderColor: "#E5E7EB", color: NAVY }}
                    onFocus={(e) => (e.target.style.borderColor = EMERALD)}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6B7280" }}>
                    City / Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lucknow, Uttar Pradesh"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all"
                    style={{ borderColor: "#E5E7EB", color: NAVY }}
                    onFocus={(e) => (e.target.style.borderColor = EMERALD)}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold mb-1 block" style={{ color: "#6B7280" }}>
                    Coaching Category *
                  </label>
                  <select
                    required
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none border transition-all appearance-none"
                    style={{ borderColor: "#E5E7EB", color: form.category ? NAVY : "#9CA3AF" }}
                    onFocus={(e) => (e.target.style.borderColor = EMERALD)}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  >
                    <option value="" disabled>Select category</option>
                    <option value="iitjee">IIT-JEE Coaching</option>
                    <option value="neet">NEET / Medical</option>
                    <option value="upsc">UPSC / Civil Services</option>
                    <option value="banking">Banking & SSC</option>
                    <option value="school">School Tuitions (6–12)</option>
                    <option value="others">Others</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm transition-all hover:scale-[1.02]"
                  style={{ background: NAVY, color: "white" }}
                >
                  Request Partnership Details 🤝
                </button>
              </form>
            )}
          </div>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2">
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
              style={{ background: "#DCFCE7", color: EMERALD }}
            >
              For Coaching Institutes
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
            >
              Partner with{" "}
              <span style={{ color: EMERALD }}>EduFinder</span>{" "}
              as an Admission Partner
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#6B7280" }}>
              We stream verified, high-intent students directly to your institute. No cold leads — every student we send has been counseled, matched, and is ready to enroll.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { metric: "500+", label: "Students Placed" },
                { metric: "95%", label: "Enrollment Rate" },
                { metric: "50+", label: "Partner Institutes" },
                { metric: "24h", label: "Lead Response Time" },
              ].map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl p-4 text-center"
                  style={{ background: "#DCFCE7" }}
                >
                  <div
                    className="text-3xl font-extrabold"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: EMERALD }}
                  >
                    {m.metric}
                  </div>
                  <div className="text-xs font-medium mt-1" style={{ color: "#374151" }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              {[
                "Pre-qualified, high-intent student leads",
                "Detailed student profiles with academic background",
                "Dedicated account manager for each partner",
                "Transparent revenue sharing, no hidden fees",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                    style={{ background: EMERALD, color: "white" }}
                  >
                    ✓
                  </div>
                  <span className="text-sm" style={{ color: "#374151" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Aarav Singh",
    role: "IIT-JEE Student, Lucknow",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&auto=format",
    text: "EduFinder helped me find the perfect coaching in just 2 days! They matched me to an institute that fit my budget and schedule. I'm now preparing at Vibrant Academy.",
    stars: 5,
  },
  {
    name: "Meera Patel",
    role: "Parent of NEET Aspirant",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&auto=format",
    text: "As a parent, the process was seamless. The counselor understood my daughter's needs and shortlisted 3 great institutes. They even negotiated a scholarship for us!",
    stars: 5,
  },
  {
    name: "Vikram Yadav",
    role: "UPSC Aspirant, Kanpur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&auto=format",
    text: "I was confused between 10+ coaching options. EduFinder narrowed it down to the best 2 based on faculty quality and success rate. Highly recommend!",
    stars: 5,
  },
];

function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span
            className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4"
            style={{ background: "#DCFCE7", color: EMERALD }}
          >
            Student Stories
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: NAVY }}
          >
            What Our{" "}
            <span style={{ color: EMERALD }}>Students Say</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div
            className="rounded-3xl p-8 sm:p-12 transition-all duration-500"
            style={{
              background: `linear-gradient(135deg, ${NAVY} 0%, #162447 100%)`,
              boxShadow: `0 24px 64px rgba(13,27,62,0.25)`,
            }}
          >
            <div className="flex mb-4">
              {Array(testimonials[active].stars).fill(0).map((_, i) => (
                <span key={i} style={{ color: "#FBBF24" }}>★</span>
              ))}
            </div>
            <p className="text-base sm:text-lg leading-relaxed mb-8 text-white italic">
              "{testimonials[active].text}"
            </p>
            <div className="flex items-center gap-4">
              <img
                src={testimonials[active].avatar}
                alt={testimonials[active].name}
                className="w-14 h-14 rounded-full object-cover border-2"
                style={{ borderColor: MINT }}
              />
              <div>
                <div className="font-bold text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {testimonials[active].name}
                </div>
                <div className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {testimonials[active].role}
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: i === active ? 28 : 10,
                  height: 10,
                  background: i === active ? EMERALD : "#D1D5DB",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Trust Bar ───────────────────────────────────────────────────────────────
function TrustBar() {
  return (
    <section
      className="py-10 border-y"
      style={{ borderColor: "#E5E7EB", background: "#FAFAFA" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            { icon: "👥", label: "Trusted by Students", sub: "Across Lucknow & UP" },
            { icon: "🎯", label: "Personalized Guidance", sub: "For Every Profile" },
            { icon: "🏆", label: "Proven Track Record", sub: "500+ Placements" },
            { icon: "🎧", label: "Support at Every Step", sub: "From Enquiry to Admission" },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{item.icon}</span>
              <div className="text-sm font-bold" style={{ color: NAVY }}>
                {item.label}
              </div>
              <div className="text-xs" style={{ color: "#6B7280" }}>
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: NAVY }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <EduFinderLogo height={52} />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              EduFinder is Lucknow's most trusted educational counseling and admission partner. We connect students with the right coaching institutes based on their goals, budget, and academic background.
            </p>
            <div className="mt-4 text-sm italic font-semibold" style={{ color: MINT }}>
              "Sahi Chuniye, Sahi Future Banaiye!"
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {["Career Guidance", "Criteria-Based Matching", "Admission Support", "Scholarship Assistance", "Institute Partnership"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm transition-colors" style={{ color: "rgba(255,255,255,0.55)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = MINT)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="tel:+919506600972"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                📞 +91 9506600972
              </a>
              <a
                href="mailto:info@theedufinder.com"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                ✉️ info@theedufinder.com
              </a>
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                🌐 theedufinder.com
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                📍 Lucknow, Uttar Pradesh
              </div>
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-5">
              {[
                { label: "Facebook", icon: "f" },
                { label: "Instagram", icon: "in" },
                { label: "YouTube", icon: "▶" },
              ].map((s) => (
                <button
                  key={s.label}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all"
                  style={{ background: "rgba(255,255,255,0.1)", color: "white" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = EMERALD)}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                  title={s.label}
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
            © 2026 EduFinder. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = MINT)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp Floating Button ────────────────────────────────────────────────
function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/919506600972?text=Hi%20EduFinder!%20I%20need%20career%20counseling."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full shadow-2xl transition-all duration-300"
      style={{
        background: "#25D366",
        padding: hovered ? "12px 20px 12px 16px" : "14px",
        boxShadow: "0 8px 32px rgba(37,211,102,0.45)",
        transform: hovered ? "scale(1.05)" : "scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg
        viewBox="0 0 24 24"
        fill="white"
        className="flex-shrink-0"
        style={{ width: 26, height: 26 }}
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
      {hovered && (
        <span className="text-white text-sm font-semibold whitespace-nowrap">
          Chat with Expert
        </span>
      )}
    </a>
  );
}

// ─── Root ────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <EnquiryForm />
      <Testimonials />
      <Partnership />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
