import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/system';

const useStyles = styled

const DashboardTable = () => {
    const tableheaders = ["Name", "Weight", "Age", "Height"];
    const rows = ["Natan" , 80, 22, 1.79];

  return (
    <div>
        <div>Table</div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {tableheaders.map(tablehead => {
                            if (tablehead === tableheaders[0]){
                                return <TableCell>
                                    {tablehead}
                                </TableCell>
                            }
                            else {
                                return <TableCell align='right'>
                                    {tablehead}
                                </TableCell>
                            }
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {rows.map(row => {
                            return <TableCell>
                                {row}
                            </TableCell>
                        })}
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default DashboardTable;