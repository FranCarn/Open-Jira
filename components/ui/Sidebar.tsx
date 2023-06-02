import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import React, { FC } from "react";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
const menuItems = ["Inbox", "Starred", "Send Email", "Drafts"];

interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (item: boolean) => void;
}

export const Sidebar: FC<Props> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleOpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <Drawer anchor="left" open={isSidebarOpen} onClose={handleOpenSidebar}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((text) => (
            <ListItem key={text} button>
              <ListItemIcon>
                <MailOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((text) => (
            <ListItem key={text} button>
              <ListItemIcon>
                <MailOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
