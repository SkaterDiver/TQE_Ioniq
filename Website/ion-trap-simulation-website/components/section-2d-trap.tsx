"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Layers, AlertCircle, TrendingUp } from "lucide-react"
import Image from "next/image"

export function Section2DTrap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const diagrams = [
    {
      label: "3D Surface Trapped Ion Model",
      src: "/Srf_trap.png",
    },
    {
      label: "Surface Trap Cross Section",
      src: "/Electric_Potential_Graph.png",
    },
    {
      label: "Pseudopotential Animation",
      src: "/Pseudopotential.gif",
    },
  ]

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
            <span className="gradient-text">Surface Ion RF Trap</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Microfabricated planar electrode layout with ions floating above the chip surface
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
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

          {/* Additional Parameters */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 glow-cyan">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Additional Parameters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Width of center DC electrode: 0.1143 mm",
                  "Width of RF electrodes: 0.1929 mm",
                  "Spacing of RF electrodes from center: 0.1929 mm",
                  "RF voltage: 328.5714 V",
                  "DC voltage: 97.1429 V",
                  "Endcap radius: 3.0000 mm",
                  "Endcap thickness: 0.2000 mm",
                  "Endcap distance from trap center: 0.5000 mm",
                  "Endcap voltage: 0.1000 V",
                  "RF drive frequency: 30.0000 MHz",
                  "Total trap length: 1.2143 mm",
                ].map((param) => (
                  <div key={param} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                    <p className="text-muted-foreground text-sm">{param}</p>
                  </div>
                ))}
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

        {/* Simulation Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm border-secondary/30">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 glow-violet">
                <TrendingUp className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Simulation Results</CardTitle>
              <p className="text-sm text-muted-foreground mt-2">
                COMSOL Multiphysics 6.3.0 — Global Evaluation Metrics
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Trap Depth</div>
                  <div className="text-3xl font-bold text-secondary">24.359 eV</div>
                  <div className="text-xs text-muted-foreground">depth_eV</div>
                  <div className="mt-2 px-2 py-1 rounded bg-secondary/20 text-xs text-secondary font-semibold inline-block">
                    2.1× Higher than 3D Trap
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Minimum Potential</div>
                  <div className="text-3xl font-bold text-secondary">135.500 eV</div>
                  <div className="text-xs text-muted-foreground">minU_eV</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Maximum Potential</div>
                  <div className="text-3xl font-bold text-secondary">159.858 eV</div>
                  <div className="text-xs text-muted-foreground">maxU_eV</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Trap Position (x, y, z)</div>
                  <div className="text-xl font-bold text-secondary">
                    0, -3.95×10<sup>-4</sup>, 1.53×10<sup>-4</sup>
                  </div>
                  <div className="text-xs text-muted-foreground">meters</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Offset Distance</div>
                  <div className="text-3xl font-bold text-secondary">0.423 mm</div>
                  <div className="text-xs text-muted-foreground">offset_mm</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Estimated Power</div>
                  <div className="text-3xl font-bold text-secondary">2.19 µW</div>
                  <div className="text-xs text-muted-foreground">P_est_mW</div>
                  <div className="mt-2 px-2 py-1 rounded bg-secondary/20 text-xs text-secondary font-semibold inline-block">
                    32,700× Lower Power
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-secondary/20">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Model:</strong> Surface_trap(v4)1.mph |
                  <strong className="text-foreground ml-2">Date:</strong> Nov 23 2025, 02:02
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* REAL IMAGES (replacing placeholders) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {diagrams.map((item) => (
            <Card key={item.label} className="bg-card/30 backdrop-blur-sm border-secondary/20">
              <CardContent className="p-6">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={600}
                  height={600}
                  className="rounded-lg border border-secondary/20 object-cover"
                  unoptimized={item.src.endsWith('.gif')}
                />
                <p className="text-xs text-muted-foreground mt-3 text-center">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
