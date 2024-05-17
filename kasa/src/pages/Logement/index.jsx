import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchData } from '../../components/Fetch'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer'
import Carrousel from '../../components/Carrousel'
import Tag from '../../components/Tag'
import Host from '../../components/Host'
import Rating from '../../components/Rating'
import Tab from '../../components/Tab'
import './styles.scss'

function Logement() {
  const { id } = useParams()
  const [place, setPlace] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData('../../logements.json')
        const selectedPlace = data.find((place) => place.id === id)
        if (!selectedPlace) {
          navigate('/404')
          return
        }
        setPlace(selectedPlace)
      } catch (error) {
        console.error('Erreur dans le fetch des données:', error)
        navigate('/404')
      }
    }
    getData()
  }, [id, navigate])

  if (!place) {
    return <div>Loading</div>
  }

  return (
    <div>
      <div id="main-wrapper">
        <Header />
        <Carrousel pictures={place.pictures} />
        <div className="global-wrapper">
          <div className="info-wrapper">
            <div className="content-wrapper">
              <h1>{place.title}</h1>
              <p className="location">{place.location}</p>
              <div className="tag-wrapper">
                {place.tags.map((tag, index) => (
                  <Tag tagContent={tag} key={`${tag}-${index}`} />
                ))}
              </div>
            </div>
            <div className="idstar-wrapper">
              <Host host={place.host} />
              <Rating rating={place.rating} />
            </div>
          </div>
          <div className="tab2-wrapper">
            <div className="description-wrapper">
              <Tab title="Description" content={place.description} />
            </div>
            <div className="stuff-wrapper">
              <Tab title="Équipements" content={place.equipments} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Logement
