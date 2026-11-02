import { useStore } from '../store/useStore.js'
import { useNavigate } from 'react-router-dom'

export function useAuth() {
  const { user, login, logout } = useStore()
  const navigate = useNavigate()

  const signIn = async (email, password) => {
    const u = login(email, password) // swap for api.auth.login in production
    return u
  }

  const signOut = () => {
    logout()
    navigate('/')
  }

  return { user, signIn, signOut, isAuthenticated: !!user, isAdmin: user?.role === 'admin' }
}
