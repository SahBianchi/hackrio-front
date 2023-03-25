import React from 'react'
import '../MapPage/mapPage.css'
import mapImage from '../../assets/maps.png'
import { Layout } from '../../componentes/Layout'
import { Flex } from '@chakra-ui/react'
import { IoIosSubway } from "react-icons/io";
import { FaWalking } from "react-icons/fa";
import { BsCarFrontFill } from "react-icons/bs";
import { MdDirectionsBike } from "react-icons/md";

export const MapPage = () => {
    return (
        <Layout>
            <div className='coitainer-map'>

                <img className='map-image' src={mapImage} alt='Map Image' />

                <div className='info-event-map'>
                    <div className='infos-half-top'>
                        <Flex flexDirection='column'>
                            <Flex flexDirection='column'>
                                <h2>Morrendo de Rir</h2>
                                <h2>Local: Circo Voador</h2>
                            </Flex>
                            <Flex>
                                <p>Standup / Comedy</p>
                                <p>R$15,00</p>
                            </Flex>
                        </Flex>

                        <Flex>
                            {/* chamar o neogocio de horario */}
                            <h1>21:30</h1>
                        </Flex>
                    </div>
                    <div className='line-divisor'></div>
                    <Flex>
                        <p>Rua Barra, 1234 - Barra da Tijuca - 56743-876</p>
                        <Flex>
                            <Flex>
                                <Flex>
                                    <IoIosSubway />
                                    <p>• 21 min</p>
                                </Flex>
                                <Flex>
                                    <FaWalking />
                                    <p>• 35 min</p>
                                </Flex>
                            </Flex>
                            <Flex>
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
                    </Flex>


                </div>






            </div>
        </Layout>

    )
}

