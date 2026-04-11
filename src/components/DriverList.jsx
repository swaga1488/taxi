import { useState } from 'react';
import {
  Card, CardContent, Typography, Select, MenuItem, FormControl,
  Grid, Box, Chip
} from '@mui/material';
import { driverStatuses } from '../data/mockData';

const DriverList = ({ drivers, onStatusChange }) => {
  const getStatusColor = (status) => {
    const found = driverStatuses.find(s => s.value === status);
    return found ? found.color : '#ccc';
  };

  return (
    <Grid container spacing={2}>
      {drivers.map((driver) => (
        <Grid item xs={12} sm={6} md={4} key={driver.id}>
          <Card variant="outlined" sx={{ borderLeft: `6px solid ${getStatusColor(driver.status)}` }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {driver.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {driver.car}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mt: 2 }}>
                <Chip
                  label={driverStatuses.find(s => s.value === driver.status)?.label || driver.status}
                  size="small"
                  sx={{ backgroundColor: getStatusColor(driver.status), color: 'white' }}
                />
                <FormControl size="small" sx={{ minWidth: 140 }}>
                  <Select
                    value={driver.status}
                    onChange={(e) => onStatusChange(driver.id, e.target.value)}
                    displayEmpty
                  >
                    {driverStatuses.map((opt) => (
                      <MenuItem key={opt.value} value={opt.value}>
                        {opt.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DriverList;