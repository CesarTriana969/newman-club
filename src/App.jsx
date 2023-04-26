import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Nav from './components/Nav'
import Events from './components/Events'
import TheCrew from './components/TheCrew'
import WhatsNew from './components/WhatsNew'
import VirtualOficce from './components/VirtualOficce'


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Events />
      <TheCrew />
      <WhatsNew />
      <VirtualOficce />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
