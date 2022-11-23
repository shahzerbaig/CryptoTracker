import { Box, Container,
         Table,
        TableBody, 
        TableCell, 
        TableContainer, 
        TableRow, 
        TextField, 
        TableHead, 
        Typography,
        LinearProgress, 
        Paper,
        Pagination} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import axios from 'axios';
import React,{useState, useContext, useEffect} from 'react'
import { CoinList } from '../Config/api';
import {Crypto} from '../contextApi/CryptoContext';
import { css } from '@emotion/css';
import { useNavigate } from 'react-router';
import { numberWithCommas } from './Banner/Caraousel';
import { ClassNames } from '@emotion/react';

const CoinsTable = () => {
   
    const history = useNavigate();
    // Context data
    const {currency ,symbol} = useContext(Crypto);

    // Components Internal State
    const [coins,setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page,setPage] = useState(1);
    //Search Functions
    function onSearchChange(event){
        event.preventDefault();
        setSearch(event.target.value)
    }
    function handleSearch(){
        return coins.filter((coin)=>(
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)
        ))
    }
    async function fetchCoins(){
        setLoading(true)
        const {data} = await axios.get(CoinList(currency))
        setCoins(data)
        setLoading(false)              
    }

    console.log(coins);
    useEffect(() => {
        fetchCoins()
    }, [currency])
    
    
    // creating Theme 
    const darkTheme = createTheme({
        palette:{
            mode:"dark",
            primary: {
                main:"#fff",
            },
            text:{
                primary:"#fff",
                
            },
        }
    })
    // styles for row
    const tableRow = css`
        background-color:#16171a,
        cursor:pointer,
        font-family:Montserrat

    `;

    return (
        <ThemeProvider theme={darkTheme}>
            <Container style={{
                                textAlign:'center'
                            }}>
            <Typography variant="h4" 
                        style={{
                                margin:18,
                                fintFamily: "Montserrat"        
                            }}
                >
                Crypto Currency Prices by Market Cap
            </Typography>    
            <TextField 
                label="Search for Crypto Currency"
                variant="outlined"
                style={{
                    marginBottom:20,
                    width:"100%",
                    borderColor:"white",
                    
                    
                }}
                onChange={onSearchChange}
                value={search}
                >
                    
            </TextField>    
  
            
                <TableContainer component={Paper}>
                    {loading? 
                        <LinearProgress style={{backgroundColor:"gold"}} />: 
                             <Table>
                                <TableHead style={{backgroundColor:"#EE1CBD"}}>
                                    <TableRow>
                                        {["Coin","Price","24 Change","Market Cap"].map((head)=>
                                           <TableCell
                                           style={{
                                               color:"black",
                                               backgroundColor:"gold",
                                               fontWeight:"700",
                                               fontFamily:"Montserrat",
                                               textAlign:"center"
                                           }}
                                           key={head}
                                           align={head ==="Coin"? "left": "right"}>
                                       {head}
                                       </TableCell> )}
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody >
                                    {handleSearch().slice((page-1)*10,(page-1)*10+10).map((row)=>{
                                         const profit = row.price_change_24h > 0;
                                        return (
                                            <TableRow
                                                onClick={()=> history(`/coins/${row.id}`)}
                                                key={row.name}
                    
                                                cx={tableRow}>
                                                <TableCell 
                                                component='th'
                                                scope='row'
                                                style={{displey:'flex',gap:'15'}}
                                                >
                                                    <img src={row.image} 
                                                        alt={row.name} 
                                                        height="50"
                                                        style={{marginBottom:10}} />
                                                    <div style={{display:"flex",flexDirection:"column"}}>
                                                        <span style={{textTransform:"uppercase",fontSize:22}}>{row.symbol}</span>
                                                        <span style={{color:"darkgrey"}}>{row.name}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell style={{color:"white",textAlign:"center"}}>{symbol} {numberWithCommas(row.current_price.toFixed(2))}</TableCell>
                                                <TableCell 
                                                    align='right'
                                                    style={{
                                                        color: profit > 0? "rgba(14,203,192)":"red",
                                                        fontWeight:500
                                                    }}>
                                                    {profit && "+"}
                                                    {row.price_change_percentage_24h.toFixed(2)}%
                                                </TableCell>
                
                                            <TableCell style={{color:"white",textAlign:"center"}}>
                                                {row.market_cap.toString().slice(0,-6)} M</TableCell>
                                            </TableRow>
                                        )
                                    })}
                                        {/* {coins? coins.map(coin =>
                                            <TableRow key={coin.id} sx={{color:"white"}}>
                                            <TableCell style={{color:"white",textAlign:"center"}}><>
                                                                                                    <img src={coin.image} alt={coin.name} height="50px" />
                                                                                                    <p>{coin.name}</p>
                                                                                                </>
                                            </TableCell>
                                            <TableCell style={{color:"white",textAlign:"center"}}>{coin.current_price}</TableCell>
                                            <TableCell style={{color:"white",textAlign:"center"}}>{coin.price_change_24h}</TableCell>
                                            <TableCell style={{color:"white",textAlign:"center"}}>{coin.market_cap}</TableCell>
                                        </TableRow>):<></>} */}
                                </TableBody>
                            </Table>   }
                    
                </TableContainer>   
                    
                <Pagination
                    style={{
                        padding:20,
                        width:"100%",
                        display:"flex",
                        justifyContent:"center"
                    }}
                    onChange={(_,value)=>{
                        console.log(value);
                        setPage(value);
                        window.scroll(0,450);
                    }}
                    count={parseInt((handleSearch()?.length/10)?.toFixed(0))}/>
            </Container>
        </ThemeProvider>
    )
}

export default CoinsTable
