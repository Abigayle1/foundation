"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    children: [
      { name: "Autobiography", href: "/autobiography" },
      { name: "Family", href: "/family" },
    ],
  },
  {
    name: "Organization",
    children: [
      { name: "ICCF Organization", href: "/organization" },
    ],
  },
  {
    name: "Work & Services",
    children: [
      { name: "Training Services", href: "/training-services" },
      { name: "Materials (ACT NOW Production)", href: "/materials" },
    ],
  },
  {
    name: "Projects & Events",
    children: [
      { name: "Special Events", href: "/special-events" },
    ],
  },
  { name: "Newsletters", href: "/newsletters" },
]

type NavItem = {
  name: string
  href?: string
  children?: { name: string; href: string }[]
}

function DesktopDropdown({ item }: { item: NavItem }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        {item.name}
        <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-48 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="rounded-lg border border-border bg-background p-2 shadow-lg">
          {item.children?.map((child) => (
            <Link
              key={child.name}
              href={child.href}
              className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {child.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileDropdown({
  item,
  isOpen,
  onToggle,
  onLinkClick,
}: {
  item: NavItem
  isOpen: boolean
  onToggle: () => void
  onLinkClick: () => void
}) {
  return (
    <div>
      <button
        onClick={onToggle}
        className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
      >
        {item.name}
        <ChevronDown
          className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="ml-4 mt-1 space-y-1 border-l border-border pl-4">
          {item.children?.map((child) => (
            <Link
              key={child.name}
              href={child.href}
              className="block rounded-lg py-2 text-sm text-muted-foreground hover:text-primary"
              onClick={onLinkClick}
            >
              {child.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([])

  const toggleDropdown = (name: string) => {
    setOpenDropdowns((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    )
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
    setOpenDropdowns([])
  }

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="font-serif text-xl font-semibold text-primary lg:text-2xl">
                Dr. Claudette Brown
              </span>
            </Link>
          </div>

          <div className="flex lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          <div className="hidden lg:flex lg:items-center lg:gap-x-6">
            {navigation.map((item) =>
              item.children ? (
                <DesktopDropdown key={item.name} item={item} />
              ) : (
                <Link
                  key={item.name}
                  href={item.href!}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link href="/foundation#donate">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Support Us
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile menu - rendered outside header for full-screen overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          {/* Menu panel */}
          <div className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
                <span className="font-serif text-xl font-semibold text-primary">
                  Dr. Claudette Brown
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMobileMenu}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                <div className="space-y-2 py-6">
                  {navigation.map((item) =>
                    item.children ? (
                      <MobileDropdown
                        key={item.name}
                        item={item}
                        isOpen={openDropdowns.includes(item.name)}
                        onToggle={() => toggleDropdown(item.name)}
                        onLinkClick={closeMobileMenu}
                      />
                    ) : (
                      <Link
                        key={item.name}
                        href={item.href!}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-secondary"
                        onClick={closeMobileMenu}
                      >
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
                <div className="py-6">
                  <Link href="/foundation#donate" onClick={closeMobileMenu}>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Support Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
