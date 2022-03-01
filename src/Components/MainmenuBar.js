import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  Typography,
  Button,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const netcomStyle = (theme) => ({
  color: "black",
  flex: 1,
});

const menuIconStyle = (theme) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
});

const menuStyle = (theme) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },

  [theme.breakpoints.up("md")]: {
    color: "black",
    marginLeft: 5,
    marginRight: 5,
  },
});
function MainmenuBar() {
  const [open, setopen] = useState(false);

  const menuItem = [
    "Home",
    "Services",
    "Tariff",
    "Special Packages",
    "Job Vacancy",
    "Gallery & Events",
  ];

  const handleClick = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(!open);
  };

  return (
    <>
      <Toolbar
        style={{
          backgroundColor: "#CDD0CB",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography variant="h6" sx={netcomStyle}>
          Netcom Cabs
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h7">
            Call & Book Or Tell Your Feedback
          </Typography>
          <Typography variant="h7">0462-4200522</Typography>
        </div>
      </Toolbar>

      <AppBar position="sticky">
        <Toolbar
          style={{
            backgroundColor: "#CDD0CB",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              flex: 1,
            }}
          >
            {menuItem.map((text) => (
              <Button size="large" sx={menuStyle}>
                {text}
              </Button>
            ))}
          </div>
          <div>
            <IconButton size="small" sx={menuIconStyle} onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              style={{ marginTop: 100 }}
            >
              {menuItem.map((text) => (
                <MenuItem>{text}</MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default MainmenuBar;
