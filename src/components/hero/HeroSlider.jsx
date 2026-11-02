import { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react'
import imgPrayer   from '../../Assets/temp_photos/covantnyc-prayer-4979713_1920.jpg'
import imgWorship  from '../../Assets/temp_photos/valeriarodrigues-worship-435108_1920.jpg'
import imgFamily   from '../../Assets/temp_photos/geralt-family-5344669_1920.jpg'
import imgChoir1   from '../../Assets/temp_photos/joergelman-choir-840987_1920.jpg'
import imgChoir2   from '../../Assets/temp_photos/intmurr-choir-458173_1920.jpg'

const SLIDES = [
  {
    id: 1,
    image: imgPrayer,
    bg: 'linear-gradient(135deg, #0d1b2a 0%, #1b3a5c 45%, #2a5a8c 100%)',
    overlay: 'radial-gradient(ellipse at 20% 80%, rgba(201,162,39,0.18) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)',
    accent: '#c9a227',
    badge: 'Every Sunday · 10:30 AM & 6:00 PM',
    title: ['Welcome to', "RCCG Lord's Temple"],
    subtitle: 'A Family. A Fellowship. A Future. Experience the transforming power of God\'s grace in a community that truly cares.',
    cta:    { label: 'Join Us This Sunday', to: '/events' },
    ctaAlt: { label: 'Watch Online',        to: '/livestream' },
  },
  {
    id: 2,
    image: imgWorship,
    bg: 'linear-gradient(135deg, #1a0533 0%, #3d1060 45%, #6820a8 100%)',
    overlay: 'radial-gradient(ellipse at 70% 30%, rgba(224,184,48,0.22) 0%, transparent 50%)',
    accent: '#e0b830',
    badge: 'Sunday Worship Experience',
    title: ['Encounter God', 'Through Worship'],
    subtitle: 'Enter into the manifest presence of God through Spirit-filled praise and heartfelt worship that moves heaven.',
    cta:    { label: 'Service Times',   to: '/events' },
    ctaAlt: { label: 'Sermon Library',  to: '/sermons' },
  },
  {
    id: 3,
    image: imgFamily,
    bg: 'linear-gradient(135deg, #0b3b2e 0%, #155e42 45%, #1e7a57 100%)',
    overlay: 'radial-gradient(ellipse at 25% 75%, rgba(201,162,39,0.18) 0%, transparent 55%)',
    accent: '#c9a227',
    badge: 'Connect Groups · Find Your Community',
    title: ['Grow Together', 'in Community'],
    subtitle: 'Connect with believers in small groups, ministries, and fellowships designed to help you thrive in faith and life.',
    cta:    { label: 'Find a Group',  to: '/connect' },
    ctaAlt: { label: 'Learn More',    to: '/connect' },
  },
  {
    id: 4,
    image: imgChoir1,
    bg: 'linear-gradient(135deg, #7f1d1d 0%, #991b1b 45%, #b32020 100%)',
    overlay: 'radial-gradient(ellipse at 80% 70%, rgba(255,255,255,0.07) 0%, transparent 45%)',
    accent: '#f0d060',
    badge: 'Online Giving · Support the Kingdom',
    title: ['Sow a Seed,', 'Reap a Harvest'],
    subtitle: 'Support God\'s work through your tithes, offerings, and seeds of faith. Every gift makes an eternal difference.',
    cta:    { label: 'Give Online',          to: '/giving' },
    ctaAlt: { label: 'Learn About Giving',   to: '/giving' },
  },
  {
    id: 5,
    image: imgChoir2,
    bg: 'linear-gradient(135deg, #0f2040 0%, #0d47a1 45%, #1565c0 100%)',
    overlay: 'radial-gradient(ellipse at 50% 50%, rgba(201,162,39,0.12) 0%, transparent 60%)',
    accent: '#c9a227',
    badge: 'Live Stream · Every Sunday',
    title: ['Watch Live', 'From Anywhere'],
    subtitle: 'Can\'t be with us in person? Join our Sunday services live online. God\'s word reaches you wherever you are.',
    cta:    { label: 'Watch Live Now',  to: '/livestream' },
    ctaAlt: { label: 'Past Sermons',    to: '/sermons' },
  },
]

const INTERVAL_MS = 5800

export default function HeroSlider() {
  const [current,  setCurrent]  = useState(0)
  const [animKey,  setAnimKey]  = useState(0)
  const [showText, setShowText] = useState(true)
  const [paused,   setPaused]   = useState(false)
  const timerRef = useRef(null)

  const goTo = useCallback((idx) => {
    setCurrent(idx)
    setAnimKey(k => k + 1)
  }, [])

  const advance = useCallback(() => {
    goTo((current + 1) % SLIDES.length)
  }, [current, goTo])

  const retreat = useCallback(() => {
    goTo((current - 1 + SLIDES.length) % SLIDES.length)
  }, [current, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(advance, INTERVAL_MS)
    return () => clearInterval(timerRef.current)
  }, [advance, paused])

  const slide = SLIDES[current]

  return (
    <section
      className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slide backgrounds (crossfade) ──────────────────── */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          aria-hidden="true"
          className="absolute inset-0 transition-opacity duration-[1400ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 2 : 1 }}
        >
          {/* Photo layer */}
          <div
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${s.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Ken-Burns gradient layer — masked to right half */}
          <div
            className={i === current ? 'hero-bg-active' : ''}
            style={{
              position: 'absolute', inset: 0,
              background: s.bg,
              opacity: 0.75,
              WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
              maskImage: 'linear-gradient(to right, black 0%, transparent 60%)',
              transformOrigin: 'center center',
            }}
          />
          {/* Colour overlay / light leak */}
          <div style={{ position: 'absolute', inset: 0, background: s.overlay }} />
          {/* Readability gradient — clear on left, dark on right */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.08) 100%)' }} />
          {/* Bottom vignette */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%', background: 'linear-gradient(to top, rgba(0,0,0,0.45), transparent)' }} />
          {/* Decorative orb */}
          <div
            style={{
              position: 'absolute', top: '25%', right: '18%',
              width: 280, height: 280, borderRadius: '50%',
              background: `radial-gradient(circle, ${s.accent}22 0%, transparent 70%)`,
              pointerEvents: 'none',
            }}
          />
        </div>
      ))}

      {/* ── Slide content ───────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-16 lg:px-24 max-w-7xl mx-auto">
        {showText && (
          <div key={animKey}>
            {/* Badge */}
            <div className="hero-badge mb-6">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
                style={{
                  background: `${slide.accent}28`,
                  border: `1px solid ${slide.accent}55`,
                  color: slide.accent,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: slide.accent, display: 'inline-block' }} />
                {slide.badge}
              </span>
            </div>

            {/* Title */}
            <h1
              className="hero-title font-serif font-bold text-white mb-5 leading-[1.1]"
              style={{ fontSize: 'clamp(2.2rem, 5.5vw, 4.5rem)', textShadow: '0 2px 24px rgba(0,0,0,0.45)' }}
            >
              {slide.title.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h1>

            {/* Subtitle */}
            <p
              className="hero-subtitle text-white/80 mb-10 leading-relaxed max-w-lg"
              style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)', textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
            >
              {slide.subtitle}
            </p>

            {/* CTAs */}
            <div className="hero-cta flex flex-wrap gap-4">
              <Link
                to={slide.cta.to}
                className="px-7 py-3.5 rounded-full font-bold text-sm text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{ background: slide.accent }}
              >
                {slide.cta.label}
              </Link>
              <Link
                to={slide.ctaAlt.to}
                className="px-7 py-3.5 rounded-full font-semibold text-sm text-white border border-white/35 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                {slide.ctaAlt.label}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* ── Prev / Next arrows ─────────────────────────────── */}
      <button
        onClick={retreat}
        aria-label="Previous slide"
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 border border-white/30 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-110"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={advance}
        aria-label="Next slide"
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/15 border border-white/30 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-110"
      >
        <ChevronRight size={20} />
      </button>

      {/* ── Bottom bar: counter | dots | text toggle ────────── */}
      <div className="absolute bottom-7 inset-x-0 z-20 flex items-center justify-between px-6 md:px-10">
        {/* Counter */}
        <span className="text-white/40 text-xs font-mono tabular-nums">
          {String(current + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
        </span>

        {/* Navigation dots */}
        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="transition-all duration-400 rounded-full"
              style={{
                width:      i === current ? 28 : 8,
                height:     8,
                background: i === current ? slide.accent : 'rgba(255,255,255,0.35)',
              }}
            />
          ))}
        </div>

        {/* Text toggle */}
        <button
          onClick={() => setShowText(t => !t)}
          aria-label={showText ? 'Hide slide text' : 'Show slide text'}
          title={showText ? 'Hide text' : 'Show text'}
          className="w-9 h-9 rounded-full bg-white/15 border border-white/30 text-white flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
        >
          {showText ? <EyeOff size={15} /> : <Eye size={15} />}
        </button>
      </div>

      {/* ── Progress bar ────────────────────────────────────── */}
      {!paused && (
        <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-white/10">
          <div
            key={`${animKey}-progress`}
            className="h-full"
            style={{
              background: slide.accent,
              animation: `progressBar ${INTERVAL_MS}ms linear forwards`,
            }}
          />
        </div>
      )}

      <style>{`
        @keyframes progressBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </section>
  )
}
