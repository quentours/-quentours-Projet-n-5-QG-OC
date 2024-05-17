import Header from '../../components/Header/Header.jsx'
import Bandeau from '../../components/Bandeau/index.jsx'
import Gallery from '../../components/Gallery/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import background from './background1.png'
import Logement from '../Logement/index.jsx'

// import './index.css'
// import App from './pages/Home/index'

function Index() {
  const gradient = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))'
  const titre_home = 'Chez vous partout, et ailleurs'
  return (
    <div>
      <div id="main-wrapper">
        <Header />
        <Bandeau
          gradient={gradient}
          backgroundImage={background}
          title={titre_home}
        />
        <Gallery link={`/Logement/${Logement.id}`} />
      </div>
      <Footer />
    </div>
  )
}

export default Index
