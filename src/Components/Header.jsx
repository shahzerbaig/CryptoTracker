import { AppBar,
        Container,
        Box,
        MenuItem,
        Select,
        Toolbar,
        Typography,
        createTheme,
        FormControl,
        InputLabel,
        ThemeProvider } from '@mui/material';
import React,{useContext} from 'react'
import { styled } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';
import CryptoContext, { Crypto } from '../contextApi/CryptoContext';
import { CryptoState } from '../contextApi/CryptoContext';


export const Header = () => {
    //const currency = 0;
    // loading Crypto state 
    const {currency,setCurrency} = useContext(Crypto);
    
    //handle Select change 
    function handleSelectChange(event){
        setCurrency(event.target.value);
    }
    
    const darkTheme = createTheme({
        palette:{
            primary:{
                main:'#fff'
            },
            type:'dark'
        }
    });
    const navigate = useNavigate()
    const Title = styled('a')(
        {
            flex:1,
            color:"gold",
            fontFamily:"Montserrat",
            fontWeight:"bold",
            cursor:"pointer"
        }
    )
    function onTitleClick(event){
        navigate("/");
    }
    return (
    <ThemeProvider theme={darkTheme}>
        <AppBar color='transparent' position='static'>
            <Box sx={{ flexGrow: 1 }} style={{marginTop:'5px'}}>
                <Toolbar sx={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                        <Typography onClick={onTitleClick}>
                            <Title>
                                Crypto Hunter
                            </Title>
                        </Typography>
                        <FormControl>

                        <InputLabel id="demo-simple-select-label" style={{color:'#fff'}}>
                            Currency
                        </InputLabel>
                        <Select 
                            label={"Currency"}
                            value={currency}
                            onChange={handleSelectChange}
                            style={{
                                width:200,
                                height:60,
                                marginRight: 15,
                                color:'#fff',
                                
                            }}>
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="INR">INR</MenuItem>
                    </Select>
                        </FormControl>
                </Toolbar>
            </Box>
        </AppBar>
    </ThemeProvider>    
    )
}
