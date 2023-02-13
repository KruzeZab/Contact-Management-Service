import { useState } from "react";
import PropTypes from "prop-types";
import {
  alpha,
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import {
  ExpandMore as ExpandMoreIcon,
  ExpandLess as ExpandLessIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import {
  appInfo,
  communicate,
  labels,
  quickActions,
  socialLinks,
} from "./index.utils";

interface SidebarProps {
  open: boolean;
}

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#9c27b0",
  color: "#fff",
  boxShadow: theme.shadows[1],
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1.5, 4),
  textTransform: "none",

  "&:hover": {
    backgroundColor: alpha("#9c27b0", 0.8),
  },
}));

const Sidebar = ({ open }: SidebarProps) => {
  const [labelsExpanded, setLabelsExpanded] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:900px)");

  const drawerWidth = 300;

  return (
    <Drawer
      sx={{
        width: drawerWidth,

        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          borderWidth: 0,
        },
      }}
      variant="persistent"
      anchor="left"
      open={isSmallScreen ? false : open}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <ListItem>
            <PrimaryButton color="secondary" startIcon={<AddIcon />}>
              Create Contact
            </PrimaryButton>
          </ListItem>
        </List>
        <List dense>
          {/* Quick Actions */}
          {quickActions.map(({ text, icon }, index) => (
            <ListItem key={text} sx={{ pl: 0 }}>
              <ListItemButton selected={index === 0}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* Labels */}
        <List dense>
          <ListItem sx={{ pl: 0 }}>
            <ListItemButton
              onClick={() => {
                setLabelsExpanded((expanded) => !expanded);
              }}
            >
              <ListItemIcon>
                {labelsExpanded ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )}
              </ListItemIcon>
              <ListItemText primary="Labels" />
            </ListItemButton>
          </ListItem>
          <Collapse in={labelsExpanded} timeout="auto" unmountOnExit>
            <List component="div" dense>
              {/* show all labels */}
              {labels.map(({ text, icon }) => (
                <ListItem key={text} sx={{ pl: 4 }}>
                  <ListItemButton>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>

          {/* View & Add Label */}

          <ListItem sx={{ pl: 0 }}>
            <ListItemButton>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="Create Label" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        {/* Socials */}
        <List dense>
          {socialLinks.map(({ text, icon }, index) => (
            <ListItem key={text} sx={{ pl: 0 }}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        {/* Communicate */}
        <List dense>
          {communicate.map(({ text, icon }) => (
            <ListItem key={text} sx={{ pl: 0 }}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        {/* App Info */}
        <List dense>
          {appInfo.map(({ text, icon }) => (
            <ListItem key={text} sx={{ pl: 0 }}>
              <ListItemButton>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default Sidebar;
