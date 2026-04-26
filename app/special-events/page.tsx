"use client"

import { useState } from "react"
import { Mic, Ship, GraduationCap, Shield, Globe, BookOpen, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const events = [
  {
    id: "speakers-bureau",
    title: "Speakers Bureau",
    icon: Mic,
    description: "Dr. Claudette Brown is available for keynote addresses, panel discussions, and workshops on topics including child welfare, Caribbean migration, family dynamics, and social work practice.",
    details: [
      "Keynote speaking engagements",
      "Conference presentations",
      "Panel discussions and forums",
      "Workshop facilitation",
      "University guest lectures",
    ],
  },
  {
    id: "barrel-child",
    title: "The Barrel Child Syndrome & Caribbean Migration",
    icon: Ship,
    description: "A signature initiative exploring the psychological and social impacts of the 'barrel child' phenomenon, where children are left behind by migrating parents and receive material goods in lieu of parental presence.",
    details: [
      "Research and documentation",
      "Community awareness programs",
      "Policy advocacy initiatives",
      "Support groups for affected families",
      "Educational workshops for practitioners",
    ],
  },
  {
    id: "uwi-years",
    title: "The UWI Years",
    icon: GraduationCap,
    description: "Celebrating Dr. Brown's significant contributions during her tenure at the University of the West Indies, including curriculum development, student mentorship, and pioneering research in Caribbean social work.",
    details: [
      "Curriculum development achievements",
      "Student mentorship programs",
      "Research publications and findings",
      "Academic collaborations",
      "Institutional building contributions",
    ],
  },
  {
    id: "violence-prevention",
    title: "UWI Violence Prevention Program / The We COT",
    icon: Shield,
    description: "An innovative community-based violence prevention initiative developed in collaboration with the University of the West Indies, focusing on youth engagement and community transformation.",
    details: [
      "Community outreach programs",
      "Youth intervention strategies",
      "Conflict resolution training",
      "Family support services",
      "Research and evaluation",
    ],
  },
  {
    id: "netherlands-project",
    title: "The Netherlands Project",
    icon: Globe,
    description: "An international collaboration examining Caribbean migration patterns to the Netherlands, with a focus on family dynamics, cultural adaptation, and intergenerational impacts.",
    details: [
      "Cross-cultural research collaboration",
      "Migration pattern analysis",
      "Community integration studies",
      "Policy recommendations",
      "Academic partnerships",
    ],
  },
  {
    id: "uwi-initiatives",
    title: "Other UWI Initiatives & Teaching",
    icon: BookOpen,
    description: "A comprehensive overview of additional academic initiatives, teaching contributions, and institutional programs developed throughout Dr. Brown's distinguished career at UWI.",
    details: [
      "Course development and teaching",
      "Graduate student supervision",
      "Research project leadership",
      "International exchange programs",
      "Professional development workshops",
    ],
  },
]

function EventCard({ event }: { event: typeof events[0] }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="group flex flex-col rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-md">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
        <event.icon className="h-7 w-7" />
      </div>
      <h3 className="mt-6 font-serif text-xl font-semibold text-card-foreground">
        {event.title}
      </h3>
      <p className="mt-3 text-muted-foreground leading-relaxed">
        {event.description}
      </p>
      
      {isExpanded && (
        <ul className="mt-6 space-y-2">
          {event.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
              <span className="text-sm text-muted-foreground">{detail}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6">
        <Button
          variant="link"
          className="text-primary p-0 h-auto"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show less" : "Learn more"}
          {isExpanded ? (
            <ChevronUp className="ml-2 h-4 w-4" />
          ) : (
            <ChevronDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  )
}

export default function SpecialEventsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Special Events
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Explore the significant initiatives, programs, and speaking engagements that have shaped Dr. Claudette Brown's distinguished career.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Initiatives & Programs</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Featured Events & Projects
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Discover the range of special events, research initiatives, and community programs developed throughout Dr. Brown's career.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Book a Speaking Engagement
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Dr. Claudette Brown is available for speaking engagements, workshops, and consultations. Contact us to discuss your event needs.
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
