"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { 
  Code2, Database, GitBranch, Server, Zap, Globe, 
  Terminal, Box, Settings, ShoppingBag, PieChart, Users, 
  Layout, Cpu
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

const techTools = [
  { name: "Python", icon: <Zap /> },
  { name: "XML / odoo Views", icon: <Code2 /> },
  { name: "PostgreSQL", icon: <Database /> },
  { name: "React / Next.js", icon: <Layout /> },
  { name: "Docker", icon: <Box /> },
  { name: "Git", icon: <GitBranch /> },
  { name: "Linux / API", icon: <Server /> },
]

const odooModules = [
  { name: "Comptabilité", icon: <PieChart /> },
  { name: "Ventes", icon: <ShoppingBag /> },
  { name: "Achats", icon: <ShoppingBag /> },
  { name: "CRM", icon: <Users /> },
  { name: "Stock", icon: <Box /> },
  { name: "Website", icon: <Layout /> },
  { name: "Configuration", icon: <Settings /> },
]

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Premium Background Ambiance */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.25em] border border-primary/20 mb-6 font-sans">
            <Cpu className="w-3 h-3" />
            Stack & Expertise
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-foreground font-heading uppercase py-2 px-4">
            Technique <span className="text-primary/80">&</span> 
            <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text italic px-2"> Métier</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8 group">
             <motion.div 
               whileHover={{ x: 10 }}
               className="px-8 py-5 bg-card/40 rounded-[2.5rem] border border-border/60 border-l-8 border-l-primary flex items-center justify-between backdrop-blur-md shadow-2xl"
             >
                <div className="space-y-1">
                   <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">Stack Technique</h3>
                   <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-muted-foreground opacity-70">
                      <Terminal className="w-3 h-3" /> Développement & Infrastructure
                   </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                   <Cpu className="w-6 h-6 animate-pulse" />
                </div>
             </motion.div>
             <div className="relative h-[350px] sm:h-[500px] rounded-[3.5rem] bg-[#020617]/40 border border-white/5 shadow-inner overflow-hidden flex items-center justify-center">
                <HubContainer items={techTools} centerIcon={<Terminal />} hubType="tech" inView={inView} />
             </div>
          </div>
          <div className="space-y-8 group">
             <motion.div 
               whileHover={{ x: -10 }}
               className="px-8 py-5 bg-card/40 rounded-[2.5rem] border border-border/60 border-r-8 border-r-primary flex items-center justify-between backdrop-blur-md shadow-2xl text-right lg:text-left lg:flex-row-reverse"
             >
                <div className="space-y-1">
                   <h3 className="text-2xl font-black tracking-tight group-hover:text-primary transition-colors">Expertise odoo</h3>
                   <div className="flex items-center gap-2 text-[10px] uppercase font-bold text-muted-foreground opacity-70 justify-end lg:justify-start">
                      <Box className="w-3 h-3" /> Modules Fonctionnels Std.
                   </div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                   <Settings className="w-6 h-6 animate-spin-slow" />
                </div>
             </motion.div>
             <div className="relative h-[350px] sm:h-[500px] rounded-[3.5rem] bg-[#020617]/40 border border-white/5 shadow-inner overflow-hidden flex items-center justify-center">
                <HubContainer items={odooModules} centerText="odoo" hubType="odoo" inView={inView} />
             </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
      `}</style>
    </section>
  )
}

function HubContainer({ items, centerIcon, centerText, hubType, inView }: any) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 })
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 })
  const [scaleFactor, setScaleFactor] = useState(1)

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return
      const width = containerRef.current.clientWidth
      // Base required width to fit all items perfectly without clipping
      const requiredWidth = 460
      if (width < requiredWidth) {
        setScaleFactor(width / requiredWidth)
      } else {
        setScaleFactor(1)
      }
    }
    handleResize()
    const observer = new ResizeObserver(handleResize)
    if (containerRef.current) observer.observe(containerRef.current)
    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      observer.disconnect()
    }
  }, [])

  const handleMouseMove = (e: any) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x * 40)
    mouseY.set(y * 40)
  }
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); }
  return (
    <div ref={containerRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="relative w-full h-full flex items-center justify-center overflow-hidden" style={{ perspective: 1000 }}>
      <motion.div style={{ x: springX, y: springY, scale: scaleFactor }} className="relative flex items-center justify-center">
        {items.map((item: any, i: number) => {
          const angle = (i * 360 / items.length) * (Math.PI / 180)
          const radius = 175
          const x = radius * Math.cos(angle)
          const y = radius * Math.sin(angle)
          return <FloatingCard key={item.name} name={item.name} icon={item.icon} x={x} y={y} delay={i * 0.1} inView={inView} variant={hubType === 'odoo' ? 'primary' : 'default'} />
        })}
        <div className={`relative z-30 w-16 h-16 rounded-[1.2rem] flex items-center justify-center shadow-2xl backdrop-blur-xl border ${hubType === 'odoo' ? 'bg-primary text-white' : 'bg-primary/20 text-primary'}`}>
          {centerIcon || <span className="font-black text-xs uppercase tracking-tighter">{centerText}</span>}
        </div>
      </motion.div>
    </div>
  )
}

function FloatingCard({ name, icon, x, y, delay, inView, variant = 'default' }: any) {
  return (
    <motion.div initial={{ scale: 0, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1, x: [x - 5, x + 5, x - 5], y: [y + 5, y - 5, y + 5] } : {}} transition={{ delay, y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, x: { duration: 4, repeat: Infinity, ease: "easeInOut" } }} style={{ position: 'absolute' }}>
      <div className={`p-2 sm:p-3 rounded-2xl backdrop-blur-xl border flex flex-col items-center gap-1 sm:gap-2 min-w-[85px] sm:min-w-[100px] ${variant === 'primary' ? 'bg-primary/5 border-primary/30' : 'bg-white/5 border-white/10'}`}>
        <div className={`p-1.5 sm:p-2 rounded-xl ${variant === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary text-primary'}`}>{icon}</div>
        <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground">{name}</span>
      </div>
    </motion.div>
  )
}

