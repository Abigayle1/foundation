import { User, MapPin, Music, Heart } from "lucide-react"

const sections = [
  {
    id: "trinidad",
    title: "Nicole & Trinidad",
    icon: MapPin,
    description: "Trinidad holds a special place in Nicole's heart. Her time on the island shaped her understanding of Caribbean culture, rhythm, and the vibrant spirit that defines the region. The experiences and connections made in Trinidad continue to influence her artistic expression and worldview.",
    imageAlt: "Nicole in Trinidad",
  },
  {
    id: "dance",
    title: "Nicole & Dance",
    icon: Music,
    description: "Dance has been Nicole's passion and creative outlet since childhood. Through movement, she expresses the rich cultural heritage of the Caribbean, blending traditional forms with contemporary expression. Her performances celebrate the joy, resilience, and beauty of Caribbean culture.",
    imageAlt: "Nicole dancing",
  },
  {
    id: "mum",
    title: "Nicole & Mum",
    icon: Heart,
    description: "The bond between Nicole and her mother, Dr. Claudette Crawford-Brown, is one of deep love, mutual respect, and shared purpose. From childhood lessons to adult collaborations, their relationship exemplifies the strength and beauty of mother-daughter connections.",
    imageAlt: "Nicole with her mother",
  },
]

export default function NicolePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Family Member</span>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
                Nicole Marie Brown
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                A vibrant spirit whose life journey spans continents and cultures. Nicole embodies the creative energy, cultural pride, and deep family bonds that define the Brown legacy.
              </p>
            </div>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-primary-foreground/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground/60">
                  <User className="mx-auto h-24 w-24 mb-4" />
                  <p className="text-sm">Nicole Marie Brown</p>
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
            {sections.map((section, index) => (
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

      {/* Quote Section */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="font-serif text-2xl font-medium italic text-foreground sm:text-3xl leading-relaxed">
              &ldquo;Dance is my language, movement is my voice. Through every step, I carry the stories and rhythms of our Caribbean heritage.&rdquo;
            </p>
            <footer className="mt-8">
              <p className="text-base font-semibold text-primary">Nicole Marie Brown</p>
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
