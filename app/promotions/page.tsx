'use client'

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function PromotionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-screen">
            <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/Hin8-nEFIuI?autoplay=1&mute=1&loop=1&playlist=Hin8-nEFIuI"
            title="YouTube promotion video"
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
            Vidéos Promotionnelles
          </motion.h1>
        </div>
      </section>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-16">
          {promos.map((promo, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col md:flex-row gap-8 items-center"
              initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-full md:w-1/2"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <motion.img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
              <motion.div 
                className="w-full md:w-1/2 space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold">{promo.title}</h2>
                <p className="text-gray-400">{promo.description}</p>
                <ul className="space-y-2">
                  {promo.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="w-2 h-2 bg-white rounded-full" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="mt-4">
                    Voir le projet
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const promos = [
  {
    title: "Festival de Musique Électronique",
    description: "Vidéo promotionnelle pour un festival de musique électronique mettant en avant l'ambiance unique et les artistes internationaux.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    features: [
      "Captation multi-caméras",
      "Montage dynamique",
      "Animation motion design",
      "Sound design personnalisé"
    ]
  },
  {
    title: "Lancement Restaurant Gastronomique",
    description: "Présentation visuelle d'un nouveau restaurant gastronomique, mettant en valeur la cuisine, l'ambiance et l'expérience client.",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b",
    features: [
      "Plans cinématographiques",
      "Interviews du chef",
      "Focus sur les plats signatures",
      "Ambiance intimiste"
    ]
  }
]