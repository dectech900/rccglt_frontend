import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, LogIn, User, LogOut, Shield } from 'lucide-react'
import { useStore } from '../../store/useStore.js'
import rccgLogo from '../../Assets/RCCG.png'

const NAV = [
  { label: 'Home',      to: '/',          end: true },
  { label: 'Sermons',   to: '/sermons' },
  { label: 'Events',    to: '/events' },
  { label: 'Giving',    to: '/giving' },
  { label: 'Connect',   to: '/connect' },
  { label: 'Watch Live',to: '/livestream', highlight: true },
]

export default function Navbar({ transparent = false }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const { user, logout }            = useStore()
  const navigate                    = useNavigate()

  useEffect(() => {
    if (!transparent) { setScrolled(true); return }
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [transparent])

  const solid = scrolled || !transparent

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src={rccgLogo}
              alt="RCCG Logo"
              className="w-10 h-10 object-contain"
            />
            <p className={`font-serif font-bold text-base leading-tight transition-colors duration-300 ${solid ? 'text-primary-700' : 'text-white'}`}>
              RCCG Lord's Temple
            </p>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {NAV.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    link.highlight
                      ? 'ml-2 bg-gold-500 text-black hover:bg-gold-400'
                      : isActive
                      ? solid
                        ? 'bg-primary-50 text-primary-700'
                        : 'bg-white/20 text-white'
                      : solid
                      ? 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
                      : 'text-white/85 hover:text-white hover:bg-white/15'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Auth */}
          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <>
                <Link
                  to="/member"
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    solid ? 'text-primary-700 hover:bg-primary-50' : 'text-white hover:bg-white/15'
                  }`}
                >
                  <User size={15} /> {user.name?.split(' ')[0] ?? 'Member'}
                </Link>
                {user.role === 'admin' && (
                  <Link
                    to="/admin"
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      solid ? 'text-primary-700 hover:bg-primary-50' : 'text-white hover:bg-white/15'
                    }`}
                  >
                    <Shield size={15} /> Admin
                  </Link>
                )}
                <button
                  onClick={() => { logout(); navigate('/') }}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    solid ? 'text-gray-400 hover:text-red-600 hover:bg-red-50' : 'text-white/60 hover:text-white hover:bg-white/15'
                  }`}
                >
                  <LogOut size={15} />
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  solid
                    ? 'border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white'
                    : 'border-white/50 text-white hover:bg-white/15'
                }`}
              >
                <LogIn size={15} /> Member Login
              </Link>
            )}
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(o => !o)}
            className={`md:hidden p-2 rounded-lg ${solid ? 'text-primary-700' : 'text-white'}`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-white border-t border-gray-100 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  link.highlight
                    ? 'bg-gold-500 text-black text-center font-semibold'
                    : isActive
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <div className="pt-3 border-t border-gray-100">
            {user ? (
              <>
                <Link to="/member" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-primary-700 font-medium">
                  My Account
                </Link>
                <button
                  onClick={() => { logout(); setMobileOpen(false); navigate('/') }}
                  className="block w-full text-left px-4 py-3 text-sm text-gray-400"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/login" onClick={() => setMobileOpen(false)} className="block px-4 py-3 text-sm text-primary-700 font-semibold">
                Member Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
