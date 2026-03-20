"use client"

import { useState } from "react"
import { BookOpen, FileText, Video, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"

const categories = [
  { id: "all", name: "All" },
  { id: "books", name: "Books" },
  { id: "research", name: "Research Papers" },
  { id: "guides", name: "Educational Guides" },
]

const publications = [
  {
    id: 1,
    title: "Raising Resilient Children in the Caribbean",
    category: "books",
    year: "2022",
    description: "A comprehensive guide for parents and educators on nurturing resilience and emotional intelligence in Caribbean children.",
    type: "Book",
  },
  {
    id: 2,
    title: "Family Dynamics in Caribbean Communities",
    category: "books",
    year: "2019",
    description: "An exploration of the unique family structures and dynamics that shape Caribbean societies and their impact on child development.",
    type: "Book",
  },
  {
    id: 3,
    title: "Child Welfare Policies: A Caribbean Perspective",
    category: "research",
    year: "2021",
    description: "A research paper analyzing child welfare policies across Caribbean nations and recommendations for improvement.",
    type: "Research Paper",
  },
  {
    id: 4,
    title: "The Caribbean Child: Development and Challenges",
    category: "books",
    year: "2015",
    description: "Omar W. Brown Jr.'s seminal work on child development challenges specific to the Caribbean region.",
    type: "Book",
  },
  {
    id: 5,
    title: "Educator's Handbook: Supporting At-Risk Youth",
    category: "guides",
    year: "2020",
    description: "A practical guide for teachers and administrators on identifying and supporting at-risk students in Caribbean schools.",
    type: "Educational Guide",
  },
  {
    id: 6,
    title: "Community-Based Approaches to Child Protection",
    category: "research",
    year: "2018",
    description: "Research findings on effective community-driven child protection strategies in Caribbean contexts.",
    type: "Research Paper",
  },
  {
    id: 7,
    title: "Mental Health in Caribbean Families",
    category: "books",
    year: "2023",
    description: "Addressing the stigma and challenges of mental health in Caribbean households with practical strategies for families.",
    type: "Book",
  },
  {
    id: 8,
    title: "Parent's Guide to Early Childhood Education",
    category: "guides",
    year: "2017",
    description: "A resource for parents on supporting their child's educational journey from birth to age five.",
    type: "Educational Guide",
  },
  {
    id: 9,
    title: "Impact Assessment: ICCF Programs 2010-2020",
    category: "research",
    year: "2021",
    description: "A comprehensive assessment of ICCF program outcomes over a decade of service.",
    type: "Research Paper",
  },
]

export default function PublicationsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPublications = activeCategory === "all"
    ? publications
    : publications.filter(pub => pub.category === activeCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Publications & Materials
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Explore our collection of books, research papers, and educational materials designed to support Caribbean children and families.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <BookOpen className="mx-auto h-16 w-16 mb-4 opacity-50" />
                  <p className="text-sm">Book Cover</p>
                </div>
              </div>
            </div>
            <div>
              <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                Featured Publication
              </span>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Mental Health in Caribbean Families
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">Published 2023</p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                In his latest work, Omar W. Brown Jr. tackles one of the most pressing issues facing Caribbean families today: mental health. This groundbreaking book addresses the stigma surrounding mental illness, provides practical strategies for families, and offers hope for healthier communities.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Drawing on decades of experience and extensive research, this book is an essential resource for parents, educators, healthcare providers, and policymakers.
              </p>
              <div className="mt-8">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Order Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Publications */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Library</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              All Publications
            </h2>
          </div>

          {/* Filter */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            <Filter className="h-5 w-5 text-muted-foreground" />
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={activeCategory === category.id ? "bg-primary text-primary-foreground" : ""}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Grid */}
          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {filteredPublications.map((publication) => (
              <div
                key={publication.id}
                className="flex flex-col rounded-2xl bg-card p-6 shadow-sm"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      {publication.category === "books" ? (
                        <BookOpen className="mx-auto h-12 w-12 mb-2 opacity-50" />
                      ) : publication.category === "research" ? (
                        <FileText className="mx-auto h-12 w-12 mb-2 opacity-50" />
                      ) : (
                        <Video className="mx-auto h-12 w-12 mb-2 opacity-50" />
                      )}
                      <p className="text-xs">Cover</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-block rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                    {publication.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{publication.year}</span>
                </div>
                <h3 className="font-serif text-lg font-semibold text-card-foreground">
                  {publication.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {publication.description}
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
            Interested in Our Publications?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Contact us for bulk orders, academic inquiries, or to request review copies. We are committed to making our resources accessible to educators, researchers, and organizations.
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
