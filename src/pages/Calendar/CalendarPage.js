import React, { useEffect, useState } from 'react'
import { Layout } from '../../componentes/Layout'
import styles from '../Calendar/style.module.css'
import { LineDividing } from '../../componentes/LineDividing'
import { InfoHour } from '../../componentes/InfoHour'
import calendarImg from '../../assets/calendar.png'
import axios from 'axios'
import { BASE_URL } from '../../constants/baseUrl'
import { goToDetails } from '../../router/Coordinator'
import { useNavigate } from 'react-router-dom'

export const CalendarPage = () => {
  const [ isLoading,setIsloading] = useState(false)
  const [ events, setEvents] = useState([])
  const navigate = useNavigate()


  useEffect(()=>{
getEvents()

  },[])

  const getEvents = async () =>{
    try {
      setIsloading(true)
      const response = await axios.get(`${BASE_URL}/events`)
      setEvents(response.data.events)
      setIsloading(false)
    } catch (error) {
      setIsloading(false)
      console.log(error)
    }
  }

  const handleDate = (date) =>{
    // const day = date.substring(8, 10); 
    const time = date.substring(11, 16); 
    return time
  }


  return (
    <Layout>

        <div className={styles.containerCalendar}>
            <img src={calendarImg} alt='Image Logo' className={styles.calendarImg} />

            {/* TESTE INFOHOUR VERDE */}
            {events.length>0 &&
        events.map((event)=>{
          return(
            <>
              <LineDividing />
              <div key={event.id}className={styles.containerEvento} onClick={()=>goToDetails(navigate,event.id)}>
                  <p>Rua {event.adress.rua}, {event.adress.numero} - {event.adress.bairro} - {event.adress.cep}</p>
                  
                  <div className={styles.containerDetails}>
                    <div className={styles.containerInfos}>
                      <div className={styles.title}>
                        <p>{event.name}</p>
                        <p>Local: {event.empresa.name}</p>
                      </div>

                      <div className={styles.infos}>
                        <p>{event.type} / {event.category}</p>
                        <p>R$ {event.price}</p>
                      </div>
                    </div>

                    <div>
                      <InfoHour type="greenHour" >{handleDate(event.startAt)} </InfoHour>
                    </div>
                  </div>
              </div>
            </>
            
          )
        })
      }

            <LineDividing/>

            {/* TESTE INFOHOUR VERMELHO */}
            <div className={styles.containerEvento}>
                <p>Rua Copacabana, 1234 - Copacabanda - 56743-876</p>
                
                <div className={styles.containerDetails}>
                  <div className={styles.containerInfos}>
                    <div className={styles.title}>
                      <p>Morrendo de Rir</p>
                      <p>Local: Circo Voador</p>
                    </div>

                    <div className={styles.infos}>
                      <p>Standup / Comedy</p>
                      <p>R$ 15,00</p>
                    </div>
                  </div>

                  <div>
                    <InfoHour type="redHour">11:20</InfoHour>
                  </div>
                </div>
            </div>

            <LineDividing/>
        </div>

    </Layout>
  )
}
