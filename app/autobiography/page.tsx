import { User, Quote } from "lucide-react"

const timeline = [
  {
    year: "1955",
    title: "Early Beginnings",
    description: "Born in Kingston, Jamaica, Omar W. Brown Jr. grew up in a close-knit community that valued education and service to others.",
  },
  {
    year: "1973",
    title: "Higher Education",
    description: "Pursued studies in social work and child development, laying the foundation for a lifetime of advocacy.",
  },
  {
    year: "1985",
    title: "Founding ICCF",
    description: "Established the Institute for Caribbean Children and Family, dedicated to improving child welfare across the Caribbean.",
  },
  {
    year: "1995",
    title: "First Publication",
    description: "Published his first book on child development and family dynamics in Caribbean communities.",
  },
  {
    year: "2005",
    title: "International Recognition",
    description: "Received international recognition for his work in child advocacy and community development.",
  },
  {
    year: "2015",
    title: "Foundation Launch",
    description: "Launched the Omar W. Brown Jr. Foundation to expand the reach and impact of his life's work.",
  },
  {
    year: "Present",
    title: "Continuing the Mission",
    description: "Continues to write, speak, and advocate for Caribbean children and families worldwide.",
  },
]

const sections = [
  {
    title: "A Caribbean Childhood",
    content: "Growing up in the vibrant streets of Kingston, Jamaica, Omar learned early the importance of community and family. His parents, both educators, instilled in him a deep respect for learning and a commitment to helping others.",
    image: "childhood",
  },
  {
    title: "The Call to Service",
    content: "After witnessing the challenges faced by children in underserved communities, Omar dedicated his life to child welfare. His journey took him across the Caribbean, where he worked tirelessly to improve conditions for children and families.",
    image: "service",
  },
  {
    title: "Building Institutions",
    content: "Understanding that lasting change requires strong institutions, Omar founded the Institute for Caribbean Children and Family. This organization has become a beacon of hope, providing services, advocacy, and research to support Caribbean communities.",
    image: "institution",
  },
]

export default function AutobiographyPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl text-balance">
              The Story of Omar W. Brown Jr.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              A journey of dedication, service, and unwavering commitment to Caribbean children and families.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Journey</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
              A Life of Purpose
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 h-full w-0.5 bg-border lg:left-1/2 lg:-translate-x-1/2" />

              {timeline.map((item, index) => (
                <div key={item.year} className="relative mb-12 last:mb-0">
                  <div className={`flex items-start gap-8 lg:gap-16 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-4 h-3 w-3 rounded-full bg-accent lg:left-1/2 lg:-translate-x-1/2" />
                    
                    {/* Content */}
                    <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16 lg:text-left'}`}>
                      <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">
                        {item.year}
                      </span>
                      <h3 className="mt-3 font-serif text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden lg:block lg:w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {sections.map((section, index) => (
            <div key={section.title} className={`flex flex-col gap-12 lg:gap-16 ${index > 0 ? 'mt-24' : ''} ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
              <div className="lg:w-1/2">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                  {section.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  {section.content}
                </p>
              </div>
              <div className="lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <User className="mx-auto h-16 w-16 mb-4 opacity-50" />
                      <p className="text-sm capitalize">{section.image}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="relative">
            <Quote className="absolute -top-4 -left-4 h-12 w-12 text-accent/20 lg:-top-8 lg:-left-8 lg:h-16 lg:w-16" />
            <blockquote className="text-center">
              <p className="font-serif text-2xl font-medium italic text-foreground sm:text-3xl leading-relaxed">
                &ldquo;My life has been a testament to the belief that one person, with dedication and purpose, can make a difference. But the real power lies in community — in people coming together for a common cause.&rdquo;
              </p>
              <footer className="mt-8">
                <p className="text-base font-semibold text-primary">Omar W. Brown Jr.</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-primary py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl text-balance">
              Guiding Principles
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
              The values that have guided a lifetime of service.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
            {[
              { title: "Compassion", description: "Meeting people where they are with understanding and empathy." },
              { title: "Integrity", description: "Acting with honesty and transparency in all endeavors." },
              { title: "Service", description: "Putting the needs of children and families first." },
              { title: "Community", description: "Building strong, supportive networks that uplift everyone." },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-serif text-xl font-semibold text-primary-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm text-primary-foreground/80 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
