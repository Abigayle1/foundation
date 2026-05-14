import {User, BookOpen } from "lucide-react"

export default function OmarPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/60">Dr. Claudette Brown&apos;s son</span>
              <h1 className="mt-2 font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
                Omar W. Brown Jr.
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                A young scholar and thinker carrying forward the family legacy of academic excellence, community service, and deep family bonds across generations.
              </p> <br></br>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Year born - Year died
              </p>
            </div>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-primary-foreground/10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-primary-foreground/60">
                  <User className="mx-auto h-24 w-24 mb-4" />
                  <p className="text-sm">Omar W. Brown</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Omar W. Brown Jr. Foundation Gallery */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Omar W. Brown Jr. Foundation
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              A visual look at the Omar Brown&apos;s work, memories, and community impact.
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
                  alt={`Omar W. Brown Jr. Foundation photo ${index + 1}`}
                  className="h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Academic Work */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <BookOpen className="h-7 w-7" />
              </div>
            </div>
            <h2 className="mt-6 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Publications & Academic Work
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Omar&apos;s scholarly contributions reflect his commitment to understanding and addressing issues affecting Caribbean communities.
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
                  alt={`Publications and Academic Work photo ${index + 1}`}
                  className="h-72 w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="font-serif text-2xl font-medium italic text-foreground sm:text-3xl leading-relaxed">
              &ldquo;The lessons learned from family and community are the foundation upon which we build our contributions to the world.&rdquo;
            </p>
          </blockquote>
        </div>
      </section>
    </div>
  )
}
