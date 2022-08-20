import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/system';

// const MyButton = styled(Table)(({theme}) =>({
//     // backgroundColor: theme.palette.primary.contrastText
    
// }))

const GenerateTable = ({ tableInputs }) => {
    

  return (
    <div>
        <div>Table</div>
        {/* <MyButton> */}
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {tableInputs.tableheaders.map(tablehead => {
                                return <TableCell>
                                    {tablehead}
                                </TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {tableInputs.rows.map(row => {
                            return <TableCell>
                                {row}
                            </TableCell>
                        })}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        {/* </MyButton> */}
    </div>
  )
}

export default GenerateTable;