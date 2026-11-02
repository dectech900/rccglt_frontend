import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 text-center">
      <div>
        <p className="text-8xl font-serif font-bold text-primary-100 mb-4">404</p>
        <h1 className="text-2xl font-serif font-bold text-gray-800 mb-3">Page Not Found</h1>
        <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist. It may have been moved, deleted, or perhaps you typed the wrong address.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="btn-primary flex items-center gap-2"><Home size={15} /> Go Home</Link>
          <Link to="/sermons" className="btn-outline flex items-center gap-2"><Search size={15} /> Browse Sermons</Link>
        </div>
      </div>
    </div>
  )
}
