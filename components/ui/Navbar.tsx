import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React, { FC } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
interface Props {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (item: boolean) => void;
}
export const Navbar: FC<Props> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const handleOpenSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton size="large" edge="start" onClick={handleOpenSidebar}>
          <MenuOutlinedIcon />
        </IconButton>
        <Typography variant="h6">OpenJira</Typography>
      </Toolbar>
    </AppBar>
  );
};
