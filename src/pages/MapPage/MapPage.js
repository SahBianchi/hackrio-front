import React from 'react'
import "./styled.css"
import mapImage from '../../assets/mapTag.png'
import { Layout } from '../../componentes/Layout'
import { MapCard } from '../../componentes/MapCard/MapCard'
import { HiLocationMarker } from 'react-icons/hi'
import { BiCurrentLocation } from 'react-icons/bi'

export const MapPage = () => {
    return (
        <Layout>
            <div className='coitainer-map'>
                <div className='container-img'>
                    <img className='map-img' src={mapImage} alt='Map Image' />
                    <div id='tag-map1'>
                        <HiLocationMarker />
                    </div>
                    <div id='tag-map2'>
                        <HiLocationMarker />
                    </div>
                    <div id='tag-map3'>
                        <HiLocationMarker />
                    </div>
                    <div id='tag-map4'>
                        <HiLocationMarker />
                    </div>
                    <div id='tag-map5'> 
                        <BiCurrentLocation />
                    </div>
                    <div id='group-zoom'>
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

