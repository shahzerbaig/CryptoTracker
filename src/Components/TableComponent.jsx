import React from 'react'
import Table from '@mui/material/Table';
import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Box } from '@mui/material';

const data =[{header:{
    id:'ID',
    coinName:'Coin Name',
    ticker:'Ticker',
    date:'Date'

}}]
const headerRow = data.map(item => <TableCell>{item}</TableCell>)
export const TableComponent = () => {
    return (
        <Box sx={{
            color:'purple',
            width: '100vw',
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },}}>
            <Table sx={{color:"#fff"}}>
                <TableHead>
                    <TableRow>
                        
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
            </Table>    
        </Box>
        
    )
}
