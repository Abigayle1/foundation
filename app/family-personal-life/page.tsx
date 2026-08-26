import { User, MapPin, Home, Heart } from "lucide-react"

export default function FamilyPersonalLifePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Family & Personal Life
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              A journey through the personal milestones, family adventures, and cherished moments that have shaped Dr. Crawford-Brown&apos;s life beyond academia.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Life Overview */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">Personal Life</span>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                A Life Rich in Love and Adventure
              </h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Beyond her professional achievements, Dr. Claudette Crawford-Brown is a devoted mother, grandmother, and family matriarch. Her personal life is marked by the same dedication, warmth, and purposefulness that defines her professional work.
                </p>
                <p>
                  The Brown family has journeyed across continents, from Jamaica to the United States and Europe, creating memories and building a legacy of love, education, and service wherever they go.
                </p>
              </div>
            </div>
           
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <img
                src="/Media/Image/Dr.Brown-photo.jpg"
                alt="Family portrait"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Family Gallery */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Family Gallery
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A visual look at the family&apos;s journey, milestones, and cherished moments across different chapters of life.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "/Media/Image/Family-1.jpg",
              "/Media/Image/Family-2.jpg",
              "/Media/Image/Family-3.jpg",
              "/Media/Image/Family-4.jpg",
              "/Media/Image/Family-5.jpg",
              "/Media/Image/Family-6.jpg",
            ].map((image, index) => (
              <div key={index} className="overflow-hidden rounded-2xl bg-muted shadow-sm">
                <img
                  src={image}
                  alt={`Family Gallery Photo ${index + 1}`}
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
