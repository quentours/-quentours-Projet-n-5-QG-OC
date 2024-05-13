import Header from '../../components/Header/Header.jsx'
import Bandeau from '../../components/Bandeau/index.jsx'
import Gallery from '../../components/Gallery/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import background from './background1.png'

// import './index.css'
// import App from './pages/Home/index'

function Index() {
  const gradient = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))'
  const titre_home = 'Chez vous partout, et ailleurs'
  return (
    <div>
      <Header />
      <Bandeau
        gradient={gradient}
        backgroundImage={background}
        title={titre_home}
      />
      <Gallery />
      <Footer />
    </div>
  )
}

export default Index
