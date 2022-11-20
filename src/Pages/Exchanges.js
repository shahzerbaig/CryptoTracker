import { Box, Table, TableBody,TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React,{useEffect, useState} from 'react'
import { Paper } from '@mui/material'
export const Exchanges = () => {
    const [data,setData] = useState([])
    
    useEffect(() => {
        const fetchData = async () =>{
            await fetch('https://api.coingecko.com/api/v3/exchanges')
                                .then(res => res.json())
                                .then(res => setData(res))
                                .catch(error => `Error occurred ${error}`)
        }
        fetchData();
    },[])       
    return (
        <Box>
             <TableContainer component={Paper}>
                 <Table sx={{ minWidth: 650, backgroundColor: "black" }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{color:"white"}}>
                            <TableCell sx={{color:"white", fontWeight:"bold", fontSize:"21px",textAlign:"center", padding:"10"}} align="right">ID</TableCell>
                            <TableCell sx={{color:"white", fontWeight:"bold", fontSize:"21px",textAlign:"center", padding:"10"}} align="right">Name</TableCell>
                            <TableCell sx={{color:"white",fontWeight:"bold", fontSize:"21px",textAlign:"center", padding:"10"}} align="right">Year of Establishment</TableCell>
                            <TableCell sx={{color:"white", fontWeight:"bold", fontSize:"21px",textAlign:"center", padding:"10"}} align="right">Country</TableCell>                        
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map(item =>
                                <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell sx={{color:"white"}} align="left">{item.id}</TableCell>
                                <TableCell sx={{color:"white"}} align="left">{item.name}</TableCell>
                                <TableCell sx={{color:"white"}} align="left">{item?.year_established || <p style={{color:"red"}}>NONE</p>}</TableCell>
                                <TableCell sx={{color:"white"}} align="left">{item.country || <p style={{color:"red"}}>NONE</p>}</TableCell>
                            </TableRow> )}
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="right">None</TableCell>
                            <TableCell align="right">None</TableCell>
                            <TableCell align="right">None</TableCell>
                            <TableCell align="right">None</TableCell>
                        </TableRow>
                    </TableBody>
                 </Table>
             </TableContainer>
        </Box> 
    )
}

/* 
<table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>year of establish</td>
                        <td>country</td>
                    </tr>
                </thead>
                <tbody>
                        {data?(data.map(item => 
                            <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item?.year_established || 'NONE'}</td>
                                    <td>{item.country}</td>
                            </tr>)):
                        (<p></p>)}
                </tbody>
            </table> 
*/