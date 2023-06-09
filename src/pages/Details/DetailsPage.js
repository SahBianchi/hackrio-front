import React, { useEffect, useState } from 'react'
import { Layout } from '../../componentes/Layout'
import '../Details/styled.css'
import detailsImage from '../../assets/detailsImage.jpeg'
import { DetailsCard } from '../../componentes/DetailsCard/DetailsCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { BASE_URL } from '../../constants/baseUrl'
import { Skeleton, Spinner } from '@chakra-ui/react'

export const DetailsPage = () => {
    const params = useParams()
    const [event, setEvent] =useState()
    const [isLoading,setIsloading] = useState(false)

    useEffect(()=>{
      
getEvent()
    },[])
    const getEvent = async () =>{
        try {
            setIsloading(true)
            const result = await axios.get(`${BASE_URL}/events?id=${params.id}`)
            setEvent(result.data.events[0])
            setIsloading(false)            
        } catch (error) {
            setIsloading(false)
            console.log(error)
        }
    }
    return (
        
        <Layout>
            {event &&
<>
                <img className='image-details' src={detailsImage} alt='Image Details' />
                {isLoading?
                    <Spinner w="60px" color='white' marginTop={"100px"}/>:
                <DetailsCard event={event}/>}
</>
            }
        </Layout>
    )
}
