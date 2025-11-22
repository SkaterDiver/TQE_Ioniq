"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Atom, Box, Layers, GitCompare, CheckCircle, Menu, X, Target } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "ion-trap", label: "What Are Ion Traps?", icon: Atom },
  { id: "task", label: "The Task", icon: Target },
  { id: "3d-trap", label: "3D RF Paul Trap", icon: Box },
  { id: "2d-trap", label: "Surface Ion RF Trap", icon: Layers },
  { id: "comparison", label: "Comparison", icon: GitCompare },
  { id: "conclusion", label: "Final Results", icon: CheckCircle },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Sort entries by intersection ratio and position
        const visibleEntries = entries.filter(entry => entry.isIntersecting)

        if (visibleEntries.length > 0) {
          // Find the entry with highest intersection ratio
          const mostVisible = visibleEntries.reduce((prev, current) =>
            current.intersectionRatio > prev.intersectionRatio ? current : prev
          )
          setActiveSection(mostVisible.target.id)
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-10% 0px -10% 0px"
      },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsExpanded(false)
    }
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 z-50 md:hidden"
      >
        <Button
          size="icon"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-14 h-14 rounded-full bg-card/80 backdrop-blur-md border border-primary/30 hover:bg-card glow-cyan shadow-lg"
        >
          {isExpanded ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </motion.div>

      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="hidden md:block fixed bottom-8 left-1/2 -translate-x-1/2 z-50"
      >
        <div className="bg-card/80 backdrop-blur-md border border-primary/30 rounded-full px-4 py-3 shadow-2xl glow-cyan">
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "rounded-full transition-all duration-300",
                    isActive ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-muted",
                  )}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  <span className="text-sm">{item.label}</span>
                </Button>
              )
            })}
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Panel */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="md:hidden fixed bottom-24 right-6 z-40"
          >
            <div className="bg-card/95 backdrop-blur-md border border-primary/30 rounded-2xl p-4 shadow-2xl glow-cyan min-w-[280px]">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon
                  const isActive = activeSection === item.id
                  return (
                    <Button
                      key={item.id}
                      variant="ghost"
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "w-full justify-start rounded-lg transition-all duration-300",
                        isActive ? "bg-primary text-primary-foreground hover:bg-primary/90" : "hover:bg-muted",
                      )}
                    >
                      <Icon className="w-4 h-4 mr-3" />
                      <span>{item.label}</span>
                    </Button>
                  )
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
