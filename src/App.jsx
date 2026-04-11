import { useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import NavTabs from './components/NavTabs';
import DriverList from './components/DriverList';
import OrderList from './components/OrderList';
import { initialDrivers, initialOrders } from './data/mockData';

function App() {
  const [currentTab, setCurrentTab] = useState('orders');
  const [drivers, setDrivers] = useState(initialDrivers);
  const [orders] = useState(initialOrders);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const handleDriverStatusChange = (driverId, newStatus) => {
    setDrivers(prevDrivers =>
      prevDrivers.map(driver =>
        driver.id === driverId ? { ...driver, status: newStatus } : driver
      )
    );
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
          🚕 Панель диспетчера такси
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          Управление заказами и водителями
        </Typography>

        <NavTabs currentTab={currentTab} onTabChange={handleTabChange} />

        <Box sx={{ mt: 2 }}>
          {currentTab === 'orders' && <OrderList orders={orders} />}
          {currentTab === 'drivers' && (
            <DriverList drivers={drivers} onStatusChange={handleDriverStatusChange} />
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default App;