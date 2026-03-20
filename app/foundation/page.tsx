import Link from "next/link"
import { Heart, Target, Users, GraduationCap, Home as HomeIcon, Sparkles, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const initiatives = [
  {
    title: "Scholarship Program",
    description: "Providing educational scholarships to deserving students across the Caribbean, ensuring access to quality education regardless of economic circumstances.",
    icon: GraduationCap,
  },
  {
    title: "Family Support Centers",
    description: "Establishing community centers that offer counseling, parenting resources, and family services to strengthen household foundations.",
    icon: HomeIcon,
  },
  {
    title: "Youth Empowerment",
    description: "Leadership development, mentorship programs, and skills training to prepare young people for successful futures.",
    icon: Sparkles,
  },
  {
    title: "Community Health",
    description: "Health screenings, wellness education, and mental health support services for underserved communities.",
    icon: Heart,
  },
]

const donationTiers = [
  {
    amount: "$25",
    impact: "Provides school supplies for one child for a year",
  },
  {
    amount: "$50",
    impact: "Funds a family counseling session",
  },
  {
    amount: "$100",
    impact: "Supports a youth leadership workshop",
  },
  {
    amount: "$250",
    impact: "Sponsors a community health screening event",
  },
  {
    amount: "$500",
    impact: "Provides a partial scholarship for one semester",
  },
  {
    amount: "$1,000",
    impact: "Fully funds a child's education for one year",
  },
]

const goals = [
  "Expand scholarship programs to reach 10,000 students by 2025",
  "Establish Family Support Centers in all 12 Caribbean nations",
  "Launch a comprehensive mental health initiative across the region",
  "Train 500 community leaders in child welfare best practices",
  "Develop partnerships with 50 additional regional organizations",
]

export default function FoundationPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              Omar W. Brown Jr. Foundation
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Continuing the legacy of service and advocacy for Caribbean children and families.
            </p>
            <div className="mt-10">
              <a href="#donate">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Donate Now
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-sm font-semibold uppercase tracking-wider text-accent">About the Foundation</span>
              <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                A Vision for Lasting Change
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                The Omar W. Brown Jr. Foundation was established in 2015 to expand and sustain the work begun by the Institute for Caribbean Children and Family (ICCF). The Foundation serves as the philanthropic arm, raising funds and resources to support programs that transform lives.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Through strategic partnerships, community engagement, and dedicated funding, the Foundation ensures that the mission of supporting Caribbean children and families continues for generations to come.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Users className="mx-auto h-16 w-16 mb-4 opacity-50" />
                  <p className="text-sm">Foundation Team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Goals */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Mission */}
            <div className="rounded-2xl bg-card p-8 lg:p-12">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="mt-6 font-serif text-2xl font-bold text-card-foreground">
                Our Mission
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                To mobilize resources and partnerships that enable sustainable programs for the education, health, and well-being of Caribbean children and families, creating opportunities for growth and prosperity.
              </p>
            </div>

            {/* Goals */}
            <div className="rounded-2xl bg-card p-8 lg:p-12">
              <h2 className="font-serif text-2xl font-bold text-card-foreground">
                Strategic Goals
              </h2>
              <ul className="mt-6 space-y-4">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Our Work</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Key Initiatives
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Focused programs that create measurable impact in the lives of children and families.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {initiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="relative flex flex-col rounded-2xl bg-secondary p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <initiative.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">
                  {initiative.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Make a Difference Today
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              Your donation directly supports programs that change lives. Every contribution, no matter the size, makes an impact.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {donationTiers.map((tier) => (
              <div
                key={tier.amount}
                className="rounded-2xl bg-primary-foreground/10 p-6 text-center"
              >
                <p className="font-serif text-3xl font-bold text-primary-foreground">
                  {tier.amount}
                </p>
                <p className="mt-3 text-sm text-primary-foreground/80">
                  {tier.impact}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              Donate Now
              <Heart className="ml-2 h-4 w-4" />
            </Button>
            <p className="mt-4 text-sm text-primary-foreground/60">
              All donations are tax-deductible. The Foundation is a registered 501(c)(3) nonprofit organization.
            </p>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Get Involved</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              Other Ways to Support
            </h2>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                title: "Volunteer",
                description: "Share your time and skills with communities in need. We offer both local and international volunteer opportunities.",
              },
              {
                title: "Corporate Partnership",
                description: "Partner with us to make a collective impact. We offer sponsorship and partnership opportunities for businesses.",
              },
              {
                title: "Spread the Word",
                description: "Share our mission with your network. Follow us on social media and help amplify our message.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/organization">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn More About Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Have Questions?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            We would love to hear from you. Whether you want to learn more about our programs, discuss partnership opportunities, or simply connect, our team is here to help.
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
