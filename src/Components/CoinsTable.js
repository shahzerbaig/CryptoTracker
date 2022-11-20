import { Container, TextField, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { color } from '@mui/system';
import axios from 'axios';
import React,{useState, useContext, useEffect} from 'react'
import { CoinList } from '../Config/api';
import {Crypto} from '../contextApi/CryptoContext';
const CoinsTable = () => {

    // Context data
    const {currency} = useContext(Crypto);

    // Components Internal State
    const [coins,setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("")

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
            primary:{
                main:"#fff",
            },
            type:"#dark"
        },
    })
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
                    color:"#fff",
                    
                }}>
            </TextField>            
            </Container>
        </ThemeProvider>
    )
}

export default CoinsTable
