import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Homepage from './components/Homepage'
import Team from './components/OurTeam'
import Portfolio from './components/Portfolio'
import Service from './components/Services'
import Footer from './shared/Footer'
import Header from './shared/Header'
function App() {
  return (
    <>
      <Header />
      <Homepage />
      <AboutUs />
      <Service />
      <Team />
      <Portfolio />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
