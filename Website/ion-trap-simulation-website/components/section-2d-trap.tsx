"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, AlertCircle, TrendingUp } from "lucide-react"

export function Section2DTrap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="2d-trap" ref={ref} className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-secondary/50 bg-secondary/10">
            Simulation 2
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Surface Ion Paul Trap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Microfabricated planar electrode layout with ions floating above the chip surface
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 glow-violet">
                  <Layers className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Microfabricated planar electrode layout where ions float above the chip surface. More compact but
                  presents unique challenges with shallower trap depths.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                    <p className="text-muted-foreground">Planar electrode geometry</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                    <p className="text-muted-foreground">Compact chip-scale design</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                    <p className="text-muted-foreground">Scalable for quantum computing</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-destructive/20 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-destructive/20 flex items-center justify-center mb-4">
                  <AlertCircle className="w-6 h-6 text-destructive" />
                </div>
                <CardTitle>Challenges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Lower trap depth compared to the Paul trap",
                  "Sensitive to stray electric fields",
                  "Complex electrode shape constraints",
                  "Shaping a field direction to create a low pseudopotential zone for the ions",
                ].map((challenge) => (
                  <div key={challenge} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                    <p className="text-muted-foreground">{challenge}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Optimizations */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 glow-cyan">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Optimizations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Electrode Geometry",
                    desc: "Width/spacing parameter sweeps for optimal field configuration",
                  },
                  {
                    title: "RF/DC Ratio Tuning",
                    desc: "Balancing confinement strength with stability regions",
                  },
                  {
                    title: "Pseudopotential Curvature",
                    desc: "Improving trap depth through field shape optimization",
                  },
                  {
                    title: "Micromotion Minimization",
                    desc: "Offset tuning to reduce excess ion motion",
                  },
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-lg bg-muted/30 border border-primary/20">
                    <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Diagram Placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {["SolidWorks Model: 2D Electrode Layout", "2D Potential Map", "Chip Cross-Section Field Lines"].map(
            (placeholder) => (
              <Card key={placeholder} className="bg-card/30 backdrop-blur-sm border-secondary/20">
                <CardContent className="p-6">
                  <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center border border-secondary/20">
                    <div className="text-center space-y-2 p-4">
                      <div className="w-12 h-12 mx-auto rounded-full bg-secondary/20 flex items-center justify-center glow-violet">
                        <Layers className="w-6 h-6 text-secondary" />
                      </div>
                      <p className="text-xs text-muted-foreground">{placeholder}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ),
          )}
        </motion.div>
      </div>
    </section>
  )
}
