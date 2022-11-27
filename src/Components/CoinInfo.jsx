import axios from 'axios';
import React,{useState, useContext, useEffect} from 'react'
import { HistoricalChart } from '../Config/api';
import { CircularProgress } from '@mui/material';
import { Crypto } from '../contextApi/CryptoContext';
import { createTheme, css, ThemeProvider } from '@mui/material/styles';
import { Line } from 'react-chartjs-2';
import { chartDays } from '../Config/data';

//Test 
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import SelectButton from './SelectButton';
//Test Ends
export const CoinInfo = ({coin}) => {
   
    const [historicalData, setHistoricalData] = useState();
    const [days, setDays] = useState()
    
    const {currency} = useContext(Crypto)
    async function fetchHistoricalData(){
        const {data} = await axios.get(HistoricalChart(coin.id,days,currency))
        setHistoricalData(data.prices)
    }
    useEffect(()=>{
        fetchHistoricalData();
    },[currency,days]);
    console.log(historicalData);
    //Test 
   ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
   //Test Ends
    const darkTheme = createTheme({
        palette:{
            primary:{
                main:"#fff"
            },
            type:"dark"
        }
    });
    const container = css`
        width:100vw;
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin-top:25;
        padding:40;
        background-color:white;
    `;

    return (
        <ThemeProvider theme={darkTheme}>
            <div className={container}>
               {!historicalData?(
                   <CircularProgress
                    style={{
                        color:"gold"
                    }}
                    size={250}
                    thickness={1}
                   />
               ):(<div>
                   <Line data={{
                      labels: historicalData?.map(coin => {
                        let date = new Date(coin[0]);
                        let time = date.getHours()>12?
                                  `${date.getHours() - 12}:${date.getMinutes()}PM`:
                                  `${date.getHours()}:${date.getMinutes()}AM`
                        return days===1?time:date.toLocaleDateString()
                     
                        }),
                      datasets:[
                        {data: historicalData.map(coin=> coin[1]),
                        label:`Price( Past${days} Days) in ${currency}`,
                        borderColor:'#EEBC1D'}
                      ]
                   }}
                      options={{
                        elements:{
                          point:{
                            radius:1,
                          }
                        }
                      }} />;
                      <div
                        style={{
                          display:"flex",
                          marginTop:20,
                          justifyContent:"space-around",
                          width:"100%"
                        }}>
                        {chartDays.map(day =>(
                          <SelectButton
                            key={day.value}
                            onClick={()=>setDays(day.value)}
                            selected={day.value===days}
                            >{day.label}</SelectButton>
                        ))}
                      </div>
               </div>)}
            </div>
        </ThemeProvider>
    )
}
