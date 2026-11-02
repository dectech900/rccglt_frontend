import { Link } from 'react-router-dom'
import { Play } from 'lucide-react'

export default function WelcomeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div>
            <span className="inline-block text-gold-500 text-xs font-bold tracking-widest uppercase mb-4">
              Pastor's Welcome
            </span>
            <h2 className="section-heading mb-6">
              You Are Welcome<br />Into God's Family
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              On behalf of our entire church family, I warmly welcome you to RCCG Lord's Temple — a place where God's love is experienced, His word is proclaimed, and lives are transformed by the Holy Spirit.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you are joining us for the first time or you are a long-standing member, our doors are always open. We believe every person who walks through our doors carries a destiny, and we are here to walk with you as you discover and fulfil that destiny in God.
            </p>
            <div className="flex items-center gap-4">
              <Link to="/connect" className="btn-primary">Connect With Us</Link>
              <button className="flex items-center gap-2 text-primary-700 font-semibold text-sm hover:gap-3 transition-all duration-300">
                <span className="w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                  <Play size={16} className="ml-0.5" />
                </span>
                Watch Welcome Video
              </button>
            </div>
          </div>

          {/* Pastor card */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-primary-100 to-primary-200 flex items-end overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-primary-300 text-center">
                  <div className="w-24 h-24 rounded-full bg-primary-200 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-serif text-primary-400">JA</span>
                  </div>
                  <p className="text-primary-400 text-sm">Pastor Photo</p>
                </div>
              </div>
              <div className="relative z-10 w-full p-6 bg-gradient-to-t from-primary-900/80 to-transparent">
                <p className="text-white font-serif font-semibold text-lg">Pastor Soji Haastrup</p>
                <p className="text-white/60 text-sm">General Overseer, RCCG Lord's Temple</p>
              </div>
            </div>

            {/* Stats badges */}
            <div className="absolute -top-4 -right-4 bg-gold-500 text-black rounded-2xl px-5 py-3 shadow-lg">
              <p className="font-bold text-2xl leading-none">15+</p>
              <p className="text-xs font-medium">Years of Ministry</p>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary-700 text-white rounded-2xl px-5 py-3 shadow-lg">
              <p className="font-bold text-2xl leading-none">800+</p>
              <p className="text-xs font-medium">Church Family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
