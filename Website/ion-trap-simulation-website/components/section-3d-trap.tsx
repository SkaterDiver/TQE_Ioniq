"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Box, Gauge, AlertCircle, TrendingUp } from "lucide-react"

export function Section3DTrap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const diagrams = [
    {
      label: "3D Pole Trap Model",
      src: "/Pole_trap.png",
    },
    {
      label: "Pole Trap Cross Section",
      src: "/Pole_trap_cross_section.png",
    },
    {
      label: "Pseudopotential Animation",
      src: "/Pole_pseudo.gif",
    },
  ]

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

          {/* Additional Parameters */}
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
                <CardTitle>Additional Parameters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  "Rod radius: 2.915 mm",
                  "Rod length: 41.205 mm",
                  "Rod spacing: 7.809 mm",
                  "Radial AC voltage (radial frequency voltage): 73.299 eV",
                  "Direct current voltage: 15.315 eV",
                  "Endcap radius: 7.264 mm",
                  "Endcap thickness: 0.591 mm",
                  "Endcap distance from trap center: 2.264 mm",
                  "Endcap voltage: 4.219 V",
                  "RF drive frequency: 5.813 mHz",
                ].map((param) => (
                  <div key={param} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    <p className="text-muted-foreground text-sm">{param}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Simulation Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-12"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 glow-cyan">
                <TrendingUp className="w-6 h-6 text-primary" />
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
                  <div className="text-3xl font-bold text-primary">0.184 eV</div>
                  <div className="text-xs text-muted-foreground">depth_eV</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Minimum Potential</div>
                  <div className="text-3xl font-bold text-primary">15.012 eV</div>
                  <div className="text-xs text-muted-foreground">minU_eV</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Maximum Potential</div>
                  <div className="text-3xl font-bold text-primary">15.195 eV</div>
                  <div className="text-xs text-muted-foreground">maxU_eV</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Trap Position (x, y, z)</div>
                  <div className="text-xl font-bold text-primary">
                    0, 5.0×10<sup>-6</sup>, 0.01
                  </div>
                  <div className="text-xs text-muted-foreground">meters</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Offset Distance</div>
                  <div className="text-3xl font-bold text-primary">10.00 mm</div>
                  <div className="text-xs text-muted-foreground">offset_mm</div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">Estimated Power</div>
                  <div className="text-3xl font-bold text-primary">77.20 mW</div>
                  <div className="text-xs text-muted-foreground">P_est_mW</div>
                </div>
              </div>

              <div className="mt-6 p-4 rounded-lg bg-muted/30 border border-primary/20">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Model:</strong> 3d_pole_trap (1).mph |
                  <strong className="text-foreground ml-2">Date:</strong> Nov 21 2025, 23:37
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Visualization Images */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {diagrams.map((item) => (
            <Card key={item.label} className="bg-card/30 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6">
                <Image
                  src={item.src}
                  alt={item.label}
                  width={600}
                  height={600}
                  className="rounded-lg border border-primary/20 object-cover"
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
