import React,{useState, useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Crypto } from '../contextApi/CryptoContext';
import {SingleCoin} from '../Config/api'
import axios from 'axios';
import { css } from '@emotion/css';
import { CoinInfo } from '../Components/CoinInfo';
import { LinearProgress,Typography } from '@mui/material';
import * as parse from  'html-react-parser'
export const CoinPage = () => {
    const { id } = useParams();

    //Internal State
    const [coin, setCoin] = useState();
    const {currency, symbol} = useContext(Crypto);

    // get Api Call
    const fetchCoin = async ()=>{
        const {data} = await axios.get(SingleCoin(id))
        setCoin(data)
    }
    useEffect(() => {
        fetchCoin()
    }, [])
   // Css Styles
//    const container =(theme)=> css({
//        color:"purple",
//        display:"flex",
//        [theme.breakpoint.down("md")]:{
//            flexDirection:"column",
//            alignItems:"center"
//        }
//    });
    const container = css`
        display:flex;
        flex-direction: row;
        
    `;
   console.log(container);
   const sideBar = css`
    width:30vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:25;
    border-right:2px solid grey;

   `;
   const heading = css`
        font-weight:bold;
        font-size:2rem;
        margin-bottom:20;
        font-family:Montserrat;
        text-align:center
   `;
   const description = css`
        width:100%;
        font-family:Montserrat;
        text-align:justify;
        padding:25;
   `;
   const marketData = css`
        align-self:start;
        padding:25;
        paddingTop:10;
        width:100%;
   `;
   if(!coin){
       return(
           <LinearProgress style={{backgroundColor:"gold"}}/>
       )
   }
    return (
        <div className={container}>
            <div className={sideBar}>
              <img 
                src={coin?.image.large} 
                alt={coin?.name}
                height='200'
                width='200'
                style={{
                    margin:"0 auto",

                    marginBottom:20,

                }}/>
                <Typography varient="h3" className={heading}>
                    {coin?.name}
                </Typography>
                <Typography varient="subtitle1" className={description}>
                {coin?.description.en.split(".")[0]}
                </Typography>
                <div className={marketData}>
                    <span style={{display:"flex", justifyContent:"center"}}>
                        <Typography variant="h5" className={heading}>
                            Rank:
                        </Typography>
                        &nbsp;&nbsp;
                        <Typography varient="h5" style={{fontFamily:"Montserrat",fontSize:"1.8rem"}}>
                            {coin?.market_cap_rank}
                        </Typography>
                    </span>
                    <span style={{display:"flex", margin:"0 auto", justifyContent:"space-evenly"}}>
                        <Typography variant="h5" className={heading}>
                            Current Price:
                        </Typography>
                        &nbsp;&nbsp;
                        <Typography varient="h5" style={{fontFamily:"Montserrat",fontSize:"1.8rem"}}>
                            {symbol}{" "}
                            {coin?.market_data.current_price[currency.toLowerCase()]}
                        </Typography>
                    </span>

                    <span style={{display:"flex", justifyContent:"space-evenly"}}>
                        <Typography variant="h5" className={heading} style={{fontFamily:"Montserrat",fontSize:"1.8rem"}}>
                            Market Cap:
                        </Typography>
                        &nbsp;&nbsp;
                        <Typography varient="h5" style={{fontFamily:"Montserrat",fontSize:"1.8rem"}}>
                            {symbol}&nbsp;{coin?.market_data.market_cap[currency.toLowerCase()]
                                        .toString()
                                        .slice(0,-6)}M
                        </Typography>
                    </span>
                </div>
            </div>
            {/* chart */}
            <div style={{width:"90%",height:"100%"}}>
            <CoinInfo coin={coin}/>
            </div>
            
        </div>
    )
}
