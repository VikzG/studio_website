'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import AnimatedBanner from "@/components/AnimatedBanner"
import ContactForm from "@/components/ContactForm"

export default function Home() {
  const videoRef = useRef(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -150]) // Parallaxe vers le haut

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax wrapper */}
        <motion.div
          ref={videoRef}
          style={{ y }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/EoDrrjj6BMA?autoplay=1&mute=1&loop=1&playlist=EoDrrjj6BMA&controls=0&modestbranding=1"
            title="YouTube video"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="z-20">
          <AnimatedBanner />
        </div>
      </section>

      <motion.section 
        className="bg-black text-white py-24 px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center space-y-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            STUDIO EST UNE ENTREPRISE DE PRODUCTION CRÉATIVE BASÉE SUR DES DUALITÉS:
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-2xl md:text-3xl">
            {["CRÉATIF & ANCRÉ", "FRANÇAIS & INTERNATIONAL", "PASSIONNÉ & ÉVEILLÉ"].map((text, i) => (
              <motion.div 
                key={text}
                className="bg-white text-black p-1 flex justify-center items-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                {text}
              </motion.div>
            ))}
          </div>

          <motion.p 
            className="text-2xl md:text-3xl max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
          >
            TRAVAILLER AVEC STUDIO, C'EST OBTENIR LE MEILLEUR DES DEUX MONDES.
            <motion.span 
              className="block mt-4 bg-white text-black p-4 inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              TRANSCENDER LES FRONTIÈRES
            </motion.span>
            <span className="block mt-4">
              N'A JAMAIS ÉTÉ AUSSI SIMPLE.
            </span>
          </motion.p>
        </div>
      </motion.section>

      <section className="bg-black grid grid-cols-2 md:grid-cols-4">
        {[
          { src: "https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg", title: "LUXE & BEAUTÉ" },
          { src: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg", title: "COMMERCIAL" },
          { src: "https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg", title: "MUSIQUE" },
          { src: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg", title: "FICTION" }
        ].map((item, i) => (
          <motion.div 
            key={item.title}
            className="relative aspect-square group overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img 
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-2xl font-bold">{item.title}</span>
            </div>
          </motion.div>
        ))}
      </section>

      <motion.section 
        className="bg-black text-white py-24 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            CONTACTEZ-NOUS
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 mb-12"
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            Parlons de votre projet et voyons comment nous pouvons collaborer ensemble.
          </motion.p>
          <ContactForm />
        </div>
      </motion.section>
    </>
  )
}