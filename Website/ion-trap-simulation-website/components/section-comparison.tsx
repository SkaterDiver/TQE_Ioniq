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
      trap3d: "11.568 eV",
      trap2d: "24.359 eV (2.1× higher)",
      highlight2d: true,
    },
    {
      category: "Power Consumption",
      trap3d: "71.51 mW",
      trap2d: "2.19 µW (32,700× lower)",
      highlight2d: true,
    },
    {
      category: "Trap Offset",
      trap3d: "10.00 mm",
      trap2d: "0.423 mm (better centering)",
      highlight2d: true,
    },
    {
      category: "RF Frequency",
      trap3d: "6.4 MHz",
      trap2d: "30.0 MHz (4.7× higher)",
    },
    {
      category: "Fabrication",
      trap3d: "Complex machining",
      trap2d: "Microfabrication scalable",
      highlight2d: true,
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
            A detailed comparison of 3D RF Paul Traps vs. Surface Ion Traps
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
                    Surface Ion Trap
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
          className="mt-12"
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader className="border-b border-border/50">
              <CardTitle className="text-2xl text-center">
                <span className="gradient-text">Efficiency Formulas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Pole Trap Formula */}
                <div className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="border-primary/50 bg-primary/10 mb-4">
                      3D RF Pole Trap
                    </Badge>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                    <div className="leading-relaxed overflow-x-auto">
                      <div className="text-center space-y-4">
                        <div className="text-base font-semibold text-primary mb-4">
                          η<sub>pole</sub> = 10³ ×
                          <span className="inline-flex flex-col items-center mx-1 align-middle">
                            <span className="border-b border-current px-2 pb-1">
                              <span className="inline-flex flex-col items-center align-middle">
                                <span className="text-xs">ω × ε₀ × π × L<sub>rod</sub> × V<sub>RF</sub></span>
                              </span>
                            </span>
                            <span className="pt-1 text-xs">d<sub>rod</sub> × √2</span>
                          </span>
                          <span className="align-middle">²</span>
                        </div>

                        <div className="text-xs bg-card/50 p-4 rounded-md border border-border/30">
                          <div className="font-semibold mb-2 text-foreground">Expanded form:</div>
                          <div className="space-y-2">
                            <div>η<sub>pole</sub> = 10³ × [η<sub>0</sub>]²</div>
                            <div>where η<sub>0</sub> =
                              <span className="inline-flex flex-col items-center mx-1 align-middle">
                                <span className="border-b border-current px-1 text-[0.65rem]">ω × C × V<sub>RF</sub></span>
                                <span className="text-[0.65rem]">√2</span>
                              </span>
                            </div>
                            <div>and C =
                              <span className="inline-flex flex-col items-center mx-1 align-middle">
                                <span className="border-b border-current px-1 text-[0.65rem]">ε₀ × π × L<sub>rod</sub></span>
                                <span className="text-[0.65rem]">d<sub>rod</sub></span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border/30 text-xs text-muted-foreground space-y-1">
                          <div className="font-semibold mb-2 text-foreground">Variables:</div>
                          <div>ω: RF angular frequency</div>
                          <div>ε₀: permittivity of free space</div>
                          <div>L<sub>rod</sub>: rod length</div>
                          <div>d<sub>rod</sub>: rod spacing</div>
                          <div>V<sub>RF</sub>: RF voltage</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Surface Trap Formula */}
                <div className="space-y-4">
                  <div className="text-center">
                    <Badge variant="outline" className="border-secondary/50 bg-secondary/10 mb-4">
                      Surface RF Trap
                    </Badge>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg border border-border/50">
                    <div className="leading-relaxed overflow-x-auto">
                      <div className="text-center space-y-4">
                        <div className="text-base font-semibold text-secondary mb-4">
                          η<sub>surf</sub> = 10³ ×
                          <span className="inline-flex flex-col items-center mx-1 align-middle">
                            <span className="border-b border-current px-2 pb-1">
                              <span className="inline-flex flex-col items-center align-middle">
                                <span className="text-xs">ω × ε₀ × π × w<sub>RF</sub> × L × V<sub>RF</sub></span>
                              </span>
                            </span>
                            <span className="pt-1 text-xs">d<sub>RF</sub> × √2</span>
                          </span>
                          <span className="align-middle">²</span>
                        </div>

                        <div className="text-xs bg-card/50 p-4 rounded-md border border-border/30">
                          <div className="font-semibold mb-2 text-foreground">Expanded form:</div>
                          <div className="space-y-2">
                            <div>η<sub>surf</sub> = 10³ × [η<sub>0</sub>]²</div>
                            <div>where η<sub>0</sub> =
                              <span className="inline-flex flex-col items-center mx-1 align-middle">
                                <span className="border-b border-current px-1 text-[0.65rem]">ω × C × V<sub>RF</sub></span>
                                <span className="text-[0.65rem]">√2</span>
                              </span>
                            </div>
                            <div>and C =
                              <span className="inline-flex flex-col items-center mx-1 align-middle">
                                <span className="border-b border-current px-1 text-[0.65rem]">ε₀ × π × w<sub>RF</sub> × L</span>
                                <span className="text-[0.65rem]">d<sub>RF</sub></span>
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-border/30 text-xs text-muted-foreground space-y-1">
                          <div className="font-semibold mb-2 text-foreground">Variables:</div>
                          <div>ω: RF angular frequency</div>
                          <div>ε₀: permittivity of free space</div>
                          <div>w<sub>RF</sub>: RF electrode width</div>
                          <div>L: trap length</div>
                          <div>d<sub>RF</sub>: RF electrode spacing</div>
                          <div>V<sub>RF</sub>: RF voltage</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          <Card className="bg-primary/10 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="text-primary">Optimization Improvements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Through COMSOL Multiphysics optimization, we achieved remarkable improvements:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-primary">3D Trap:</strong> 62.9× increase in trap depth (0.184 eV → 11.568 eV)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span><strong className="text-primary">Surface Trap:</strong> 20.2× increase in trap depth (1.205 eV → 24.359 eV)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span>Improved field symmetry and reduced offset distances for better ion positioning</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-secondary/10 backdrop-blur-sm border-secondary/30">
            <CardHeader>
              <CardTitle className="text-secondary">Key Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-muted-foreground leading-relaxed">
                  Our optimized designs reveal surprising results:
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <span><strong className="text-secondary">Surface traps</strong> now achieve 2.1× higher trap depth than 3D traps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <span>Surface traps consume 32,700× less power while maintaining superior performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <span>Both designs demonstrate excellent scalability potential for quantum computing</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
