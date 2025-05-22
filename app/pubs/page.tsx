'use client'

import { motion } from "framer-motion"

export default function PubPage() {
  const ads = [
  {
    title: "Parfum Élégance",
    description: "Campagne publicitaire pour le lancement d'un nouveau parfum de luxe",
    image: "https://images.unsplash.com/photo-1590736704728-f4e505a62c77",
    tags: ["Luxe", "Beauté", "TV"]
  },
  {
    title: "Éco-Responsable",
    description: "Publicité pour une gamme de produits écologiques",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    tags: ["Écologie", "Digital", "Social"]
  },
  {
    title: "Sport Excellence",
    description: "Campagne pour une nouvelle collection sportive",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    tags: ["Sport", "Lifestyle", "Web"]
  }
]
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-screen">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/8W-timQTi48?autoplay=1&mute=1&loop=1&playlist=8W-timQTi48"
            title="YouTube pub video"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Publicités
          </motion.h1>
        </div>
      </section>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ads.map((ad, index) => (
            <motion.div 
              key={index} 
              className="relative overflow-hidden rounded-lg bg-gray-900"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
            >
              <motion.img
                src={ad.image}
                alt={ad.title}
                className="w-full aspect-video object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold mb-2">{ad.title}</h3>
                <p className="text-gray-400 mb-4">{ad.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ad.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: "#2D2D2D" }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
