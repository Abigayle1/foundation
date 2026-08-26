"use client"

import { useState } from "react"
import {
  BookOpen,
  GraduationCap,
  HeartHandshake,
  Users,
  Briefcase,
  Presentation,
  BookHeart,
} from "lucide-react"

const productCategories = [
  {
    id: "act-now",
    title: "ACT Now Counselling Materials",
    icon: HeartHandshake,
    description:
      "Books and resources focused on children, family relationships, parenting, and emotional wellbeing.",
    books: [
      "/Media/Image/children-family-1.jpg",
      "/Media/Image/children-family-2.jpg",
      "/Media/Image/children-family-3.jpg",
      "/Media/Image/children-family-4.jpg",
      "/Media/Image/children-family-5.jpg",
      "/Media/Image/children-family-6.jpg",
    ],
  },
  {
    id: "peer-mediation",
    title: "Peer Mediation Tools & Resources",
    icon: Users,
    description:
      "Publications exploring migration, separation, family bonds, and the experiences of Caribbean children and families.",
    books: [
      "/Media/Image/migration-1.jpg",
      "/Media/Image/migration-2.jpg",
      "/Media/Image/migration-3.jpg",
      "/Media/Image/migration-4.jpg",
      "/Media/Image/migration-5.jpg",
      "/Media/Image/migration-6.jpg",
    ],
  },
  {
    id: "parenting-kits",
    title: "Parenting Tool Kits",
    icon: GraduationCap,
    description:
      "Academic books, research-based materials, and scholarly work connected to social work, education, and Caribbean development.",
    books: [
      "/Media/Image/research-book-1.jpg",
      "/Media/Image/research-book-2.jpg",
      "/Media/Image/research-book-3.jpg",
      "/Media/Image/research-book-4.jpg",
      "/Media/Image/research-book-5.jpg",
      "/Media/Image/research-book-6.jpg",
    ],
  },
  {
    id: "clinical-cert",
    title: "Clinical Social Work-Tips for Certification",
    icon: BookOpen,
    description:
      "Recently added books, resources, and educational materials available for families, professionals, and communities.",
    books: [
      "/Media/Image/new-product-1.jpg",
      "/Media/Image/new-product-2.jpg",
      "/Media/Image/new-product-3.jpg",
      "/Media/Image/new-product-4.jpg",
      "/Media/Image/new-product-5.jpg",
      "/Media/Image/new-product-6.jpg",
    ],
  },
]

const serviceCategories = [
  {
    id: "puppet-shows",
    title: "Puppet Shows for Schools & Other Institutions",
    icon: BookHeart,
    description:
      "Professional training services designed to equip individuals and organizations with practical skills for supporting children, families, and communities.",
    books: [
      "/Media/Image/training-service-1.jpg",
      "/Media/Image/training-service-2.jpg",
      "/Media/Image/training-service-3.jpg",
      "/Media/Image/training-service-4.jpg",
      "/Media/Image/training-service-5.jpg",
      "/Media/Image/training-service-6.jpg",
    ],
  },
  {
    id: "speakers-bureau",
    title: "Speakers Bureau",
    icon: HeartHandshake,
    description:
      "Supportive counselling services focused on emotional wellbeing, family relationships, and personal development.",
    books: [
      "/Media/Image/counselling-service-1.jpg",
      "/Media/Image/counselling-service-2.jpg",
      "/Media/Image/counselling-service-3.jpg",
      "/Media/Image/counselling-service-4.jpg",
      "/Media/Image/counselling-service-5.jpg",
      "/Media/Image/counselling-service-6.jpg",
    ],
  },
]

export default function ProductsServicesPage() {
  const [viewType, setViewType] = useState<"products" | "services">("products")
  const [selectedCategory, setSelectedCategory] = useState("")

  const activeCategories =
    viewType === "products" ? productCategories : serviceCategories

  const handleViewTypeChange = (type: "products" | "services") => {
    setViewType(type)
    setSelectedCategory("")
  }

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)

    if (categoryId) {
      const section = document.getElementById(categoryId)
      section?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Products & Services
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Explore books, educational materials, resources, and professional
              services produced by Dr. Claudette Crawford-Brown.
            </p>
          </div>
        </div>
      </section>

      {/* View Selector */}
      <section className="bg-secondary py-12">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border">
            <div className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                What would you like to view?
              </span>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => handleViewTypeChange("products")}
                  className={`rounded-xl border px-6 py-5 text-left transition-all ${
                    viewType === "products"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6" />
                    <div>
                      <p className="font-serif text-xl font-semibold">
                        Products
                      </p>
                      <p className="mt-1 text-sm opacity-80">
                        View books, publications, and educational resources.
                      </p>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => handleViewTypeChange("services")}
                  className={`rounded-xl border px-6 py-5 text-left transition-all ${
                    viewType === "services"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:bg-secondary"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-6 w-6" />
                    <div>
                      <p className="font-serif text-xl font-semibold">
                        Services
                      </p>
                      <p className="mt-1 text-sm opacity-80">
                        View training, counselling, and speaking services.
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            {/* Product Category Dropdown - only shows when Products is selected */}
            {viewType === "products" && (
              <div className="mt-8">
                <label
                  htmlFor="category"
                  className="block text-sm font-semibold uppercase tracking-wider text-accent"
                >
                  Jump to a Product Category
                </label>

                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="mt-3 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Select a product category</option>

                  {productCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Active Category Sections */}
      {activeCategories.map((category, index) => {
        const Icon = category.icon
        const isEven = index % 2 === 0

        return (
          <section
            key={category.id}
            id={category.id}
            className={`${
              isEven ? "bg-background" : "bg-secondary"
            } scroll-mt-24 py-24 lg:py-32`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  {category.title}
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>

              <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.books.map((book, bookIndex) => (
                  <div
                    key={`${category.id}-${bookIndex}`}
                    className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border"
                  >
                    <img
                      src={book}
                      alt={`${category.title} item ${bookIndex + 1}`}
                      className="h-80 w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}
    </div>
  )
}