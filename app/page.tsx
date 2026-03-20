import Link from "next/link"
import { ArrowRight, BookOpen, Building2, Heart, Newspaper, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const highlights = [
  {
    title: "Autobiography",
    description: "Discover the inspiring journey of Omar W. Brown Jr., from his roots in the Caribbean to becoming a voice for change.",
    href: "/autobiography",
    icon: User,
  },
  {
    title: "ICCF",
    description: "The Institute for Caribbean Children and Family is dedicated to improving the lives of children and families across the region.",
    href: "/organization",
    icon: Building2,
  },
  {
    title: "Publications",
    description: "Explore our collection of books, research papers, and educational materials designed to inspire and educate.",
    href: "/publications",
    icon: BookOpen,
  },
  {
    title: "Newsletters",
    description: "Stay informed with our regular updates on initiatives, events, and stories from the communities we serve.",
    href: "/newsletters",
    icon: Newspaper,
  },
  {
    title: "Foundation",
    description: "Learn about the Omar W. Brown Jr. Foundation and how we work to create lasting positive change.",
    href: "/foundation",
    icon: Heart,
  },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Empowering Communities, Transforming Lives
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Welcome to the official platform of Omar W. Brown Jr. — author, advocate, and founder of the Institute for Caribbean Children and Family. Together, we are building a brighter future for Caribbean communities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
              <Link href="/autobiography">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Learn My Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/foundation">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Support Our Mission
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">About</span>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                A Lifetime Dedicated to Service
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                For over three decades, Omar W. Brown Jr. has been at the forefront of advocacy for Caribbean children and families. His work spans education, community development, and policy reform.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Through the Institute for Caribbean Children and Family (ICCF) and the Omar W. Brown Jr. Foundation, he continues to create lasting impact in communities across the Caribbean and beyond.
              </p>
              <div className="mt-8">
                <Link href="/autobiography">
                  <Button variant="link" className="text-primary p-0 h-auto font-semibold">
                    Read the full story
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <User className="mx-auto h-16 w-16 mb-4 opacity-50" />
                  <p className="text-sm">Author Portrait</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Explore</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Discover Our Work
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              From publications to community programs, explore the many ways we are making a difference.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
            {highlights.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group relative flex flex-col rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-xl font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center text-sm font-medium text-primary">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="font-serif text-2xl font-medium italic text-foreground sm:text-3xl lg:text-4xl leading-relaxed">
              &ldquo;Every child deserves the opportunity to dream, to learn, and to thrive. It is our collective responsibility to ensure they have that chance.&rdquo;
            </p>
            <footer className="mt-8">
              <p className="text-base font-semibold text-primary">Omar W. Brown Jr.</p>
              <p className="text-sm text-muted-foreground">Founder, ICCF & Omar W. Brown Jr. Foundation</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "30+", label: "Years of Service" },
              { value: "50K+", label: "Children Supported" },
              { value: "15+", label: "Publications" },
              { value: "12", label: "Countries Reached" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl font-bold text-primary-foreground lg:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-primary-foreground/80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-secondary px-8 py-16 sm:px-16 lg:px-24">
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Join Us in Making a Difference
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Whether through donations, volunteering, or spreading awareness, your support helps us continue our mission of empowering Caribbean children and families.
              </p>
              <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
                <Link href="/foundation#donate">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Donate Now
                    <Heart className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/newsletters">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Subscribe to Newsletter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
