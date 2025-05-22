'use client'

import { motion } from "framer-motion"
import { Camera, Film, Video, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionné par l'image et le storytelling, je crée des contenus visuels qui captivent et inspirent.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70"
              alt="Studio Photo"
              className="rounded-lg w-full h-[400px] object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold">Notre Histoire</h2>
            <p className="text-gray-400">
              Depuis plus de 10 ans, nous collaborons avec des artistes, des marques et des entreprises pour donner vie à leurs visions créatives. Notre approche combine expertise technique et sensibilité artistique.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="p-4 bg-gray-900 rounded-lg text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className="text-3xl font-bold mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="p-6 bg-gray-900 rounded-lg text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="inline-block p-3 bg-gray-800 rounded-full mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const stats = [
  { value: "200+", label: "Projets Réalisés" },
  { value: "50+", label: "Clients Satisfaits" },
  { value: "15+", label: "Prix Remportés" },
  { value: "10", label: "Années d'Expérience" }
]

const services = [
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Production",
    description: "Équipement professionnel et expertise technique pour des images de qualité"
  },
  {
    icon: <Film className="w-6 h-6" />,
    title: "Réalisation",
    description: "Direction artistique et mise en scène pour des contenus impactants"
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Post-Production",
    description: "Montage, étalonnage et effets spéciaux"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Conseil",
    description: "Accompagnement stratégique pour optimiser votre message"
  }
]