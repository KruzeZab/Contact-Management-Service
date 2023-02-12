import { Box } from "@mui/material";
import { useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = () => {
  const [open, setOpen] = useState(true);

  const onDrawerToggle = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <Box display="flex" flexDirection="column">
      <Header onDrawerToggle={onDrawerToggle} />
      <Sidebar open={open} />
    </Box>
  );
};

export default Layout;
