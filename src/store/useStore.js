import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),

      // Demo login (replace with real API call)
      login: (email, password) => {
        const mockUser = {
          id: '1',
          name: 'Soji Haastrup',
          email,
          role: email.includes('admin') ? 'admin' : 'member',
          avatar: null,
          joinedAt: '2023-01-15',
        }
        set({ user: mockUser })
        return mockUser
      },
    }),
    { name: 'rccg-auth' }
  )
)
