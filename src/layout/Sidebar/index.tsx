import { useState } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
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

const Sidebar = ({ open }: SidebarProps) => {
  const [labelsExpanded, setLabelsExpanded] = useState(false);
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
      open={open}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List dense>
          {/* Quick Actions */}
          {quickActions.map(({ text, icon }, index) => (
            <ListItem key={text}>
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
          <ListItem>
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

          <ListItem>
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
            <ListItem key={text}>
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
            <ListItem key={text}>
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
            <ListItem key={text}>
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
