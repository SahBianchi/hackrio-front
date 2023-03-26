import React from 'react'
import { Layout } from '../../componentes/Layout'
import styles from '../Calendar/style.module.css'
import { LineDividing } from '../../componentes/LineDividing'
import { InfoHour } from '../../componentes/InfoHour'
import calendarImg from '../../assets/calendar.png'

export const CalendarPage = () => {
  return (
    <Layout>
        <div className={styles.containerCalendar}>
            <img src={calendarImg} alt='Image Logo' className={styles.calendarImg} />

            <LineDividing/>

            {/* TESTE INFOHOUR VERDE */}
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
                    <InfoHour type="greenHour">11:20</InfoHour>
                  </div>
                </div>
            </div>

            <LineDividing/>

            {/* TESTE INFOHOUR AMARELO */}
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
                    <InfoHour type="yellowHour">11:20</InfoHour>
                  </div>
                </div>
            </div>

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
