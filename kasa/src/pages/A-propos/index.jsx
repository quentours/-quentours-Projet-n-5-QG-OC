import React from 'react'
import Header from '../../components/Header/Header.jsx'
import background from './background2.png'
import Bandeau from '../../components/Bandeau/index.jsx'
import Tab from '../../components/Tab/index.jsx'
import Footer from '../../components/Footer/index.jsx'
import './styles.scss'

function APropos() {
  const gradient = 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
  const titre_contact = ''

  const data = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
    },
    {
      title: 'Respect',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      title: 'Service',
      content:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

  return (
    <div>
      <div id="main-wrapper">
        <Header />
        <Bandeau
          gradient={gradient}
          backgroundImage={background}
          title={titre_contact}
        />
        <div className="tab1-wrapper">
          {data.map((contact, index) => (
            <Tab
              title={contact.title}
              content={contact.content}
              key={`${contact.title}-${index}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default APropos
