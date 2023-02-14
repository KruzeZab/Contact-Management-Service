import PropTypes from "prop-types";
import { Box, styled, useMediaQuery, useTheme } from "@mui/material";
import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Main = styled("main")<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,

    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: "300px",
  }),
}));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const drawerWidth = 300;
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
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
      <Sidebar
        open={open}
        onDrawerToggle={onDrawerToggle}
        drawerWidth={drawerWidth}
      />
      <Main open={open}>{children}</Main>
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
