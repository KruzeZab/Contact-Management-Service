import { Box, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  console.log(isDesktop);
  const [open, setOpen] = useState(() => {
    if (isDesktop) return true;
    return false;
  });

  const onDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Header open={open} onDrawerToggle={onDrawerToggle} />
      <Sidebar open={open} onDrawerToggle={onDrawerToggle} />
    </Box>
  );
};

export default Layout;
