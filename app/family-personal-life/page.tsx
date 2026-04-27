import { User, MapPin, Home, Heart } from "lucide-react"

const timelineEvents = [
  {
    title: "New Jersey Years",
    subtitle: "313 & Here Comes Omari",
    description: "The family's journey begins in New Jersey, where foundations were laid and young Omari joined the family. A time of new beginnings and establishing roots in America.",
    location: "New Jersey, USA",
  },
  {
    title: "Connecticut & The Loomis Years",
    subtitle: "A New Chapter",
    description: "Moving to Connecticut opened new opportunities. The Loomis years brought educational milestones and lasting friendships that would shape the family's trajectory.",
    location: "Connecticut, USA",
  },
  {
    title: "Florida & Pine Crest Years",
    subtitle: "Sunshine and Growth",
    description: "Florida provided a vibrant backdrop for the family's continued growth. The Pine Crest years were marked by academic achievements, artistic pursuits, and warm community connections.",
    location: "Florida, USA",
  },
]

const additionalSections = [
  {
    title: "The Whittingham Years",
    description: "A formative period that helped shape the family's values and traditions. The Whittingham connection represents deep roots in Jamaican heritage and the enduring bonds of extended family.",
    icon: Heart,
  },
  {
    title: "The Diamond Homestead",
    description: "The Diamond Homestead stands as a testament to the family's commitment to creating a welcoming space for gathering, reflection, and celebration. A place where generations come together.",
    icon: Home,
  },
]

export default function FamilyPersonalLifePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Family & Personal Life
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              A journey through the personal milestones, family adventures, and cherished moments that have shaped Dr. Crawford-Brown&apos;s life beyond academia.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Life Overview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Personal Life</span>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                A Life Rich in Love and Adventure
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Beyond her professional achievements, Dr. Claudette Crawford-Brown is a devoted mother, grandmother, and family matriarch. Her personal life is marked by the same dedication, warmth, and purposefulness that defines her professional work.
                </p>
                <p>
                  The Brown family has journeyed across continents, from Jamaica to the United States and Europe, creating memories and building a legacy of love, education, and service wherever they go.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <User className="mx-auto h-16 w-16 mb-4 opacity-50" />
                  <p className="text-sm">Family Portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browns on the Move - Timeline */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Timeline</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Browns on the Move
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Follow the family&apos;s journey across different states and the milestones that marked each chapter.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border lg:left-1/2 lg:-translate-x-0.5" />

              {timelineEvents.map((event, index) => (
                <div
                  key={event.title}
                  className={`relative mb-12 last:mb-0 ${
                    index % 2 === 0 ? "lg:pr-1/2" : "lg:pl-1/2 lg:ml-auto"
                  }`}
                >
                  <div
                    className={`flex items-start gap-6 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                      <MapPin className="h-6 w-6" />
                    </div>

                    {/* Content card */}
                    <div
                      className={`flex-1 rounded-2xl bg-card p-6 shadow-sm ${
                        index % 2 === 0 ? "lg:mr-12" : "lg:ml-12"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <MapPin className="h-4 w-4" />
                        {event.location}
                      </div>
                      <h3 className="mt-2 font-serif text-xl font-semibold text-card-foreground">
                        {event.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">
                        {event.subtitle}
                      </p>
                      <p className="mt-4 text-muted-foreground leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections - Whittingham & Diamond Homestead */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {additionalSections.map((section, index) => (
              <div
                key={section.title}
                className="relative overflow-hidden rounded-2xl bg-card p-8 shadow-sm lg:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <section.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-card-foreground">
                  {section.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
                <div className="mt-8 aspect-[16/9] overflow-hidden rounded-xl bg-muted">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <User className="mx-auto h-12 w-12 opacity-50" />
                      <p className="mt-2 text-sm">Photo Gallery</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="font-serif text-2xl font-medium italic text-foreground sm:text-3xl leading-relaxed">
              &ldquo;Family is the foundation from which all our work grows. The values we share and the bonds we nurture give us the strength to serve our communities with purpose and dedication.&rdquo;
            </p>
            <footer className="mt-8">
              <p className="text-base font-semibold text-primary">Dr. Claudette Crawford-Brown</p>
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
