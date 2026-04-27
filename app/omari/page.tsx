import { User, Heart, GraduationCap, School, BookOpen, ExternalLink } from "lucide-react"

const profileSections = [
  {
    id: "farren",
    title: "Omari & Farren",
    icon: Heart,
    description: "The partnership between Omari and Farren represents a beautiful union of shared values, intellectual curiosity, and mutual support. Together, they navigate life's adventures while building their own legacy of love and accomplishment.",
    imageAlt: "Omari and Farren",
  },
  {
    id: "de-wedden",
    title: "Omari & De Wedden",
    icon: School,
    description: "De Wedden provided Omari with a unique educational experience that shaped his approach to learning and community. The relationships and lessons from this period continue to influence his academic and personal pursuits.",
    imageAlt: "Omari at De Wedden",
  },
  {
    id: "st-pauls",
    title: "Omari & St. Paul's",
    icon: GraduationCap,
    description: "St. Paul's School represented a pivotal chapter in Omari's educational journey. The rigorous academic environment and close-knit community fostered his growth as a scholar, leader, and thoughtful young man.",
    imageAlt: "Omari at St. Paul's",
  },
  {
    id: "mum",
    title: "Omari & Mum",
    icon: Heart,
    description: "The bond between Omari and his grandmother, Dr. Claudette Crawford-Brown, is one of deep affection and mutual admiration. Her wisdom, love, and example have profoundly shaped his understanding of family, service, and purpose.",
    imageAlt: "Omari with his grandmother",
  },
]

const publications = [
  {
    title: "Understanding Caribbean Youth Identity",
    type: "Academic Paper",
    year: "2024",
    description: "An exploration of identity formation among Caribbean diaspora youth.",
  },
  {
    title: "Migration and Family Bonds",
    type: "Research Study",
    year: "2023",
    description: "Examining the impact of parental migration on intergenerational relationships.",
  },
  {
    title: "Education Without Borders",
    type: "Essay Collection",
    year: "2023",
    description: "Reflections on international education and cultural exchange.",
  },
  {
    title: "Community Service in Practice",
    type: "Case Study",
    year: "2022",
    description: "Documenting effective approaches to youth engagement in community development.",
  },
]

export default function OmariPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Family Member</span>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
                Omari W. Brown
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                A young scholar and thinker carrying forward the family legacy of academic excellence, community service, and deep family bonds across generations.
              </p>
            </div>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-primary-foreground/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground/60">
                  <User className="mx-auto h-24 w-24 mb-4" />
                  <p className="text-sm">Omari W. Brown</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Sections */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {profileSections.map((section, index) => (
              <div
                key={section.id}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <section.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-accent">Section</span>
                  </div>
                  <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                    {section.title}
                  </h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {section.description}
                  </p>
                </div>
                <div className={`relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <User className="mx-auto h-16 w-16 mb-4 opacity-50" />
                      <p className="text-sm">{section.imageAlt}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Academic Work */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <BookOpen className="h-7 w-7" />
              </div>
            </div>
            <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Publications & Academic Work
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Omari&apos;s scholarly contributions reflect his commitment to understanding and addressing issues affecting Caribbean communities.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="group relative rounded-xl bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {pub.type}
                    </span>
                    <h3 className="mt-3 font-serif text-lg font-semibold text-card-foreground">
                      {pub.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {pub.description}
                    </p>
                    <p className="mt-3 text-xs text-muted-foreground">
                      Published {pub.year}
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="font-serif text-2xl font-medium italic text-foreground sm:text-3xl leading-relaxed">
              &ldquo;The lessons learned from family and community are the foundation upon which we build our contributions to the world.&rdquo;
            </p>
            <footer className="mt-8">
              <p className="text-base font-semibold text-primary">Omari W. Brown</p>
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
