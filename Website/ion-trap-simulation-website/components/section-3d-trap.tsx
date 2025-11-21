"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Box, Gauge, AlertCircle, TrendingUp } from "lucide-react"

export function Section3DTrap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="3d-trap" ref={ref} className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10">
            Simulation 1
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Traditional <span className="gradient-text">3D RF Paul Trap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Four RF rod electrodes with two DC endcaps, operating in vacuum for Yb⁺ ion trapping
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Description Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 glow-cyan">
                  <Box className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">4 RF rod electrodes</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">2 DC endcaps</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">Operates in vacuum</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">Designed for Yb⁺ ion trapping</p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <p className="text-muted-foreground">True 3D quadrupole field</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Adjustable Parameters */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-secondary/20 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 glow-violet">
                  <Gauge className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Adjustable Parameters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Rod spacing",
                  "Rod length",
                  "Endcap distance",
                  "RF amplitude and frequency",
                  "DC offset voltages",
                  "Electrode alignment",
                ].map((param) => (
                  <div key={param} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2" />
                    <p className="text-muted-foreground">{param}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-accent/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-accent" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Trap Depth", value: "eV", desc: "Max/min effective potential difference" },
                  { label: "Trap Center", value: "x, y, z", desc: "Spatial alignment coordinates" },
                  { label: "Field Symmetry", value: "Score", desc: "Quadrupole field uniformity" },
                  { label: "Ion Stability", value: "Region", desc: "Stable confinement zone" },
                ].map((metric) => (
                  <div key={metric.label} className="p-4 rounded-lg bg-muted/30 border border-accent/20">
                    <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                    <p className="text-2xl font-bold text-accent mb-1">{metric.value}</p>
                    <p className="text-xs text-muted-foreground/70">{metric.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Challenges & Optimizations */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
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
                  "Numerical instability at high RF",
                  "Mesh resolution vs. compute time",
                  "Maintaining perfect electrode symmetry",
                  "Balancing trap depth with alignment",
                ].map((challenge) => (
                  <div key={challenge} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                    <p className="text-muted-foreground">{challenge}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 glow-cyan">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Optimizations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Mesh refinement improvements",
                  "Automated multi-parameter sweeps",
                  "Gradient-based depth maximization",
                  "Compensation algorithms for distortion",
                ].map((optimization) => (
                  <div key={optimization} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <p className="text-muted-foreground">{optimization}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Diagram Placeholders */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {["SolidWorks 3D Model: RF Rod Assembly", "Potential Surface Plot", "Field Symmetry Heatmap"].map(
            (placeholder) => (
              <Card key={placeholder} className="bg-card/30 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="aspect-square bg-muted/50 rounded-lg flex items-center justify-center border border-primary/20">
                    <div className="text-center space-y-2 p-4">
                      <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center glow-cyan">
                        <Box className="w-6 h-6 text-primary" />
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
