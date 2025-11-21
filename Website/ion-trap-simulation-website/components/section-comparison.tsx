"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function SectionComparison() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const comparisonData = [
    {
      category: "Geometry",
      trap3d: "4 RF rods + 2 DC endcaps",
      trap2d: "Planar microfabricated electrodes",
    },
    {
      category: "Trap Depth",
      trap3d: "High (several eV)",
      trap2d: "Lower (sub-eV)",
      highlight3d: true,
    },
    {
      category: "Ion Stability",
      trap3d: "Excellent 3D confinement",
      trap2d: "Good with careful tuning",
      highlight3d: true,
    },
    {
      category: "Fabrication",
      trap3d: "Complex machining",
      trap2d: "Microfabrication scalable",
      highlight2d: true,
    },
    {
      category: "Noise Sensitivity",
      trap3d: "More robust",
      trap2d: "Sensitive to stray fields",
      highlight3d: true,
    },
    {
      category: "Scalability",
      trap3d: "Limited",
      trap2d: "Highly scalable",
      highlight2d: true,
    },
  ]

  return (
    <section id="comparison" ref={ref} className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Comparison</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A detailed comparison of 3D RF Paul Traps vs. 2D Surface Ion Traps
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
            <CardHeader className="border-b border-border/50">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-left">
                  <CardTitle className="text-lg">Category</CardTitle>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="border-primary/50 bg-primary/10">
                    3D RF Paul Trap
                  </Badge>
                </div>
                <div className="text-center">
                  <Badge variant="outline" className="border-secondary/50 bg-secondary/10">
                    2D Surface Ion Trap
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              {comparisonData.map((row, index) => (
                <motion.div
                  key={row.category}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="grid grid-cols-3 gap-4 p-6 border-b border-border/30 last:border-b-0 hover:bg-muted/20 transition-colors"
                >
                  <div className="font-semibold text-foreground">{row.category}</div>
                  <div
                    className={`text-center ${row.highlight3d ? "text-primary font-medium" : "text-muted-foreground"}`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {row.highlight3d && <Check className="w-4 h-4 text-primary" />}
                      <span>{row.trap3d}</span>
                    </div>
                  </div>
                  <div
                    className={`text-center ${
                      row.highlight2d ? "text-secondary font-medium" : "text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {row.highlight2d && <Check className="w-4 h-4 text-secondary" />}
                      <span>{row.trap2d}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 grid md:grid-cols-2 gap-6"
        >
          <Card className="bg-primary/10 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="text-primary">Optimization Improvements</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Through advanced simulation tools and RF optimization, we achieved significant improvements in trap
                depth, field symmetry, and ion stability for both trap types.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 backdrop-blur-sm border-secondary/30">
            <CardHeader>
              <CardTitle className="text-secondary">Key Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Each trap design offers unique advantages: 3D traps excel in stability and depth, while 2D traps provide
                scalability for large-scale quantum computing applications.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
