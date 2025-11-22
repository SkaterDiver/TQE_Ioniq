"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Gauge, Zap, MapPin, Ruler, Activity, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function SectionTask() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [expandedMetric, setExpandedMetric] = useState<string | null>(null)

  const metrics = [
    {
      metric: "Trap Depth",
      variable: "depth_eV",
      icon: Zap,
      color: "primary",
      meaning: "The trap depth in electronvolts. Represents how strongly the ion is confined.",
      calculation:
        "Computed as the difference between the maximum and minimum of the effective potential within the interior vacuum region.",
      importance:
        "A deeper trap is generally more stable and robust against stray fields, noise, or thermal motion.",
    },
    {
      metric: "Lowest Field Region",
      variable: "minU_eV",
      icon: Activity,
      color: "secondary",
      meaning: "The minimum effective potential inside the trap.",
      calculation: "Evaluated using the pseudo-potential + DC potential at the trap center.",
      importance:
        "Helps verify that a well-defined potential well exists and that the trap isn't shallow or irregular.",
    },
    {
      metric: "Highest Field Region",
      variable: "maxU_eV",
      icon: Activity,
      color: "accent",
      meaning: "The maximum effective potential inside the interior vacuum region.",
      calculation: "Evaluated by scanning the interior region for the highest potential value.",
      importance: "Defines the 'ceiling' of the trap, used in computing trap depth.",
    },
    {
      metric: "Position",
      variable: "trap_x, trap_y, trap_z",
      icon: MapPin,
      color: "primary",
      meaning: "The x, y, and z coordinates of the trap minimum.",
      calculation:
        "Determined using nonlocal ops that locate the minimum of the effective potential within the interior vacuum.",
      importance:
        "Shows the exact location of the trapped ion. Important for identifying asymmetries or misalignment.",
    },
    {
      metric: "Trap Offset",
      variable: "offset_mm",
      icon: Ruler,
      color: "secondary",
      meaning: "The distance (in millimeters) between the trap center and the designed geometric center.",
      calculation:
        "Computed as the Euclidean distance between the trap minimum and the nominal trap center coordinate.",
      importance:
        "Lower offset means better charge symmetry and stability. High offsets indicate unbalanced geometry or misalignment.",
    },
    {
      metric: "Estimated Power",
      variable: "P_est_mW",
      icon: Gauge,
      color: "accent",
      meaning: "Estimated RF power from the EV solver reported in milliwatts.",
      calculation:
        "A simplified estimate derived from RF voltage magnitude by scaling parameters based on existing gds/rms solver files. (Not physically exact; intended for relative comparison.)",
      importance:
        "Provides a way to compare efficiency—lower required power for similar depth is desirable.",
    },
  ]

  const toggleMetric = (metric: string) => {
    setExpandedMetric(expandedMetric === metric ? null : metric)
  }

  return (
    <section id="task" ref={ref} className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/50 bg-primary/10">
            Research Objective
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The <span className="gradient-text">Task</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Understanding and optimizing key performance metrics for ion trap configurations
          </p>
        </motion.div>

        {/* Placeholder Section - Now at the top */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-secondary/20">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4 glow-violet">
                <Target className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle>Objective</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Our objective is to design, simulate, and optimize a 3D RF Paul trap in COMSOL by experimenting with electrode geometry and voltages to understand and improve the electrostatic and pseudopotential landscapes that confine a chain of Yb⁺ ions. We did this using optimization techniques to update the values of six parameters shown below.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* The Adjustable Parameters - Now with grid layout and toggleable */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 glow-cyan">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Trap Metrics - How We Measure an Ion Trap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {metrics.map((item, index) => {
                  const Icon = item.icon
                  const isExpanded = expandedMetric === item.metric
                  const colorClass =
                    item.color === "primary"
                      ? "bg-primary/20 text-primary border-primary/20"
                      : item.color === "secondary"
                        ? "bg-secondary/20 text-secondary border-secondary/20"
                        : "bg-accent/20 text-accent border-accent/20"

                  return (
                    <motion.div
                      key={item.metric}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className={cn(
                        "rounded-lg bg-muted/30 border border-primary/10 overflow-hidden transition-all duration-300",
                        isExpanded && "lg:col-span-3 md:col-span-2"
                      )}
                    >
                      <button
                        onClick={() => toggleMetric(item.metric)}
                        className="w-full p-4 hover:bg-muted/50 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${colorClass}`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm md:text-base font-semibold text-primary">
                              {item.metric}
                            </h4>
                            <p className="font-mono text-xs text-muted-foreground/70 mt-0.5">
                              {item.variable}
                            </p>
                          </div>
                          <ChevronDown
                            className={cn(
                              "w-5 h-5 text-muted-foreground transition-transform duration-300",
                              isExpanded && "rotate-180"
                            )}
                          />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 pt-2 space-y-3 border-t border-primary/10">
                              <div>
                                <p className="text-sm font-semibold text-foreground/80 mb-1">Meaning:</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.meaning}</p>
                              </div>

                              <div>
                                <p className="text-sm font-semibold text-foreground/80 mb-1">How It Is Calculated:</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.calculation}</p>
                              </div>

                              <div>
                                <p className="text-sm font-semibold text-foreground/80 mb-1">Why It Matters:</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.importance}</p>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
