"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, ChevronDown, ExternalLink } from "lucide-react"

export function SectionReferences() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isExpanded, setIsExpanded] = useState(false)

  const references = [
    {
      title: "Ion Trap Mass Spectrometry: A Personal Perspective",
      authors: "Sensors Journal",
      url: "https://www.mdpi.com/1424-8220/16/5/616",
      year: "2016",
      type: "Journal Article",
    },
    {
      title: "Ion Trap Optimization and Quantum Computing Applications",
      authors: "Adam, Masters Thesis - Virginia Space Grant Consortium",
      url: "https://vsgc.odu.edu/wp-content/uploads/2023/05/Masters_Adam_Paper.pdf",
      year: "2023",
      type: "Thesis",
    },
    {
      title: "Surface-electrode architecture for ion-trap quantum information processing",
      authors: "arXiv Preprint",
      url: "https://arxiv.org/pdf/0808.1623",
      year: "2008",
      type: "Research Paper",
    },
    {
      title: "Linear Trap - ScienceDirect Topics",
      authors: "ScienceDirect",
      url: "https://www.sciencedirect.com/topics/mathematics/linear-trap",
      year: "N/A",
      type: "Reference Material",
    },
  ]

  return (
    <section id="references" ref={ref} className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 overflow-hidden">
            <CardHeader
              className="cursor-pointer hover:bg-muted/30 transition-colors"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center glow-cyan">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">References & Sources</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      Academic papers and resources used in this study
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-muted-foreground" />
                </motion.div>
              </div>
            </CardHeader>

            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <CardContent className="pt-6 pb-8">
                <div className="space-y-4">
                  {references.map((ref, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isExpanded ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/50 hover:bg-muted/50 transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3">
                              <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                <span className="text-primary font-bold text-sm">{index + 1}</span>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                  {ref.title}
                                </h4>
                                <p className="text-sm text-muted-foreground mb-2">{ref.authors}</p>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                  <span className="px-2 py-1 rounded bg-primary/10 text-primary font-medium">
                                    {ref.type}
                                  </span>
                                  <span>{ref.year}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Note:</strong> These sources provided foundational knowledge
                    and theoretical background for the simulation work presented in this study. All simulations were
                    performed using COMSOL Multiphysics 6.3.0.
                  </p>
                </div>
              </CardContent>
            </motion.div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
