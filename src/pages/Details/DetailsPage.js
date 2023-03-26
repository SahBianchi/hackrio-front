import React from 'react'
import { Layout } from '../../componentes/Layout'
import '../Details/details.css'
import detailsImage from '../../assets/detailsImage.jpeg'
import { Flex } from '@chakra-ui/react'
import { InfoHour } from '../../componentes/InfoHour'
import { LineDividing } from '../../componentes/LineDividing'
import { GrMapLocation } from 'react-icons/gr'
import { IoIosSubway } from "react-icons/io";
import { FaWalking } from "react-icons/fa";
import { BsCarFrontFill } from "react-icons/bs";
import { MdDirectionsBike } from "react-icons/md";

export const DetailsPage = () => {
    return (
        <Layout>
            <main>
                <img className='image-details' src={detailsImage} alt='Image Details' />
                <div className='infos-half-top'>
                    <Flex flexDirection='column' gap='0.5rem'>
                        <Flex flexDirection='column'>
                            <h2>Morrendo de Rir</h2>
                            <h2>Local: Circo Voador</h2>
                            <p>Standup / Comedy</p>
                        </Flex>
                    </Flex>

                    <Flex>
                        <InfoHour type='greenHour'>21:30</InfoHour>
                    </Flex>
                </div>
                <LineDividing></LineDividing>

                <div className='body-infos'>

                    <div className='event-about'>
                        <h2>Sobre:</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>

                    <div className='event-ticket'>
                        <h2>Ingresso:</h2>
                        <p id='paragraf'>R$ 15,00</p>
                    </div>

                    <div className='event-ticket-link-buy'>
                        <h2>Onde comprar:</h2>
                        <a href='https://www.lipsum.com/'>https://www.lipsum.com/</a>
                        <a href='https://www.lipsum.com/'>https://www.lipsum.com/</a>
                    </div>

                    <div className='event-site'>
                        <h2>Site oficial:</h2>
                        <a href='https://www.lipsum.com/'>https://www.lipsum.com/</a>
                    </div>

                </div>

                <div className='adress-time-transportation' flexDirection='column'>
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
                        <GrMapLocation />
                    </Flex>
                </div>

            </main>

        </Layout>
    )
}
