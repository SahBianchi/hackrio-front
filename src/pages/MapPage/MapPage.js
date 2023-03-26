import React from 'react'
import "./styled.css"
import mapImage from '../../assets/rioMap.jpeg'
import { Layout } from '../../componentes/Layout'
import { MapCard } from '../../componentes/MapCard/MapCard'

export const MapPage = () => {
    return (
        <Layout>
            <div className='coitainer-map'>
                <div className='container-img'>
                    <img className='map-img' src={mapImage} alt='Map Image' />
                    <div className='group-zoom'>
                        <div className='zoom-container'>
                        <button className='zoom-btn'>+</button>
                        <button className='zoom-btn'>-</button>
                        </div>
                        
                    </div>
                </div>
                <MapCard />
            </div>
        </Layout>

    )
}

