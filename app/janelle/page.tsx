import { User, GraduationCap, MapPin, Building2, Heart } from "lucide-react"

const sections = [
  {
    id: "loomis",
    title: "Janelle & Loomis",
    icon: GraduationCap,
    description: "The Loomis Chaffee years were formative for Janelle, providing a rigorous academic foundation and lifelong friendships. The boarding school experience in Connecticut shaped her independence, intellectual curiosity, and appreciation for community.",
    imageAlt: "Janelle at Loomis",
  },
  {
    id: "france",
    title: "Janelle & France",
    icon: MapPin,
    description: "France became a second home for Janelle, where she immersed herself in the language, culture, and art of French life. Her time abroad expanded her worldview and deepened her appreciation for international perspectives.",
    imageAlt: "Janelle in France",
  },
  {
    id: "scotiabank",
    title: "Janelle & Scotiabank",
    icon: Building2,
    description: "At Scotiabank, Janelle has built a distinguished career in finance, combining professional excellence with her commitment to community impact. Her work demonstrates how Caribbean professionals excel on the global stage while maintaining their cultural roots.",
    imageAlt: "Janelle professional portrait",
  },
  {
    id: "mum-covid",
    title: "Janzi, Mum & Covid",
    icon: Heart,
    description: "The Covid-19 pandemic brought unexpected challenges but also deepened the bond between Janelle and her mother. This period of closeness amid global uncertainty reinforced the importance of family and the resilience that has always defined the Browns.",
    imageAlt: "Janelle with her mother",
  },
]

export default function JanellePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Family Member</span>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
                Janelle CP Brown
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                A global professional whose journey from Connecticut to France to the financial world exemplifies the Brown family&apos;s spirit of excellence, adventure, and deep family connection.
              </p>
            </div>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-primary-foreground/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground/60">
                  <User className="mx-auto h-24 w-24 mb-4" />
                  <p className="text-sm">Janelle CP Brown</p>
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
              &ldquo;Success is not just about professional achievement, but about carrying your family&apos;s values and love wherever your journey takes you.&rdquo;
            </p>
            <footer className="mt-8">
              <p className="text-base font-semibold text-primary">Janelle CP Brown</p>
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
