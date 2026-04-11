import { Tabs, Tab, Box } from '@mui/material';

const NavTabs = ({ currentTab, onTabChange }) => {
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
      <Tabs value={currentTab} onChange={onTabChange} centered>
        <Tab label="🚖 Заказы" value="orders" />
        <Tab label="👤 Водители" value="drivers" />
      </Tabs>
    </Box>
  );
};

export default NavTabs;