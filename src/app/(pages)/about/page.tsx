import { Oswald, Inter, IBM_Plex_Mono } from "next/font/google";

const display = Oswald({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

const milestones = [
  {
    year: "2014",
    title: "Foundation",
    copy: "Akaash Industries is established on 12 September 2014 in the Sangareddy district of Telangana, with a single tyre pyrolysis reactor.",
  },
  {
    year: "Today",
    title: "EPR partner",
    copy: "The unit now operates as an approved PRO agency, collecting and processing end-of-life tyres under Extended Producer Responsibility norms.",
  },
  {
    year: "Ongoing",
    title: "Material recovery",
    copy: "Every batch is broken down into pyrolysis oil, recovered carbon, and steel — supplied on to industrial buyers across the region.",
  },
];

const values = [
  {
    label: "Environmental responsibility",
    copy: "Scrap tyres that would otherwise be dumped or openly burned are instead processed in a closed, oxygen-free reactor, cutting down on uncontrolled emissions.",
  },
  {
    label: "Material recovery",
    copy: "Nothing that enters the reactor is treated as waste. Oil, carbon, and steel are each graded and routed to buyers who can reuse them industrially.",
  },
  {
    label: "Regulatory compliance",
    copy: "Operations are aligned with MPCB and CPCB approval as a PRO agency, and with the EPR framework under the Waste Management Rules.",
  },
];

export default function AboutPage() {
  return (
    <div className={`${display.variable} ${body.variable} ${mono.variable} bg-[#17140F] text-[#EFEAE0] font-sans`}>

      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#EFEAE0 1px, transparent 1px), linear-gradient(90deg, #EFEAE0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="font-[var(--font-mono)] text-xs tracking-[0.2em] text-[#F0B429]">
            ABOUT US
          </p>
          <h1 className="mt-5 max-w-3xl font-[var(--font-display)] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            A tyre pyrolysis unit built on
            <span className="text-[#C97A2A]"> recovery, not waste</span>.
          </h1>
          <p className="mt-6 max-w-xl text-[#9AA0A6]">
            Akaash Industries is a tyre pyrolysis unit located in the Sangareddy district of Telangana,
            established on 12 September 2014. We take end-of-life tyres that would otherwise be dumped
            or burned, and break them down into pyrolysis oil, recovered carbon, and steel for
            industrial reuse.
          </p>

          <dl className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-6 font-[var(--font-mono)]">
            <div>
              <dt className="text-xs text-[#9AA0A6]">Established</dt>
              <dd className="mt-1 text-sm">12 Sep 2014</dd>
            </div>
            <div>
              <dt className="text-xs text-[#9AA0A6]">Location</dt>
              <dd className="mt-1 text-sm">Sangareddy, TG</dd>
            </div>
            <div>
              <dt className="text-xs text-[#9AA0A6]">Founder</dt>
              <dd className="mt-1 text-sm">Mohd Samad Nawaz</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-[var(--font-mono)] text-xs tracking-[0.2em] text-[#F0B429]">LEADERSHIP</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">
            Founder & Owner
          </h2>

          <div className="mt-10 grid gap-10 rounded-sm border border-white/10 bg-[#221E19] p-8 md:grid-cols-[auto_1fr] md:items-center md:p-10">
            <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#F0B429]/60 font-[var(--font-display)] text-2xl text-[#F0B429]">
              MSN
            </div>
            <div>
              <h3 className="font-[var(--font-display)] text-2xl text-[#EFEAE0]">
                Mohd Samad Nawaz
              </h3>
              <p className="mt-1 font-[var(--font-mono)] text-xs tracking-wide text-[#9AA0A6]">
                Founder & Owner, Akaash Industries
              </p>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#9AA0A6]">
                Mohd Samad Nawaz founded Akaash Industries on 12 September 2014 in Sangareddy,
                Telangana, with the goal of turning scrap tyre waste into usable industrial
                material. Under his ownership, the unit has grown into an established tyre
                pyrolysis operation serving industrial buyers of pyrolysis oil, carbon, and steel
                across the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-[var(--font-mono)] text-xs tracking-[0.2em] text-[#F0B429]">OUR JOURNEY</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">
            From a single reactor to a full recovery unit
          </h2>

          <ol className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-3">
            {milestones.map((m) => (
              <li key={m.title} className="bg-[#17140F] p-8">
                <span className="font-[var(--font-mono)] text-sm text-[#C97A2A]">{m.year}</span>
                <h3 className="mt-3 font-[var(--font-display)] text-lg">{m.title}</h3>
                <p className="mt-2 text-sm text-[#9AA0A6]">{m.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#221E19]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="font-[var(--font-mono)] text-xs tracking-[0.2em] text-[#F0B429]">WHAT WE STAND FOR</p>
          <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">
            Turning scrap into supply
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.label} className="rounded-sm border border-white/10 bg-[#17140F] p-8">
                <h3 className="font-[var(--font-display)] text-xl text-[#C97A2A]">{v.label}</h3>
                <p className="mt-4 text-sm leading-relaxed text-[#9AA0A6]">{v.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-[var(--font-mono)] text-xs tracking-[0.2em] text-[#F0B429]">WHERE WE OPERATE</p>
              <h2 className="mt-3 font-[var(--font-display)] text-3xl font-semibold sm:text-4xl">
                Sangareddy, Telangana
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[#9AA0A6]">
                Our plant is based in the Sangareddy district of Telangana, chosen for its proximity
                to both scrap tyre supply chains and industrial buyers of recovered oil, carbon, and
                steel. Since 2014, this facility has served as the base for our EPR collection,
                processing, and dispatch operations.
              </p>
            </div>
            <div className="font-[var(--font-mono)] text-sm text-[#9AA0A6]">
              <p className="text-[#EFEAE0]">Akaash Industries</p>
              <p className="mt-2">Sangareddy District,<br />Telangana, India</p>
              <p className="mt-4">Established 12 September 2014</p>
              <p className="mt-4">Founder & Owner: Mohd Samad Nawaz</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-[var(--font-display)] text-2xl font-semibold sm:text-3xl">
          Want to work with Akaash Industries?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-[#9AA0A6]">
          Reach out for scrap tyre supply, EPR partnership, or bulk orders of recovered material.
        </p>
        <a
          href="/contact"
          className="mt-8 inline-block rounded-sm bg-[#C97A2A] px-6 py-3 text-sm font-medium text-[#17140F] transition-colors hover:bg-[#dd8935]"
        >
          Get in touch
        </a>
      </section>
    </div>
  );
}