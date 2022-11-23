import React,{useContext, useState, useEffect} from 'react'
import { css } from '@emotion/css'
import axios from 'axios'
import { TrendingCoins } from '../../Config/api'
import {Crypto} from '../../contextApi/CryptoContext'
import AliceCarousel from 'react-alice-carousel'
import { Link } from '@mui/material'


const CaraouselCss = css({
    height:"50%",
    display:"flex",
    alignItems:"center"
})
export function numberWithCommas(x){
    return x.toString().replace(/B(?=(\d{3})+(?!\d))/g,",")
}
export const Caraousel = () => {
    const [trending, setTrending] = useState([])
    const {currency,symbol} = useContext(Crypto);
    
    useEffect(() => {
        const fetchTrendingCoin = async ()=>{
            const {data} = await axios.get(TrendingCoins(currency))
            setTrending(data)
        }
        fetchTrendingCoin()
    }, [currency])

    const items = trending.map((coin) =>{
        let profit = coin.price_change_24h >= 0;
        return(
            <Link key={coin.name}
                className={CaraouselCss}
                to={`/coins/${coin.id}`}>
            <div style={{display:'flex',
                        flexDirection:'column',
                        cursor:'pointer',
                        textTransform:'uppercase',
                        color:'white',
                        textAlign:'center'}}>
            <img
                    src={coin?.image}
                    alt={coin?.name}
                    height="80"
                    style={{marginBottom:10}}/>
                <span style={{'&:hover':{
                    textDecoration:"none"
                }}}>
                    {coin?.symbol}
                    &nbsp;
                    <span style={{color: profit > 0?"rgb(14,203,129)":"red"}}>
                        {profit && '+'}
                        {coin?.price_change_24h?.toFixed(2)}%
                    </span>
                </span>
    
                <span style={{fontSize:22,fontWeight:500,textDecoration:"none"}}>
                    {symbol}{numberWithCommas(coin?.current_price)}
                </span>
            </div>
            </Link>
        )
    })
    const responsive = {
        0:{
            items:2
        },
        512:{
            items:4
        }
    }
    return (
        <div className={CaraouselCss}>
            <AliceCarousel
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                responsive={responsive}
                autoPlay
                items={items}
            />
        </div>
    )
}
