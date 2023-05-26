"use client"


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from '../Drawer/SideBar';
import { Drawer } from '@mui/material';
import { drawerList } from '../HomeComponents/DrawerList';

export default function Navbar() {

    const [sidebarOpen,setSideBarOpen]=React.useState(false);
    const handleSideBarOpen =()=>setSideBarOpen(!sidebarOpen);
    const handleSidebarClose=()=>setSideBarOpen(false);

  return (
    <Box >
      <AppBar className="bg-white text-black" position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={handleSideBarOpen} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Zosh Cab
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
            anchor={"left"}
            open={sidebarOpen}
            onClose={handleSidebarClose}
          >
            {drawerList("left")}
          </Drawer>
    </Box>
  );
}