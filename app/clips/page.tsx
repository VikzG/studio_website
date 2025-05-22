'use client'

import { motion } from "framer-motion"
import { Play } from "lucide-react"

export default function ClipsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative h-screen">
            <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/MgrDaDhMnD0?autoplay=1&mute=1&loop=1&playlist=MgrDaDhMnD0"
            title="YouTube clip video"
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
            Clips Musicaux
          </motion.h1>
        </div>
      </section>
        
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {videos.map((video, index) => (
            <motion.div 
              key={index} 
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.img
                src={video.thumbnail}
                alt={video.title}
                className="w-full aspect-video object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 bg-black/50 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play className="w-16 h-16" />
                </motion.div>
              </motion.div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black">
                <h3 className="text-xl font-bold mb-2">{video.title}</h3>
                <p className="text-gray-300">{video.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const videos = [
  {
    title: "Nuit Étoilée",
    artist: "Luna Dreams",
    thumbnail: "https://images.unsplash.com/photo-1598387993441-a364f854c3e1"
  },
  {
    title: "Urban Life",
    artist: "City Beats",
    thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae"
  },
  {
    title: "Océan",
    artist: "Wave Makers",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f"
  },
  {
    title: "Métropole",
    artist: "Night Riders",
    thumbnail: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a"
  }
]