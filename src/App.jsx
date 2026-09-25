import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/home'
import Services from './pages/services'
import About from './pages/about'
import Contact from './pages/contact'

const pages = {
  '/': Home,
  '/home': Home,
  '/services': Services,
  '/about': About,
  '/contact': Contact,
}

function getRoute() {
  const hash = window.location.hash.replace(/^#/, '')
  const [pathWithQuery, anchor] = hash.split('#')
  return {
    path: pathWithQuery.split('?')[0] || '/',
    anchor: anchor || '',
  }
}

function App() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (route.anchor) {
        document.getElementById(route.anchor)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo(0, 0)
      }
    })
    return () => window.cancelAnimationFrame(frame)
  }, [route])

  const Page = pages[route.path] || Home
  return <Page />
}

export default App
