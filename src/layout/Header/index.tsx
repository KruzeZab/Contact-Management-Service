import {
  AppBar,
  Avatar,
  Box,
  Divider,
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
} from "@mui/material";

import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  HelpOutline as HelpOutlineIcon,
  ArrowBack as ArrowBackIcon,
} from "@mui/icons-material";
import { useState } from "react";

const SearchInput = styled(InputBase)(({ theme }) => ({
  backgroundColor: "#F1F3F4",
  padding: "0 8px",

  "& .MuiInputBase-input": {
    height: "30px",
    padding: "7px 0",
    border: "none",
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  // For mobile device
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleClick = (
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

  return (
    <>
      <AppBar
        position="static"
        elevation={0}
        sx={{ bgcolor: "common.white", color: "text.primary" }}
      >
        <Toolbar>
          {(isDesktop || !showSearchBar) && (
            <>
              {/* Hamburger Icon */}
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                sx={{ mr: 0.5 }}
                aria-label="open drawer"
              >
                <MenuIcon />
              </IconButton>
              {/* Logo */}
              <Stack direction="row" alignItems="center" mr={3}>
                <img
                  src="./logo.png"
                  alt="Google Keep"
                  width={40}
                  height={40}
                  style={{ marginRight: 7 }}
                />
                <Typography
                  variant="body1"
                  color="text.secondary"
                  fontSize={22}
                >
                  Contacts
                </Typography>
              </Stack>
            </>
          )}

          {/* Searchbar */}
          {(isDesktop || showSearchBar) && (
            <Box ml={{ xs: 0, md: 4 }} mr={2} flexGrow={1}>
              <FormControl variant="standard" fullWidth>
                <SearchInput
                  onBlur={handleSearchClose}
                  autoFocus
                  type="search"
                  size="small"
                  placeholder="Search"
                  startAdornment={searchAdornment()}
                />
              </FormControl>
            </Box>
          )}
          {!showSearchBar && <Box flexGrow={{ xs: 1, lg: 2 }} />}

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
                  <SearchIcon sx={{ color: "#5F6368" }} />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Help" sx={{ mr: 1 }}>
              <IconButton color="inherit">
                <HelpOutlineIcon sx={{ color: "#5F6368" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="settings">
              <IconButton color="inherit">
                <SettingsIcon sx={{ color: "#5F6368" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
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

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                My account
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                Change Avatar
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <Divider />
    </>
  );
};

export default Header;
