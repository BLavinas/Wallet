import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicTable(expenses) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Descrição</TableCell>
            <TableCell align="right">Tag</TableCell>
            <TableCell align="right">Método de pagamento</TableCell>
            <TableCell align="right">Valor</TableCell>
            <TableCell align="right">Moeda</TableCell>
            <TableCell align="right">Câmbio utilizado</TableCell>
            <TableCell align="right">Valor convertido</TableCell>
            <TableCell align="right">Moeda de conversão</TableCell>
            <TableCell align="right">Editar/Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense) => (
            <TableRow
              key={expense.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {expense.description}
              </TableCell>
              <TableCell align="right">{expense.tag}</TableCell>
              <TableCell align="right">{expense.method}</TableCell>
              <TableCell align="right">{Number(expense.value).toFixed(2)}</TableCell>
              <TableCell align="right">{expense.exchangeRates[expense.currency].name}</TableCell>
              <TableCell align="right">{Number(expense.exchangeRates[expense.currency].ask).toFixed(2)}</TableCell>
              <TableCell align="right">{Number((expense.exchangeRates[expense.currency].ask))
                * Number((expense.value)).toFixed(2)}</TableCell>
              <TableCell align="right">Real</TableCell>
              <TableCell align="right"> <button
                type="button"
                onClick={() => this.editHandleClick(expense.id)}
                data-testid="edit-btn"
              >
                Editar

              </button>
                <button
                  type="button"
                  id={expense.id}
                  onClick={this.deleteHandleClick}
                  data-testid="delete-btn"
                >
                  Excluir

                </button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
