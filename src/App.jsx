import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Process from "./sections/Process";
import Plans from "./sections/Plans";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden text-white bg-black">
      {/* ===== BASE GRADIENT ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(20,184,166,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.08),transparent_55%)]" />

      {/* ===== SUBTLE GRID TEXTURE ===== */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(circle at 50% 20%, black 40%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 20%, black 40%, transparent 75%)",
        }}
      />

      {/* ===== AURORA / BLOBS ===== */}
      <div className="absolute rounded-full -top-24 -left-24 h-96 w-96 blur-3xl opacity-35 bg-gradient-to-tr from-teal-500 via-cyan-500 to-emerald-500 animate-blob" />
      <div className="absolute top-32 -right-28 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-500 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-28 left-1/3 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-25 bg-gradient-to-tr from-emerald-400 via-teal-400 to-cyan-400 animate-blob animation-delay-4000" />

      {/* ===== GRAIN ===== */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22160%22 height=%22160%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22160%22 height=%22160%22 filter=%22url(%23n)%22 opacity=%220.6%22/%3E%3C/svg%3E')]" />

      {/* ===== CONTENT ===== */}
      <div className="relative">
        <Navbar />

        <main>
          <Hero />
          <Services />
          <Process />
          <Plans />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
