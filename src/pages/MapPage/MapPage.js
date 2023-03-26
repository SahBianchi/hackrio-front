import React, { useState } from 'react'
import "./styled.css"
import mapImage from '../../assets/mapTag.png'
import { Layout } from '../../componentes/Layout'
import { MapCard } from '../../componentes/MapCard/MapCard'
import { HiLocationMarker } from 'react-icons/hi'
import { BiCurrentLocation } from 'react-icons/bi'
import { goToCalendar, goToDetails } from '../../router/Coordinator'
import axios from 'axios'
import { BASE_URL } from '../../constants/baseUrl'
import { IoCalendarOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

export const MapPage = () => {
    const [event,setEvent] = useState()
    const navigate = useNavigate()
    const [isLoading,setIsloading] = useState(false)


    const handleClickIcon = async (id) =>{
       try {
        setIsloading(true)
        const result = await axios.get(`${BASE_URL}/events?id=${id}`)
        setEvent(result.data.events[0])
        setIsloading(false)  
        
       } catch (error) {
        setIsloading(false)
        console.log(error)
       }
    }


    return (
        <Layout>
            <div className='coitainer-map'>
                <div className='container-img'>
                    <img className='map-img' src={mapImage} alt='Map Image' onClick={()=>{
                        if(event){
                            setEvent()
                        }
                    }} />
                    <div id='tag-map1' onClick={()=>handleClickIcon("5dab31e0-bd9d-4dc3-bc00-e94bed677a5b")}>
                        <HiLocationMarker />
                        {/* verde esposição */}
                    </div>
                    <div id='tag-map2' onClick={()=>handleClickIcon("5dab31e0-bd9d-4dc3-bc00-e94bed677a5c")}>
                        <HiLocationMarker />
                        {/* violeta teatro */}
                    </div>
                    <div id='tag-map3'onClick={()=>handleClickIcon("5dab31e0-bd9d-4dc3-bc00-e94bed677a5d")}>
                        <HiLocationMarker />
                        {/* musica */}
                    </div>
                    <div id='tag-map4'onClick={()=>handleClickIcon("5dab31e0-bd9d-4dc3-bc00-e94bed677a5a")}>
                        <HiLocationMarker />
                        {/* musica */}
                    </div>
                    <div id='tag-map5' > 
                        <BiCurrentLocation />
                    </div>
                    <div id='calendar' > 
                        <IoCalendarOutline id='icon-calendar' onClick={()=>{goToCalendar(navigate)}}/>
                    </div>
                    <div id='group-zoom'>
                        <div className='zoom-container'>
                            <button className='zoom-btn'>+</button>
                            <button className='zoom-btn'>-</button>
                        </div>

                    </div>
                </div>
               { event?<MapCard event={event}/>:<></>}
            </div>
        </Layout>

    )
}

