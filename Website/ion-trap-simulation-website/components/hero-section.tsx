"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section id="hero" className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center space-y-8"
      >
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-primary mb-2">
            TING'S QUANTUM ENGINEERS
          </h1>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Badge variant="outline" className="px-4 py-2 text-sm border-primary/50 bg-primary/10 glow-cyan">
            Quantum Simulation Study • HardHaq 2025
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight text-balance">
            Optimizing ion traps
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight gradient-text text-balance">
            through simulation.
          </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty"
        >
          A comprehensive study simulating and optimizing 3D RF Paul Traps and 2D Surface Ion Traps. We analyzed
          electrode geometry, RF/DC voltages, trap depth, and ion stability to design optimal configurations for quantum
          computing applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
        >
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 glow-cyan group"
            onClick={() => {
              const section = document.getElementById("ion-trap")
              section?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Explore the Study
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 group bg-transparent"
            onClick={() => {
              const section = document.getElementById("3d-trap")
              section?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            <Play className="mr-2 group-hover:scale-110 transition-transform" />
            View Results
          </Button>
        </motion.div>

        {/* Decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 quantum-pulse" />
      </motion.div>
    </section>
  )
}
