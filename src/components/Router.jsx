import { useState, useEffect, createContext, useContext } from 'react'

const RouterContext = createContext()

export function useRoute() {
  return useContext(RouterContext)
}

export function Router({ children }) {
  const [path, setPath] = useState(window.location.hash.slice(1) || '/')

  useEffect(() => {
    const handler = () => setPath(window.location.hash.slice(1) || '/')
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [])

  const navigate = (to) => {
    window.location.hash = to
    window.scrollTo(0, 0)
  }

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  )
}

export function Link({ to, children, className, onClick, ...props }) {
  const { navigate } = useRoute()
  return (
    <a
      href={`#${to}`}
      className={className}
      onClick={(e) => { e.preventDefault(); navigate(to); if (onClick) onClick(e) }}
      {...props}
    >
      {children}
    </a>
  )
}
