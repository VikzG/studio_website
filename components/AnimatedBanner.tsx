'use client'

import { motion } from "framer-motion"

export default function AnimatedBanner() {
  return (
    <motion.div 
      className="absolute bottom-0 w-full bg-black/80 backdrop-blur-sm py-6 z-50"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <motion.div
        className="whitespace-nowrap"
        animate={{
          x: [-1000, -4000],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="flex gap-8 text-white text-2xl md:text-3xl font-bold w-full">
          <span>STUDIO</span>
          <span>•</span>
          <span>Créons Ensemble Votre Vision</span>
          <span>•</span>
          <span>STUDIO</span>
          <span>•</span>
          <span>Créons Ensemble Votre Vision</span>
          <span>STUDIO</span>
          <span>•</span>
          <span>Créons Ensemble Votre Vision</span>
          <span>•</span>
          <span>STUDIO</span>
          <span>•</span>
          <span>Créons Ensemble Votre Vision</span>
          <span>STUDIO</span>
          <span>•</span>
          <span>Créons Ensemble Votre Vision</span>
          <span>STUDIO</span>
          <span>•</span>
          <span>Créons Ensemble Votre Vision</span>
          <span>STUDIO</span>
          <span>•</span>
          <span>Créons Ensemble Votre Vision</span>
        </div>
      </motion.div>
    </motion.div>
  )
}