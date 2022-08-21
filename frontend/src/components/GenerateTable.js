import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const MyButton = styled('div')(({theme}) =>({
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'brown',     
}))

const GenerateTable = ({ tableInputs }) => {
  return (
    <div>
        <MyButton>
        <div>Table</div>
            
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {tableInputs.tableheaders.map(tablehead => {
                            return <TableCell key={tablehead}>
                                    {tablehead}
                                </TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {tableInputs.rows.map(row => {
                            return <TableCell key={row}>
                                {row}
                            </TableCell>
                        })}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        </MyButton>
    </div>
  )
}

export default GenerateTable;