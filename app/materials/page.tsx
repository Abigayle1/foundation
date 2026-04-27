import { BookOpen, FileText, Video } from "lucide-react"
import { Button } from "@/components/ui/button"

const materials = [
  {
    id: 1,
    title: "ACT NOW: Therapeutic Intervention Guide",
    description: "A comprehensive guide for practitioners on implementing therapeutic interventions with children and families.",
    type: "Guide",
    icon: FileText,
  },
  {
    id: 2,
    title: "Play Therapy Techniques Manual",
    description: "Practical manual covering essential play therapy techniques for mental health professionals.",
    type: "Manual",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Caribbean Migration Impact Study",
    description: "Research publication examining the effects of migration patterns on Caribbean families and children.",
    type: "Research",
    icon: FileText,
  },
  {
    id: 4,
    title: "Family Counselling Workbook",
    description: "Interactive workbook for families engaging in counselling and therapeutic processes.",
    type: "Workbook",
    icon: BookOpen,
  },
  {
    id: 5,
    title: "The Barrel Child Documentary",
    description: "Video documentary exploring the barrel child phenomenon and its impact on Caribbean communities.",
    type: "Video",
    icon: Video,
  },
  {
    id: 6,
    title: "Social Work Practice in the Caribbean",
    description: "Essential reading for social workers practicing in Caribbean contexts and communities.",
    type: "Book",
    icon: BookOpen,
  },
  {
    id: 7,
    title: "Trauma-Informed Care Training Materials",
    description: "Training resources for implementing trauma-informed approaches in child welfare settings.",
    type: "Training",
    icon: FileText,
  },
  {
    id: 8,
    title: "Community Development Toolkit",
    description: "Practical toolkit for community organizers and development practitioners.",
    type: "Toolkit",
    icon: FileText,
  },
  {
    id: 9,
    title: "Parent Education Series",
    description: "Educational video series designed to support parents in raising resilient children.",
    type: "Video Series",
    icon: Video,
  },
]

export default function MaterialsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Materials
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              ACT NOW Production - Educational materials, publications, and resources developed to support practitioners, families, and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">ACT NOW Production</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Resources for Change
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our materials are designed to equip professionals, educators, and families with practical tools and knowledge to support the well-being of children and communities throughout the Caribbean and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Library</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              All Materials
            </h2>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {materials.map((material) => (
              <div
                key={material.id}
                className="flex flex-col rounded-2xl bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <material.icon className="mx-auto h-12 w-12 mb-2 opacity-50" />
                      <p className="text-xs">Cover</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {material.type}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  {material.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {material.description}
                </p>
                <div className="mt-4">
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Learn more
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Interested in Our Materials?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Contact us for orders, licensing inquiries, or to request review copies. We are committed to making our resources accessible to educators, researchers, and organizations.
          </p>
          <div className="mt-10">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
