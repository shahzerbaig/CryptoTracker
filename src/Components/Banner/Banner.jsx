import { css } from '@emotion/css';
import { Container, Typography } from '@mui/material';
import React from 'react'
import { Caraousel } from './Caraousel';

const BannerComponent = css({
    backgroundColor:'white',
    backgroundImage:'url("banner2.jpg")',
    
})
const bannerContent = css({
    height:400,
    display:"flex",
    flexDirection:"column",
    paddingTop:25,
    justifyContent:"space-around",
    color:"white",
    
})
const tagline = css({
    display:"flex",
    flexDirection:"column",
    height:"40%",
    justifyContent:"center",
    textAlign:"center"
})
export const Banner = () => {
    return (
        <div className={BannerComponent}>
            <Container className={bannerContent}>
                <div className={tagline}>
                    <Typography 
                        variant="h2"
                        style={{
                            fontWeight:"bold",
                            marginBottom:15,
                            fontFamily:"Montserrat"
                        }}>
                        Crypto Hunter
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color:"darkgrey",
                            textTransform:"capitalize",
                            fontFamily:"Montserrat"
                        }}>
                        Get all the Info Regarding Crypto Currency
                    </Typography>
                </div>
                <Caraousel/>
            </Container>
        </div>
    )
}
