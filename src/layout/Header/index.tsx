import PropTypes from "prop-types";

import {
  AppBar,
  Avatar,
  Box,
  FormControl,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  styled,
  Toolbar,
  Tooltip,
  Typography,
  InputAdornment,
  useMediaQuery,
  useTheme,
  Link as MuiLink,
} from "@mui/material";

import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  HelpOutline as HelpOutlineIcon,
  ArrowBack as ArrowBackIcon,
  Apps as AppsIcon,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";

const SearchInput = styled(InputBase)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "#292929" : "#f1f3f4",
  padding: "0 8px",

  "& .MuiInputBase-input": {
    height: "30px",
    padding: "7px 0",
    border: "none",
  },

  "&:focus-within": {
    backgroundColor:
      theme.palette.mode === "dark" ? "#373737" : "white",
    boxShadow: theme.shadows[1],
  },
}));

interface HeaderProps {
  onDrawerToggle: () => void;
}

const Header = ({ onDrawerToggle }: HeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  // For mobile device
  const [showSearchBar, setShowSearchBar] = useState(false);

  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleProfileClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSearchOpen = () => {
    setShowSearchBar(true);
  };

  const handleSearchClose = () => {
    setShowSearchBar(false);
  };

  const searchAdornment = () => {
    if (showSearchBar) {
      return (
        <InputAdornment position="start">
          <IconButton size="small" onClick={handleSearchClose}>
            <ArrowBackIcon />
          </IconButton>
        </InputAdornment>
      );
    } else {
      return (
        <InputAdornment position="start">
          <IconButton size="small">
            <SearchIcon />
          </IconButton>
        </InputAdornment>
      );
    }
  };

  const renderProfileMenu = (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleMenuClose}
      MenuListProps={{
        "aria-labelledby": "profile-menu",
      }}
    >
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Change Avatar</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const renderRightMenu = (
    <>
      <Tooltip title="Help" sx={{ mr: 1 }}>
        <IconButton color="inherit">
          <HelpOutlineIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="settings" sx={{ mr: 1 }}>
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Github">
        <IconButton color="inherit">
          <AppsIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleProfileClick}
          disableRipple
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar
            sx={{
              width: 26,
              height: 26,
              bgcolor: "orangered",
            }}
          >
            K
          </Avatar>
        </IconButton>
      </Tooltip>
    </>
  );

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "background.paper",
          color: "text.primary",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          {(isDesktop || !showSearchBar) && (
            <>
              {/* Hamburger Icon */}
              <IconButton
                onClick={onDrawerToggle}
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 0.5 }}
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              {/* Logo */}
              <MuiLink
                to="/"
                underline="none"
                color="inherit"
                component={RouterLink}
              >
                <Stack direction="row" alignItems="center" mr={3}>
                  <img
                    src="./logo.png"
                    alt="Google Keep"
                    width={40}
                    height={40}
                    style={{ marginRight: 7 }}
                  />
                  <Typography variant="body1" fontSize={22} noWrap>
                    Contacts
                  </Typography>
                </Stack>
              </MuiLink>
            </>
          )}

          {/* Searchbar */}
          {(isDesktop || showSearchBar) && (
            <Box ml={{ xs: 0, md: 10 }} mr={2} flexGrow={1}>
              <FormControl variant="standard" fullWidth>
                <SearchInput
                  onBlur={handleSearchClose}
                  autoFocus={!isDesktop}
                  type="search"
                  size="small"
                  placeholder="Search"
                  startAdornment={searchAdornment()}
                />
              </FormControl>
            </Box>
          )}
          {!showSearchBar && <Box flexGrow={{ xs: 1, lg: 1.5 }} />}

          {/* Right Menu */}
          <Box>
            {(!showSearchBar || isDesktop) && (
              <Tooltip
                title="Search"
                sx={{ mr: 1, display: { md: "none" } }}
              >
                <IconButton
                  color="inherit"
                  onClick={handleSearchOpen}
                >
                  <SearchIcon />
                </IconButton>
              </Tooltip>
            )}
            {renderRightMenu}

            {renderProfileMenu}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

Header.proptypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
