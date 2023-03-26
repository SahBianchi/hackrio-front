import React from 'react'
import { Layout } from '../../componentes/Layout'
import '../Details/styled.css'
import detailsImage from '../../assets/detailsImage.jpeg'
import { DetailsCard } from '../../componentes/DetailsCard/DetailsCard'

export const DetailsPage = () => {
    return (
        <Layout>
                <img className='image-details' src={detailsImage} alt='Image Details' />
                <DetailsCard/>
        </Layout>
    )
}
