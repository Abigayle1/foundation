import Link from "next/link"
import { ArrowRight,HeartHandshake, Users, Heart, Briefcase } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
                Who is Claudette Crawford-Brown?
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Dr. Claudette Crawford-Brown, PhD, OD, is a distinguished
                scholar, advocate, and pioneer in Caribbean child and family
                studies. Her life&apos;s work has transformed how we understand
                and support children and families across the Caribbean and
                beyond.
              </p>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 flex-wrap">
                <Link href="/family-personal-life">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-background text-foreground hover:bg-background/90"
                  >
                    Family & Personal Life
                    <Heart className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/work-other-lives">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary-foreground  hover:text-primary-foreground text-primary">
                    Organization 
                    <Briefcase className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-primary-foreground/10">
              <img
                src="/Media/Image/Dr Claudette Brown.jpg"
                alt="Dr. Claudette Crawford-Brown"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Overview
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              A Life of Purpose and Impact
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Born in Jamaica, Dr. Claudette Crawford-Brown has dedicated her
                life to understanding and addressing the unique challenges faced
                by Caribbean children and families. Her groundbreaking research
                on the &ldquo;Barrel Child&rdquo; phenomenon brought
                international attention to the emotional impact of parental
                migration on children left behind.
              </p>
              <p>
                As a professor and advocate, she has established
                innovative programs at the University of the West Indies, and
                founded the Institute for Caribbean Children and Families
                (ICCF).
              </p>
              <p>
                Her work spans continents, from Jamaica to the Netherlands, the
                United States to France, always with the singular focus of
                improving the lives of children and strengthening family bonds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life Pillars - Links to Main Sections */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">
              Explore Her Story
            </span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Three Paths, One Legacy
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Discover the personal journey and professional achievements that
              define Dr. Crawford-Brown&apos;s remarkable life.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Family & Personal Life Card */}
            <Link
              href="/family-personal-life"
              className="group relative flex flex-col rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Users className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-card-foreground">
                Life & Legacy
              </h3>
              <p className="mt-4 flex-1 text-muted-foreground leading-relaxed">
                Journey through the personal milestones, family adventures, and
                cherished moments that have shaped Dr. Crawford-Brown&apos;s
                life outside academia.
              </p>              
              <div className="mt-8 flex items-center text-sm font-medium text-primary">
                Explore Personal Life
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Work & Other Lives Card */}
            <Link
              href="/work-other-lives"
              className="group relative flex flex-col rounded-2xl bg-card p-8 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Briefcase className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-card-foreground">
                Work & Other Lives
              </h3>
              <p className="mt-4 flex-1 text-muted-foreground leading-relaxed">
                Explore the professional achievements, groundbreaking research,
                and international collaborations that have defined her career.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Institute for Caribbean Children & Families
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  The Barrel Child Syndrome & Caribbean Migration
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  The UWI Years
                </li>
              </ul>
              <div className="mt-8 flex items-center text-sm font-medium text-primary">
                Explore Professional Life
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            {/* Omar W. Brown Foundation Card */}
            <Link
              href="/omari"
              className="group relative flex flex-col rounded-2xl bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <HeartHandshake className="h-7 w-7" />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-semibold text-card-foreground">
                Omar W. Brown Jr. Foundation
              </h3>

              <p className="mt-4 flex-1 text-muted-foreground leading-relaxed">
                Explore the story, memories, and community impact connected to the Omar W. Brown Jr. Foundation and its continued legacy of service.
              </p>

              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Foundation Gallery
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Publications & Academic Work
                </li>
              </ul>
              <div className="mt-13 flex items-center text-sm font-medium text-primary">
                Explore Foundation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <blockquote className="text-center">
            <p className="font-serif text-2xl font-medium italic text-foreground sm:text-3xl lg:text-4xl leading-relaxed">
              &ldquo;Every child deserves the opportunity to dream, to learn,
              and to thrive. It is our collective responsibility to ensure they
              have that chance.&rdquo;
            </p>

          </blockquote>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "35+", label: "Years of Service" },
              { value: "50K+", label: "Children Supported" },
              { value: "20+", label: "Publications" },
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
    </div>
  );
}
