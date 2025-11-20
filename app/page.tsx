import { experience, profile, education, skills } from "@/app/data/resume";
import { ArrowUpRightIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

const highlights = [
  "Cloud-native delivery with Kubernetes, GitHub Actions, and IaC automation.",
  "End-to-end product mindset that blends DevOps discipline with full-stack delivery.",
  "Obsessed with stellar UX: clean interfaces, thoughtful motion, and crisp accessibility.",
];

function ContactLink({ href, label, icon: Icon }: { href: string; label: string; icon: typeof ArrowUpRightIcon }) {
  return (
    <a className="link-button text-sm" href={href} target="_blank" rel="noreferrer">
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="relative mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 lg:px-12">
      <header className="grid gap-8 rounded-3xl glass-panel p-8 sm:grid-cols-[1.1fr_0.9fr] sm:gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-aurora/80">
            <span className="inline-block h-2 w-2 rounded-full bg-aurora" />
            Galactic Resume
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-300">{profile.location}</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">{profile.name}</h1>
            <p className="text-lg text-gray-200">{profile.title}</p>
          </div>
          <p className="max-w-3xl text-gray-200/90 leading-relaxed">{profile.summary}</p>
          <div className="flex flex-wrap gap-3">
            <ContactLink href={`mailto:${profile.email}`} label={profile.email} icon={EnvelopeIcon} />
            <ContactLink href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} label={profile.phone} icon={PhoneIcon} />
            <ContactLink href={profile.linkedin} label="LinkedIn" icon={ArrowUpRightIcon} />
            <ContactLink href="https://maps.google.com/?q=Alajuela,Costa%20Rica" label={profile.location} icon={MapPinIcon} />
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl glow-border p-1">
          <div className="absolute inset-0 star-grid opacity-60" aria-hidden />
          <div className="relative h-full rounded-[1.25rem] bg-gradient-to-br from-aurora/10 via-plasma/10 to-midnight/40 p-6">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-300">Orbiting values</h2>
            <ul className="space-y-3 text-sm text-gray-100">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl bg-white/5 p-3 ring-1 ring-white/5">
                  <span className="mt-1 h-2 w-2 rounded-full bg-aurora shadow-glow" aria-hidden />
                  <p className="leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gray-400">
              <span className="h-px flex-1 bg-gradient-to-r from-aurora/60 via-white/50 to-transparent" />
              Available for high-impact missions
              <span className="h-px flex-1 bg-gradient-to-l from-aurora/60 via-white/50 to-transparent" />
            </div>
          </div>
        </div>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel rounded-3xl p-7">
          <div className="section-title text-xs text-gray-300">Technical Skills</div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {skills.technical.map((group) => (
              <div key={group.category} className="rounded-2xl border border-white/5 bg-white/5 p-4 shadow-card">
                <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                  <span className="h-2 w-2 rounded-full bg-plasma shadow-glow" />
                  {group.category}
                </div>
                <ul className="space-y-1 text-sm text-gray-200/90 leading-relaxed">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-200/90">
            <span className="rounded-full bg-aurora/15 px-3 py-1 text-aurora">Spanish</span>
            <span className="rounded-full bg-aurora/15 px-3 py-1 text-aurora">English</span>
          </div>
        </div>

        <div className="glass-panel rounded-3xl p-7">
          <div className="section-title text-xs text-gray-300">Education</div>
          <div className="mt-4 space-y-4">
            {education.map((school) => (
              <div key={school.school} className="rounded-2xl border border-white/5 bg-white/5 p-4 shadow-card">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-white">{school.school}</p>
                    <p className="text-xs text-gray-300">{school.location}</p>
                  </div>
                  <span className="text-xs text-aurora">{school.dates}</span>
                </div>
                <p className="mt-2 text-sm text-gray-200/90">{school.credential}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 glass-panel rounded-3xl p-7">
        <div className="section-title text-xs text-gray-300">Work Experience</div>
        <div className="relative mt-6 space-y-6 timeline">
          {experience.map((job) => (
            <article key={job.role + job.start} className="timeline-item rounded-2xl border border-white/5 bg-white/5 p-5 shadow-card">
              <div className="timeline-dot" aria-hidden />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                  <p className="text-sm text-gray-300">{job.company}</p>
                  <p className="text-xs text-gray-400">{job.location}</p>
                </div>
                <span className="text-xs text-aurora">
                  {job.start} – {job.end}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-200/90 leading-relaxed">
                {job.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-aurora" aria-hidden />
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
