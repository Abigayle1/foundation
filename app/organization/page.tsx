import Link from "next/link"
import { GraduationCap, Heart, Home, Users, Target, Eye, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const programs = [
  {
    title: "Education Initiative",
    description: "Providing educational resources, scholarships, and tutoring programs to children across the Caribbean.",
    icon: GraduationCap,
  },
  {
    title: "Family Support Services",
    description: "Offering counseling, parenting workshops, and resources to strengthen family bonds and improve home environments.",
    icon: Home,
  },
  {
    title: "Health & Wellness",
    description: "Promoting physical and mental health through community health programs, screenings, and wellness education.",
    icon: Heart,
  },
  {
    title: "Youth Development",
    description: "Empowering young people through leadership programs, mentorship, and skills training opportunities.",
    icon: Users,
  },
]

const stats = [
  { value: "50,000+", label: "Children Served" },
  { value: "12", label: "Caribbean Nations" },
  { value: "200+", label: "Partner Organizations" },
  { value: "35+", label: "Years of Service" },
]

export default function OrganizationPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-semibold text-primary-foreground">
              Institute for Caribbean Children and Family
            </span>
            <h1 className="mt-6 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              ICCF
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Dedicated to improving the lives of children and families across the Caribbean through education, advocacy, and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Mission */}
            <div className="relative overflow-hidden rounded-2xl bg-secondary p-8 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-serif text-2xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                To advocate for and support the holistic development of Caribbean children and families through comprehensive programs, research-based interventions, and community partnerships that address the unique challenges facing our region.
              </p>
            </div>

            {/* Vision */}
            <div className="relative overflow-hidden rounded-2xl bg-secondary p-8 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Eye className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-serif text-2xl font-bold text-foreground">
                Our Vision
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                A Caribbean where every child has access to quality education, healthcare, and opportunities to thrive, and where families are empowered with the resources and support they need to build strong, healthy communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Users className="mx-auto h-16 w-16 mb-4 opacity-50" />
                  <p className="text-sm">Organization Image</p>
                </div>
              </div>
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">About Us</span>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                A Legacy of Impact
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Founded in 1985 by Omar W. Brown Jr., the Institute for Caribbean Children and Family (ICCF) has been at the forefront of child welfare and family support across the Caribbean region.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Over three decades, ICCF has grown from a small community initiative to a leading organization with programs in 12 Caribbean nations, touching the lives of over 50,000 children and their families.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Our work is guided by research, driven by compassion, and sustained by the communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">What We Do</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Our Programs
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Comprehensive services designed to support every aspect of child and family well-being.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {programs.map((program) => (
              <div
                key={program.title}
                className="relative flex flex-col rounded-2xl bg-card p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <program.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-semibold text-card-foreground">
                  {program.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Our Impact
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl font-bold text-primary-foreground lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-primary-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Partner With Us
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Whether you are an organization, government agency, or individual, there are many ways to collaborate with ICCF to make a difference.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Link href="/foundation">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
