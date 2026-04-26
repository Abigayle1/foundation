import Link from "next/link"
import { ArrowRight, GraduationCap, Globe, Plane, HeartHandshake } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Play Therapy Training",
    description: "Comprehensive training programs in play therapy techniques for mental health professionals, educators, and counselors working with children and adolescents.",
    icon: GraduationCap,
    features: [
      "Evidence-based therapeutic approaches",
      "Hands-on practical workshops",
      "Certification programs available",
      "Continuing education credits",
    ],
  },
  {
    title: "International Social Work Training",
    description: "Professional development for social workers navigating cross-cultural contexts, international policies, and global best practices in child and family welfare.",
    icon: Globe,
    features: [
      "Cross-cultural competency training",
      "International policy frameworks",
      "Case management strategies",
      "Collaborative networking opportunities",
    ],
  },
  {
    title: "Training on Caribbean Migration",
    description: "Specialized programs addressing the unique challenges and opportunities presented by Caribbean migration patterns, including family separation and reunification dynamics.",
    icon: Plane,
    features: [
      "Migration impact assessment",
      "Family reunification support",
      "Cultural adjustment strategies",
      "Community integration programs",
    ],
  },
  {
    title: "Counselling",
    description: "Professional counselling training covering therapeutic techniques, ethical practices, and specialized approaches for working with Caribbean families and communities.",
    icon: HeartHandshake,
    features: [
      "Individual and family therapy",
      "Crisis intervention techniques",
      "Cultural sensitivity training",
      "Supervision and mentorship",
    ],
  },
]

export default function TrainingServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Training Services
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Professional development and training programs designed to empower practitioners, educators, and community leaders in their work with children and families.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Professional Development</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Building Capacity for Change
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our training programs draw on decades of experience and research to provide practical, evidence-based approaches that can be applied in diverse cultural and professional contexts.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group flex flex-col rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-card-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button variant="link" className="text-primary p-0 h-auto group-hover:underline">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Interested in Our Training Programs?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Contact us to learn more about upcoming training opportunities, custom workshops for your organization, or collaborative partnerships.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
            <Link href="/newsletters">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Updates
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
