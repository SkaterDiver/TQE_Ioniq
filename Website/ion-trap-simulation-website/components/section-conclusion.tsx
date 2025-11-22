"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, ArrowRight } from "lucide-react"

export function SectionConclusion() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="conclusion" ref={ref} className="relative z-10 py-20 px-4 mb-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Conclusion</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 mb-8">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-foreground leading-relaxed text-balance mb-6">
                Through advanced simulation and geometric modelling using COMSOL and optimization,{" "}
                <span className="text-primary font-semibold">Ting's Quantum Engineers</span> developed two validated
                simulations for ion confinement systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                Our work enhances the design pipeline for future quantum technologies and experimental physics,
                providing a robust foundation for next-generation quantum hardware development.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan group"
            onClick={() => window.open('https://github.com/SkaterDiver/TQE_Ioniq', '_blank')}
          >
            <Github className="mr-2" />
            View Project Code
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block">
            <div className="text-sm text-muted-foreground mb-2">Powered by</div>
            <div className="text-2xl font-bold tracking-wider text-primary">TINGS QUANTUM ENGINEERS</div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent mt-2" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
