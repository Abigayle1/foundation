import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const navigation = {
  main: [
    { name: "Who is Claudette Crawford-Brown", href: "/" },
    { name: "Family & Personal Life", href: "/family-personal-life" },
    { name: "Work & Other Lives", href: "/work-other-lives" },
    { name: "Nicole", href: "/nicole" },
    { name: "Janelle", href: "/janelle" },
    { name: "Omari", href: "/omari" },
  ],
  social: [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "LinkedIn", href: "#", icon: Linkedin },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold">
                Dr. Claudette Brown
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
              Dedicated to empowering Caribbean children and families through education, advocacy, and community development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  123 Foundation Way<br />
                  Kingston, Jamaica
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  +1 (876) 555-0123
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  info@omarwbrownjr.org
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="lg:col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="mt-4 flex gap-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-primary-foreground/80 transition-colors hover:text-accent"
                  aria-label={item.name}
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-sm font-medium">Newsletter</h4>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Stay updated with our latest news and initiatives.
              </p>
              <form className="mt-3 flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md bg-primary-foreground/10 px-3 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <button
                  type="submit"
                  className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Dr. Crawford Claudette Brown. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
