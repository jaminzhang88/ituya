import { Router, useRoute } from './components/Router'
import { Header, Footer } from './components/Layout'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import { TutorialList, TutorialDetail, TutorialCategory } from './pages/Tutorials'
import FAQ from './pages/FAQ'
import Resources from './pages/Resources'
import About from './pages/About'

function AppContent() {
  const { path } = useRoute()

  let page
  if (path === '/' || path === '') {
    page = <Home />
  } else if (path === '/solutions') {
    page = <Solutions />
  } else if (path === '/tutorials') {
    page = <TutorialList />
  } else if (path.startsWith('/tutorials/category/')) {
    const category = path.replace('/tutorials/category/', '')
    page = <TutorialCategory category={category} />
  } else if (path.startsWith('/tutorials/')) {
    const id = path.replace('/tutorials/', '')
    page = <TutorialDetail id={id} />
  } else if (path === '/faq') {
    page = <FAQ />
  } else if (path === '/resources') {
    page = <Resources />
  } else if (path === '/about') {
    page = <About />
  } else {
    page = <div className="py-20 text-center text-gray-500">页面未找到</div>
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{page}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
