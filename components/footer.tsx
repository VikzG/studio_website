export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">STUDIO</h3>
            <p className="text-gray-400">
              Production de contenu audiovisuel de haute qualité pour vos projets créatifs.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-400">Email: contact@studio.com</p>
            <p className="text-gray-400">Tél: +33 1 23 45 67 89</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-white">YouTube</a>
              <a href="#" className="text-gray-400 hover:text-white">Vimeo</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} STUDIO. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}