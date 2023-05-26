"use client";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import React, { Children } from "react";

import { MailIcon } from "@mui/icons-material";
import Navbar from "../Navbar/Navbar";
import DriverNavbar from "./DriverNavbar";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Dashbord from "./Dashbord";
import CancelIcon from '@mui/icons-material/Cancel';
import { useRouter } from "next/navigation";
import LogoutIcon from '@mui/icons-material/Logout';
const menu = [
  { name: "Dashboard", path: "/driver/dashbord",icon:<DashboardIcon className="text-blue-600"></DashboardIcon> },
  { name: "Complete Rides", path: "/driver/completed-rides", icon:<CheckCircleIcon className="text-green-600"></CheckCircleIcon>},
  { name: "Cancel Ride", path: "/driver/cancled-rides", icon:<CancelIcon className="text-red-600"/> },
  
];
const drawerWidth = 240;

const Layout = ({ Children }) => {
  const router=useRouter()
  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Toolbar />
      <List>
        {menu.map((item, index) => (
          <>
            <ListItem
            key={item.name}
            disablePadding
            onClick={() => router.push(item.path)}
          >
            <ListItemButton>
              {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
              {item.icon}
              <ListItemText className="ml-5" primary={item.name} />
            </ListItemButton>
          </ListItem>
          <Divider/>
          </>
        
        ))}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon><LogoutIcon/></ListItemIcon>
            <ListItemText primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
  return (
    <Box>
      {/* <CssBaseline /> */}
      <DriverNavbar />

      <Box className="flex">
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open={true}
          // onClose={handleCloseSideBar}
        >
          {drawer}
        </Drawer>
        <Box
          className="py-5 px-10"
          component="main"
          sx={{ flexGrow: 1 }}
        >
          <Toolbar />

          {Children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
