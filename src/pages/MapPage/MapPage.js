import React from 'react'
//import '../MapPage/mapPage.css'
import "./styled.css"
import mapImage from '../../assets/maps.png'
import { Layout } from '../../componentes/Layout'
import { Flex } from '@chakra-ui/react'
import { IoIosSubway } from "react-icons/io";
import { FaWalking } from "react-icons/fa";
import { BsCarFrontFill } from "react-icons/bs";
import { MdDirectionsBike } from "react-icons/md";
import { InfoHour } from '../../componentes/InfoHour'
import { LineDividing } from '../../componentes/LineDividing'

export const MapPage = () => {
    return (
        <Layout>
            <div className='coitainer-map'>
                <div className='container-img'>
                    <img className='map-img'  src={mapImage} alt='Map Image' />
                    <div className='group-zoom'>
                        <button className='zoom-btn'>+</button>
                        <button className='zoom-btn'>-</button>
                    </div>
                </div>

                <div className='info-event-map'>
                   
                    <div className='infos-half-top'>
                        <Flex flexDirection='column' gap='0.5rem'>
                            <Flex flexDirection='column'>
                                <h2>Morrendo de Rir</h2>
                                <h2>Local: Circo Voador</h2>
                            </Flex>
                            <Flex flexDirection='column' >
                                <p>Standup / Comedy</p>
                                <p>R$15,00</p>
                            </Flex>
                        </Flex>

                        <Flex>
                            <InfoHour type='greenHour'>21:30</InfoHour>
                        </Flex>
                    </div>
                    <LineDividing />
                    <div className='infos-half-bottom' flexDirection='column'>
                        <p>Rua Barra, 1234 - Barra da Tijuca - 56743-876</p>
                        <Flex
                            width='428px'
                            fontSize='1.5rem'
                        >
                            <Flex flexDir='column'>
                                <Flex>
                                    <IoIosSubway />
                                    <p>• 21 min</p>
                                </Flex>
                                <Flex>
                                    <FaWalking />
                                    <p>• 35 min</p>
                                </Flex>
                            </Flex>
                            <Flex flexDir='column'>
                                <Flex>
                                    <BsCarFrontFill />
                                    <p>• 26 min</p>
                                </Flex>
                                <Flex>
                                    <MdDirectionsBike />
                                    <p>• 19 min</p>
                                </Flex>
                            </Flex>
                        </Flex>
                    </div>


                </div>






            </div>
        </Layout>

    )
}

