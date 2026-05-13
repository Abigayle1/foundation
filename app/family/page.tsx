import { User } from "lucide-react"

const familyMembers = [
  {
    name: "Omar W. Brown Jr",
    description: "A dedicated advocate for Caribbean children and families, continuing the legacy of service and community empowerment. His work spans education, community development, and policy reform across the Caribbean region.",
  },
  {
    name: "Nicole Marie Brown",
    description: "Following in the footsteps of family tradition, Nicole has committed herself to making a positive impact in her community. Her contributions reflect the values of compassion, integrity, and service instilled by the Brown family.",
  },
  {
    name: "Janelle CP Brown",
    description: "A passionate advocate for social change, Janelle carries forward the family mission of empowering communities and supporting families. Her work embodies the spirit of dedication that defines the Brown family legacy.",
  },
]

export default function FamilyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Family
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Meet the family members who continue to carry forward a legacy of service, advocacy, and community empowerment.
            </p>
          </div>
        </div>
      </section>

      {/* Family Introduction */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Legacy</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              A Family United in Purpose
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The Brown family shares a deep commitment to community service and the empowerment of Caribbean children and families. Together, they continue to build upon a foundation of compassion, education, and advocacy.
            </p>
          </div>
        </div>
      </section>

      {/* Family Members Grid */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {familyMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center text-center rounded-2xl bg-card p-8 shadow-sm"
              >
                {/* Image Placeholder */}
                <div className="relative h-48 w-48 overflow-hidden rounded-full bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <User className="mx-auto h-20 w-20 opacity-50" />
                    </div>
                  </div>
                </div>
                
                <h3 className="mt-8 font-serif text-2xl font-semibold text-card-foreground">
                  {member.name}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
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
              &ldquo;Family is the foundation from which all our work grows. The values we share and the bonds we nurture give us the strength to serve our communities with purpose and dedication.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
