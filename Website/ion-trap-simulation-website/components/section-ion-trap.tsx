"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Atom, Zap, Target } from "lucide-react"

export function SectionIonTrap() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="ion-trap" ref={ref} className="relative z-10 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Is an <span className="gradient-text">Ion Trap</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            An educational introduction to the physics behind ion confinement
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Atom,
              title: "Electric Confinement",
              description:
                "Electric and RF fields work together to create a potential well that traps charged ions in space.",
            },
            {
              icon: Zap,
              title: "Quantum Computing",
              description:
                "Ion traps are fundamental to quantum computing, providing stable qubits for quantum information processing.",
            },
            {
              icon: Target,
              title: "Precision Control",
              description:
                "Advanced electrode geometries enable precise manipulation of ion positions and quantum states.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors h-full">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 glow-cyan">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Card className="bg-card/30 backdrop-blur-sm border-primary/20">
            <CardContent className="p-8">
              <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center border border-primary/20">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center glow-cyan">
                    <Atom className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    SolidWorks Model Placeholder: Basic Ion Trap Structure
                  </p>
                  <p className="text-xs text-muted-foreground/70">(Insert model render or simplified drawing here)</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
