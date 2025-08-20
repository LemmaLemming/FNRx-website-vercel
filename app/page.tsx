"use client"

import type React from "react"
import { useState, useEffect } from "react"

// ---------- Icon Wrapper ----------
const Icon = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {children}
  </svg>
)

// ---------- Individual Icons ----------
const UsersIcon = (props: { className?: string }) => (
  <Icon {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </Icon>
)

const ZapIcon = (props: { className?: string }) => (
  <Icon {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </Icon>
)

const ShieldIcon = (props: { className?: string }) => (
  <Icon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </Icon>
)

const HeartHandshakeIcon = (props: { className?: string }) => (
  <Icon {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.82 2.94 0l.06-.06L12 11l2.96-2.96a2.17 2.17 0 0 0 0-3.08c-.82-.82-2.13-.82-2.94 0l-.06.06L12 5Z" />
  </Icon>
)

const MenuIcon = (props: { className?: string }) => (
  <Icon {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </Icon>
)

const XIcon = (props: { className?: string }) => (
  <Icon {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </Icon>
)

// ---------- Data ----------
const navLinks = [
  { href: "#why-we-exist", label: "Our Story" },
  { href: "#what-we-do", label: "Our Solution" },
  { href: "#who-we-are", label: "Our Team" },
]

const features = [
  {
    icon: <UsersIcon className="w-8 h-8 text-cyan-400" />,
    title: "Empower Individuals",
    description: "We provide people with the tools to access critical information and services.",
  },
  {
    icon: <ZapIcon className="w-8 h-8 text-cyan-400" />,
    title: "Streamline Professional Workflows",
    description: "Helping professionals save time and focus on what matters most.",
  },
  {
    icon: <ShieldIcon className="w-8 h-8 text-cyan-400" />,
    title: "Build Trust Through Transparency",
    description: "Ensuring clarity, security, and fairness at every step.",
  },
]

// ---------- Header ----------
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen ? "bg-gray-900/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
          FNRx
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-cyan-400 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-block bg-cyan-500 text-white font-bold py-2 px-5 rounded-full hover:bg-cyan-600 transition-all transform hover:scale-105"
        >
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gray-900/95">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-full hover:bg-cyan-600 transition-all transform hover:scale-105 mt-4"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

// ---------- Sections ----------
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center text-white bg-gray-900 overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <img src="/abstract-network.png" alt="Abstract background" className="w-full h-full object-cover" />
    </div>
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900 to-gray-900"></div>

    <div className="container mx-auto px-6 text-center z-10">
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 mb-10">
        We hope to design intelligent platforms that dismantle systemic barriers, empower individuals, and
        create pathways to essential services.
      </p>
      <a
        href="#contact"
        className="inline-block bg-transparent border-2 border-gray-500 text-gray-300 font-bold py-3 px-8 rounded-full hover:bg-gray-800 hover:border-gray-700 transition-all text-lg"
      >
        Connect With Us
      </a>
    </div>
  </section>
)

const WhyWeExist = () => (
  <section id="why-we-exist" className="py-20 md:py-32 bg-gray-900 text-white">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-2xl md:text-3xl font-bold mb-6">Bridging the Information Gap</h3>
        <p className="text-gray-400 mb-4">
          In a world of data, critical information often remains fragmented and out of reach for those who need it most.
        </p>
        <p className="text-gray-400">
          We started as <i>Team 10</i> at the Island Health Code Hack event, tackling real-world healthcare challenges.
        </p>
      </div>
      <img
        src="/ch123.png"
        alt="Diverse team collaborating"
        className="rounded-lg shadow-2xl shadow-cyan-500/10"
      />
    </div>
  </section>
)

const WhatWeDo = () => (
  <section id="what-we-do" className="py-20 md:py-32 bg-gray-900 text-white">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-2xl md:text-3xl font-bold mb-12">What We Aim to Do</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, i) => (
          <div
            key={i}
            className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 hover:border-cyan-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all"
          >
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-700 mb-6 mx-auto">
              {feature.icon}
            </div>
            <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const WhoWeAre = () => {
  const teamComposition = [
    "Designers who craft intuitive user experiences.",
    "Builders who engineer secure and scalable platforms.",
    "Healthcare Workers who bring real-world insights.",
    "Community Supporters who ensure cultural safety and relevance.",
  ]

  const principles = [
    {
      icon: <HeartHandshakeIcon className="w-6 h-6 text-cyan-400" />,
      title: "Cultural Safety",
      description:
        "We create respectful, anti-racist environments where Indigenous peoples and all communities feel safe and valued.",
    },
    {
      icon: <UsersIcon className="w-6 h-6 text-cyan-400" />,
      title: "Collective Ownership",
      description: "We share ownership of our process, decisions, and outcomes with inclusivity.",
    },
    {
      icon: <ZapIcon className="w-6 h-6 text-cyan-400" />,
      title: "Strength-Based Collaboration",
      description:
        "We believe people do their best work on what brings them joy, and we foster that growth and connection.",
    },
  ]

  return (
    <section id="who-we-are" className="py-20 md:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-12">Our Team</h3>
          <p className="text-gray-400 max-w-3xl mx-auto">
            We are a diverse collective of innovators, bringing together unique skills and perspectives.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <img
            src="/team10.png"
            alt="A diverse group of professionals"
            className="rounded-lg shadow-2xl shadow-cyan-500/10"
          />
          <div className="space-y-6">
            {teamComposition.map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 bg-cyan-500 rounded-full mt-1 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10">Our Guiding Principles</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {principles.map((p, i) => (
              <div key={i} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <div className="flex items-center space-x-4 mb-4">{p.icon}<h4 className="text-xl font-bold">{p.title}</h4></div>
                <p className="text-gray-400">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------- Footer ----------
const Footer = () => (
  <footer id="contact" className="bg-gray-900 text-gray-400 border-t border-gray-800">
    <div className="container mx-auto px-6 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Get In Touch</h2>
      <p className="max-w-xl mx-auto mb-8">
        We're always open to collaboration and new ideas. Reach out to learn more.
      </p>
      <a
        href="mailto:contact@fnrx.org"
        className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all transform hover:scale-105 text-lg mb-10"
      >
        contact@fnrx.org
      </a>
      <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} FNRx. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

// ---------- Main App ----------
export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="bg-gray-900 font-sans">
      <Header />
      <main>
        <Hero />
        <WhyWeExist />
        <WhatWeDo />
        <WhoWeAre />
      </main>
      <Footer />
    </div>
  )
}
