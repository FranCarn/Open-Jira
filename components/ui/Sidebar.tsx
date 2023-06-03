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

export const Sidebar: FC = () => {
  return (
    <Drawer anchor="left">
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
