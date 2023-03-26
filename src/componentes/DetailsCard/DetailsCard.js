import React from 'react'
import '../DetailsCard/styled.css'
import { Flex } from '@chakra-ui/react'
import { InfoHour } from '../../componentes/InfoHour'
import { LineDividing } from '../../componentes/LineDividing'
import { IoIosSubway } from "react-icons/io";
import { FaWalking } from "react-icons/fa";
import { BsCarFrontFill } from "react-icons/bs";
import { MdDirectionsBike } from "react-icons/md";
import colorMapIcon from '../../assets/localIconColor.svg'
import { goToMapPage } from '../../router/Coordinator'
import { useNavigate } from 'react-router-dom'

export const DetailsCard = ({event}) => {
    const {adress,
        about,
        category,
        empresa,
        linksSales,
        name,
        price,
        startAt,
        type} = event
const navigate =useNavigate()


        const handleDate = (date) =>{
            // const day = date.substring(8, 10); 
            const time = date.substring(11, 16); 
            return time
          }
    return (
        <main>
        { name &&
        <>
            <div className='title-hour'>
                <Flex flexDirection='column' width='75%'>
                    <Flex flexDirection='column'>
                        <h2>{name}</h2>
                        <h2>Local: {empresa.name}</h2>
                        <p className='type-event-title'>{type} / {category}</p>
                    </Flex>
                </Flex>
                <Flex>
                    <InfoHour type='greenHour'>{handleDate(startAt)}</InfoHour>
                </Flex>
            </div>

            <LineDividing></LineDividing>

            <div className='body-infos'>

                <div className='event-about'>
                    <h2>Sobre:</h2>
                    <p>{about}.</p>
                </div>

                <div className='event-ticket'>
                    <h2>Ingresso:</h2>
                    <p id='paragraf'>R$ {price}</p>
                </div>

                <div className='event-ticket-link-buy'>
                    <h2>Onde comprar:</h2>{
                        linksSales.map((link)=>{
                            return  <a key={link} href={link}>{link}</a>
                        })
                    }
                </div>

                <div className='event-site'>
                    <h2>Site oficial:</h2>
                    <a href={empresa.link}>{empresa.link}</a>
                </div>

            </div>

            <div className='address-time-transportation'>
                <p className='address'>Rua {adress.rua}, {adress.numero} - {adress.bairro} - {adress.cep}</p>
                <div className='transportation-time'>
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
                    <img onClick={()=>goToMapPage(navigate)} className='map-icon-color' src={colorMapIcon} alt='Location Icon'/>
                </div>
            </div>
        </>

    }
        </main>
    )
}
