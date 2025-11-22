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
