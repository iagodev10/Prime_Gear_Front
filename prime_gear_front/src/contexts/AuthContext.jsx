import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
        console.log('chamou o get dados');
      const response = await axios.post(
        'http://72.62.10.218:8080/get-dados-user',
        null,
        { withCredentials: true }
      )
      setUser(response.data)
    } catch (error) {
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    const response = await axios.post(
      'http://72.62.10.218:8080/login',
      { email, password },
      { withCredentials: true }
    )
    
    setUser(response.data.user)
    return response.data
  }

  const logout = async () => {
    await axios.get('http://72.62.10.218:8080/logout', {
      withCredentials: true
    })
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}