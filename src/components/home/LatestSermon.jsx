import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Play, Download, Share2, Clock, User } from 'lucide-react'
import { sermons } from '../../data/mockData.js'

const VIDEO_ID = 'Ji-Decsax3U'

export default function LatestSermon() {
  const latest = sermons[0]
  const [playing, setPlaying] = useState(false)

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-gold-500 text-xs font-bold tracking-widest uppercase">Featured Message</span>
            <h2 className="section-heading mt-2">Latest Sermon</h2>
          </div>
          <Link to="/sermons" className="text-primary-700 text-sm font-semibold hover:text-gold-500 transition-colors">
            View All Sermons →
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Player card */}
          <div className="bg-gradient-to-br from-primary-800 to-primary-900 rounded-3xl overflow-hidden shadow-xl">
            <div className="aspect-video relative cursor-pointer" onClick={() => setPlaying(true)}>
              {playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${VIDEO_ID}?start=7&autoplay=1`}
                  title={latest.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <>
                  <img
                    src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                    alt={latest.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300">
                      <Play size={30} className="ml-2 text-black" />
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="p-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 rounded-full bg-gold-500" />
                <div>
                  <p className="text-white font-serif font-semibold">{latest.title}</p>
                  <p className="text-white/50 text-xs">{latest.series}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 transition-colors">
                  <Download size={15} />
                </button>
                <button className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/70 transition-colors">
                  <Share2 size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Details + recent list */}
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gold-500/15 text-black text-xs font-semibold px-3 py-1 rounded-full">{latest.series}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-black mb-3">{latest.title}</h3>
              <div className="flex items-center gap-5 text-sm text-gray-500 mb-5">
                <span className="flex items-center gap-1.5"><User size={14} /> {latest.speaker}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {latest.duration}</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                In this powerful message, we explore the depth of God's promises and how prayer opens every closed door. A must-watch for every believer seeking breakthrough.
              </p>
            </div>

            {/* Recent sermons */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Recent Messages</p>
              {sermons.slice(1, 4).map(s => (
                <Link
                  key={s.id}
                  to="/sermons"
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center shrink-0 group-hover:bg-primary-700 transition-colors">
                    <Play size={14} className="ml-0.5 text-primary-700 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800 truncate">{s.title}</p>
                    <p className="text-xs text-gray-400">{s.speaker} · {s.duration}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
