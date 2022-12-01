import React from 'react'
import { PageLayout } from '../../shareds/layouts/PageLayout'
import cafLogo from '../../assets/caf_logo.png'
import Image from 'react-bootstrap/Image'

const Home = () =>{
    return(
       <>
            <PageLayout>
            <Image src={cafLogo} />
            </PageLayout>
            
       </>
       
       
    )
}

export default Home