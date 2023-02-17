import { useState } from "react";
import PropTypes from "prop-types";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Main } from "./Layout.utils";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState(() => {
    if (isDesktop) {
      return true;
    }
    return false;
  });

  const drawerWidth = 280;

  const onDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box display="flex" flexDirection="column">
      <>
        <Header open={open} onDrawerToggle={onDrawerToggle} />
        <Sidebar
          open={open}
          onDrawerToggle={onDrawerToggle}
          drawerWidth={drawerWidth}
        />
      </>

      <Main open={open} drawerwidth={drawerWidth}>
        {children}
      </Main>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
