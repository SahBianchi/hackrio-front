import React from 'react'
import { Flex } from '@chakra-ui/react'
import { IoIosSubway } from "react-icons/io";
import { FaWalking } from "react-icons/fa";
import { BsCarFrontFill } from "react-icons/bs";
import { MdDirectionsBike } from "react-icons/md";
import { InfoHour } from '../../componentes/InfoHour'
import { LineDividing } from '../../componentes/LineDividing'
import '../MapCard/styled.css'
import { useNavigate } from 'react-router-dom';
import { goToDetails } from '../../router/Coordinator';

export const MapCard = ({event}) => {
    const {
        id,
        adress,
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
            <div className='info-event-map'>
                <div className='infos-half-top' onClick={()=>goToDetails(navigate,id)}>
                    <Flex flexDirection='column'>
                        <Flex flexDirection='column'>
                            <h2 className='title-top'>{name}</h2>
                            <h2 className='title-top'>Local: {empresa.name}</h2>
                        </Flex>
                        <Flex flexDirection='column' >
                            <p className='type-event'>{type} / {category}</p>
                            <p className='type-event'>R${price}</p>
                        </Flex>
                    </Flex>
                    <Flex>
                        <InfoHour type='greenHour'>{handleDate(startAt)}</InfoHour>
                    </Flex>
                </div>
                <LineDividing />
                <div className='infos-half-bottom'>
                    <p>Rua {adress.rua}, {adress.number} -{adress.bairro} - {adress.cep}</p>
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
        </main>
    )
}
