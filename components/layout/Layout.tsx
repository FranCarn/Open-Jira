import { Box } from "@mui/material";
import Head from "next/head";
import React, { FC, useState } from "react";
import { Navbar, Sidebar } from "../ui";
interface Props {
  title?: string;
  children: JSX.Element;
}
export const Layout: FC<Props> = ({ title = "OpenJira", children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box sx={{ padding: "10px 20px" }}>{children}</Box>
    </Box>
  );
};
