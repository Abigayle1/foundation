"use client"

import { useState } from "react"
import { Building2, GraduationCap, HeartHandshake,  Presentation, ChevronDown, BookOpen, Shield } from "lucide-react"

const iccfContent = {
  overview: "The Institute for Caribbean Children and Families (ICCF) represents the culmination of Dr. Crawford-Brown's life work. Founded to address the unique challenges facing Caribbean children and families, ICCF provides research, training, advocacy, and direct services to communities across the region.",

}

const uwiSections = [
  {
    id: "training-services",
    title: "Training Services",
    icon: GraduationCap,
    description: "ICCF’s training services are designed to equip professionals with the knowledge and practical skills needed to better support children, families, and communities.",
    bulletPoints: [
      "Play Therapy Training",
      "International Social Work Training",
      "Training on Caribbean Migration",
    ],
    images: [
      "/Media/Image/Training-service-1.jpg",
      "/Media/Image/Training-services-3.png",
      "/Media/Image/Training-service-2.jpg",
    ],
  },
  {
    id: "counselling",
    title: "Counselling",
    icon: HeartHandshake,
    description: "ICCF provides counselling support to help children, families, and individuals address personal, social, and emotional challenges.",
    images:[
      "/Media/Image/Special-events-1.png",
      "/Media/Image/apple-icon.png",
      "/Media/Image/apple-icon.png",
    ]
  },
  {
    id: "materials",
    title: "Materials - ACT NOW Production",
    icon: BookOpen,
    description: "ICCF produces ACT NOW materials to promote awareness, education, and meaningful action in support of children and families.",
    images: [
      "/Media/Image/apple-icon.png",
      "/Media/Image/apple-icon.png",
      "/Media/Image/apple-icon.png",
    ]
  },
  {
    id: "special-events",
    title: "Special Events",
    icon: Presentation,
    description: "ICCF hosts special events that promote learning, engagement, and community support for children, families, and professionals.",
    images: [
      "/Media/Image/Special-events-1.jpg",
      "/Media/Image/Special-events-2.jpg",
      "/Media/Image/Special-events-3.jpg",
    ]
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
  const Icon = section.icon

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-secondary/50"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
            <Icon className="h-6 w-6" />
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
          {/* Displays the section description text */}
          <p className="leading-relaxed text-muted-foreground">
            {section.description}
          </p>

          {"bulletPoints" in section && section.bulletPoints && (
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted-foreground">
              {section.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          )}
          
          {/* Displays images only if this section has an images array */}
          {"images" in section && section.images && (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {section.images.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-xl">
                  <img
                    src={image}
                    alt={`${section.title} image ${index + 1}`}
                    className="h-90 w-90 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default function WorkOtherLivesPage() {
  const [openSections, setOpenSections] = useState<string[]>(["training-services"])

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
              Dr. Claudette Brown&apos;s 
            </h1> 
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">     
              Organization</h1>
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
              <div className="overflow-hidden rounded-2xl">
                 <img
                    src="/Media/image/Dr Claudette Brown.jpg"
                    alt="Dr Claudette Brown Image"
                    className="h-80 w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* ICCF Section*/}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 lg:px-8">
          <div className="max-w-4xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              ICCF Initiatives
            </span>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              ICCF provides professional training, counselling, educational resources, special events, and expert speaking services that support the wellbeing and development of Caribbean children, families, and communities.
            </p>
          </div>

          <div className="mt-12 w-full max-w-5xl space-y-4">
            {uwiSections.map((section) => (
              <ExpandableSection
                key={section.id}
                section={section}
                isOpen={openSections.includes(section.id)}
                onToggle={() => toggleSection(section.id)}/>
            ))}
          </div>
        </div>
      </section>


      {/* Barrel Child Syndrome Section */}
      <section className="bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              The Barrel Child Syndrome & Caribbean Migration
            </h3> <br></br>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              This section highlights Dr. Crawford-Brown&apos;s work exploring the emotional and social impact of Caribbean migration on children and families, especially children separated from migrating parents.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "/Media/Image/apple-icon.png",
              "/Media/Image/apple-icon.png",
              "/Media/Image/apple-icon.png",
              "/Media/Image/apple-icon.png",
              "/Media/Image/apple-icon.png",
              "/Media/Image/apple-icon.png",
            ].map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border"
              >
                <img
                  src={image}
                  alt={`The Barrel Child Syndrome and Caribbean Migration photo ${index + 1}`}
                  className="h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UWI Years Section */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h3 className="text-center font-serif text-3xl font-semibold text-foreground sm:text-4xl">
              The UWI Years
            </h3> <br></br>

            <p className="mx-auto mt-1 max-w-1xl text-left text-lg leading-relaxed text-muted-foreground">
              The UWI Years highlight Dr. Crawford-Brown&apos;s period of academic growth, leadership, and meaningful contribution to education and community development.
            </p>

            <ul className="mx-auto mt-6 grid max-w-1xl grid-cols-1 gap-x-18 gap-y-3 text-left text-muted-foreground sm:grid-cols-[1.0fr_1fr]">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>UWI Violence Prevention Program/The We Cot</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>The Netherlands Project</span>
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>Other UWI Initiatives & Teaching</span>
              </li>
            </ul>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "/Media/Image/apple-icon.png",
              "/Media/Image/apple-icon.png",
              "/Media/Image/apple-icon.png",
              "/Media/Image/apple-icon.png",
              "/Media/Image/apple-icon.png",
              "/Media/Image/apple-icon.png",
            ].map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border"
              >
                <img
                  src={image}
                  alt={`The UWI Years photo ${index + 1}`}
                  className="h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
