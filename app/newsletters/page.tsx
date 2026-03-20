import { Calendar, ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const featuredNewsletter = {
  title: "Building Bridges: Our 2024 Annual Report",
  date: "January 2024",
  summary: "A comprehensive look at our achievements in 2023, including the launch of three new programs, expansion into two additional Caribbean nations, and the stories of families whose lives have been transformed.",
  highlights: [
    "Launched Mental Health Awareness Initiative",
    "Expanded to Barbados and Trinidad & Tobago",
    "Supported 5,000+ children through scholarship programs",
    "Published two new educational resources",
  ],
}

const newsletters = [
  {
    id: 1,
    title: "Community Voices: Stories of Resilience",
    date: "December 2023",
    summary: "Featuring inspiring stories from families in Jamaica, Haiti, and the Dominican Republic who have overcome challenges with the support of ICCF programs.",
  },
  {
    id: 2,
    title: "Education Spotlight: Back to School Success",
    date: "September 2023",
    summary: "Celebrating the start of a new school year with updates on our scholarship recipients and educational initiatives across the region.",
  },
  {
    id: 3,
    title: "Summer Programs Recap",
    date: "August 2023",
    summary: "Highlights from our summer youth development programs, including leadership camps, skills workshops, and community service projects.",
  },
  {
    id: 4,
    title: "Health & Wellness: Mental Health Awareness Month",
    date: "May 2023",
    summary: "Special edition focusing on mental health resources, expert interviews, and community wellness initiatives.",
  },
  {
    id: 5,
    title: "Women in Leadership: Celebrating Caribbean Mothers",
    date: "May 2023",
    summary: "Honoring the incredible mothers and women leaders who are shaping the future of Caribbean families.",
  },
  {
    id: 6,
    title: "New Year, New Beginnings",
    date: "January 2023",
    summary: "Looking ahead to 2023 with updates on strategic plans, new partnerships, and upcoming initiatives.",
  },
  {
    id: 7,
    title: "Year in Review: 2022 Highlights",
    date: "December 2022",
    summary: "Reflecting on a year of growth, impact, and community building across the Caribbean region.",
  },
  {
    id: 8,
    title: "Partnership Spotlight",
    date: "October 2022",
    summary: "Featuring our collaboration with regional governments and international organizations to expand child welfare services.",
  },
]

export default function NewslettersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Newsletters
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Stay connected with our latest news, stories, and updates from across the Caribbean.
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-12 bg-secondary">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-card p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">Subscribe to our newsletter</h3>
                <p className="text-sm text-muted-foreground">Get updates delivered to your inbox</p>
              </div>
            </div>
            <form className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 sm:w-64 rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Newsletter */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">Featured</span>
          <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{featuredNewsletter.date}</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                {featuredNewsletter.title}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {featuredNewsletter.summary}
              </p>
              <div className="mt-8">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Read Full Newsletter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-2xl bg-secondary p-8">
              <h3 className="font-semibold text-foreground">Key Highlights</h3>
              <ul className="mt-4 space-y-4">
                {featuredNewsletter.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Archive */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Archive</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Past Newsletters
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-2">
            {newsletters.map((newsletter) => (
              <article
                key={newsletter.id}
                className="group flex flex-col rounded-2xl bg-card p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <time>{newsletter.date}</time>
                </div>
                <h3 className="mt-3 font-serif text-xl font-semibold text-card-foreground">
                  {newsletter.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {newsletter.summary}
                </p>
                <div className="mt-4">
                  <Button variant="link" className="text-primary p-0 h-auto group-hover:underline">
                    Read newsletter
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Load More
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Never Miss an Update
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Join thousands of subscribers who receive our monthly newsletter featuring stories, updates, and opportunities to get involved.
          </p>
          <form className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full sm:w-80 rounded-md border border-input bg-background px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
              Subscribe Now
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
