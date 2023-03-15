import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box'

export default function ({ todos, onDelete }) {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 250 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="right">Text</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map((row, index) => (
                        <TableRow
                            key={`${row.name} ${index}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {index}
                            </TableCell>
                            <TableCell align="right">{row.text}</TableCell>
                            <TableCell align="right">
                                <Stack direction="row">
                                    <Chip color='error' label="delete" variant='filled' clickable={true} onClick={() => onDelete(index)} />
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}