"use client"

import { useState } from "react"
import { Building2, GraduationCap, Globe, ChevronDown, Users, BookOpen, Shield, Plane } from "lucide-react"

const iccfContent = {
  overview: "The Institute for Caribbean Children and Families (ICCF) represents the culmination of Dr. Crawford-Brown's life work. Founded to address the unique challenges facing Caribbean children and families, ICCF provides research, training, advocacy, and direct services to communities across the region.",
  playTherapy: {
    title: "Play Therapy Training",
    description: "A cornerstone of ICCF's work, the Play Therapy Training Program equips professionals with specialized skills to support children through therapeutic play. This evidence-based approach has transformed how practitioners engage with young clients dealing with trauma, separation, and developmental challenges.",
  },
}

const uwiSections = [
  {
    id: "social-work",
    title: "Social Work Training",
    icon: GraduationCap,
    description: "At the University of the West Indies, Dr. Crawford-Brown established innovative social work training programs that combined academic rigor with practical community engagement. These programs have trained thousands of social workers who now serve communities across the Caribbean.",
  },
  {
    id: "violence-prevention",
    title: "UWI Violence Prevention Programme",
    icon: Shield,
    description: "Recognizing the urgent need to address violence in Caribbean communities, Dr. Crawford-Brown spearheaded the Violence Prevention Programme at UWI. This comprehensive initiative combines research, intervention programs, and community partnerships to create safer environments for children and families.",
  },
  {
    id: "netherlands-project",
    title: "The Netherlands Project",
    icon: Globe,
    description: "An international collaboration that brought Caribbean expertise to the Netherlands, addressing the needs of Caribbean diaspora communities in Europe. This project established lasting partnerships and created frameworks for cross-cultural social work practice.",
  },
  {
    id: "uwi-utrecht",
    title: "From UWI to Utrecht",
    icon: Plane,
    description: "The journey from UWI to Utrecht University represented a significant expansion of Dr. Crawford-Brown's international impact. This collaboration fostered academic exchange, joint research initiatives, and new approaches to understanding migration and family dynamics.",
  },
  {
    id: "browns-utrecht",
    title: "The Browns in Utrecht (Von Trapp Family)",
    icon: Users,
    description: "Affectionately nicknamed the 'Von Trapp Family' during their time in the Netherlands, the Browns brought their characteristic warmth and musical spirit to Utrecht. This period saw the family deeply embedded in Dutch academic and cultural life.",
  },
  {
    id: "paris-trips",
    title: "The Paris Trips",
    icon: Plane,
    description: "Regular excursions to Paris became a cherished family tradition during the European years. These trips combined cultural enrichment with academic conferences, creating memories that blend intellectual pursuits with personal adventure.",
  },
]

function ExpandableSection({
  section,
  isOpen,
  onToggle,
}: {
  section: typeof uwiSections[0]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left hover:bg-secondary/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <section.icon className="h-6 w-6" />
          </div>
          <h3 className="font-serif text-lg font-semibold text-card-foreground">
            {section.title}
          </h3>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="border-t border-border px-6 py-6">
          <p className="text-muted-foreground leading-relaxed">
            {section.description}
          </p>
        </div>
      )}
    </div>
  )
}

export default function WorkOtherLivesPage() {
  const [openSections, setOpenSections] = useState<string[]>(["social-work"])

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Work & Other Lives
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Explore the professional achievements, groundbreaking research, and international collaborations that have defined Dr. Crawford-Brown&apos;s remarkable career.
            </p>
          </div>
        </div>
      </section>

      {/* ICCF Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Building2 className="h-7 w-7" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">Organization</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Institute for Caribbean Children & Families
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {iccfContent.overview}
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="rounded-2xl bg-secondary p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                  {iccfContent.playTherapy.title}
                </h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {iccfContent.playTherapy.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UWI Years Section */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Major Section</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              The UWI Years
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Dr. Crawford-Brown&apos;s tenure at the University of the West Indies marked a transformative period in Caribbean social work education and practice.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-4">
            {uwiSections.map((section) => (
              <ExpandableSection
                key={section.id}
                section={section}
                isOpen={openSections.includes(section.id)}
                onToggle={() => toggleSection(section.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Impact</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              A Legacy of Achievement
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "1000+", label: "Social Workers Trained" },
              { value: "5", label: "Countries of Practice" },
              { value: "20+", label: "Research Publications" },
              { value: "15+", label: "International Partnerships" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="font-serif text-2xl font-medium italic text-primary-foreground sm:text-3xl leading-relaxed">
              &ldquo;The work we do today shapes the futures of generations to come. Every child we help, every family we strengthen, becomes part of a larger tapestry of hope and possibility.&rdquo;
            </p>
            <footer className="mt-8">
              <p className="text-base font-semibold text-primary-foreground">Dr. Claudette Crawford-Brown</p>
              <p className="text-sm text-primary-foreground/80">Founder, ICCF</p>
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
