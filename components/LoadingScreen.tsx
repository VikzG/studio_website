'use client'

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <>
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "-50%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-full h-1/2 bg-black z-50"
          />
          <motion.div
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-0 left-0 w-full h-1/2 bg-black z-50"
          />
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="relative">
              <motion.div
                animate={{
                  x: [0, -10, 5, -5, 0],
                  y: [0, 5, -10, 5, 0],
                  filter: [
                    'hue-rotate(0deg) saturate(100%)',
                    'hue-rotate(90deg) saturate(200%)',
                    'hue-rotate(180deg) saturate(300%)',
                    'hue-rotate(270deg) saturate(200%)',
                    'hue-rotate(360deg) saturate(100%)'
                  ]
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 text-5xl md:text-7xl font-bold text-[#FF00FF] mix-blend-screen"
                style={{
                  textShadow: '3px 3px #0FF'
                }}
              >
                STUDIO
              </motion.div>
              <motion.div
                animate={{
                  x: [0, 10, -5, 5, 0],
                  y: [0, -5, 10, -5, 0],
                  filter: [
                    'hue-rotate(360deg) saturate(100%)',
                    'hue-rotate(270deg) saturate(200%)',
                    'hue-rotate(180deg) saturate(300%)',
                    'hue-rotate(90deg) saturate(200%)',
                    'hue-rotate(0deg) saturate(100%)'
                  ]
                }}
                transition={{
                  duration: 0.2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="text-5xl md:text-7xl font-bold text-[#00FFFF] mix-blend-screen"
                style={{
                  textShadow: '3px 3px #F0F'
                }}
              >
                STUDIO
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}