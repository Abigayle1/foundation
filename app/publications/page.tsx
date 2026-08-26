import { BookOpen, FileText, Newspaper } from "lucide-react"

const publicationSections = [
  {
    id: "books-and-publications",
    title: "Books & Publications",
    icon: BookOpen,
    description:
      "Explore written works and published materials that reflect Dr. Crawford-Brown’s contribution to Caribbean child and family studies.",
    images: [
      "/Media/Image/publication-1.jpg",
      "/Media/Image/publication-2.jpg",
      "/Media/Image/publication-3.jpg",
      "/Media/Image/publication-3.jpg",
      "/Media/Image/publication-3.jpg",
      "/Media/Image/publication-3.jpg",
    ],
  },
]

export default function PublicationsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Publications
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Explore the scholarly work, research, and resources through which Dr. Crawford-Brown has contributed to learning, awareness, and community development.
            </p>
          </div>
        </div>
      </section>

      {/* Publication Sections */}
      {publicationSections.map((section, index) => {
        const Icon = section.icon
        const isEven = index % 2 === 0

        return (
          <section
            key={section.id}
            className={`${isEven ? "bg-background" : "bg-secondary"} py-24 lg:py-32`}
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <div className="flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                </div>

                <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  {section.title}
                </h2>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {section.description}
                </p>
              </div>

              <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.images.map((image, imageIndex) => (
                  <div
                    key={image}
                    className="overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border"
                  >
                    <img
                      src={image}
                      alt={`${section.title} photo ${imageIndex + 1}`}
                      className="h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
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