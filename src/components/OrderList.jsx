import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Chip
} from '@mui/material';

const getStatusColor = (status) => {
  switch (status) {
    case 'Новый': return '#2196f3';
    case 'В пути': return '#ff9800';
    case 'Завершён': return '#4caf50';
    case 'Отменён': return '#f44336';
    case 'Ожидание': return '#9c27b0';
    default: return '#757575';
  }
};

const OrderList = ({ orders }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell>Время</TableCell>
            <TableCell>Клиент</TableCell>
            <TableCell>Адрес</TableCell>
            <TableCell>Статус</TableCell>
            <TableCell>Водитель</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} hover>
              <TableCell>{order.time}</TableCell>
              <TableCell>{order.client}</TableCell>
              <TableCell>{order.address}</TableCell>
              <TableCell>
                <Chip
                  label={order.status}
                  size="small"
                  sx={{ backgroundColor: getStatusColor(order.status), color: 'white' }}
                />
              </TableCell>
              <TableCell>{order.driver}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderList;