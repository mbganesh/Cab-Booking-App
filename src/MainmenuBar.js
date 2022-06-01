import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, IconButton, Menu, Typography, Button, MenuItem, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Colors, Fonts } from "./constants";
import { useNavigate } from "react-router";
import { ArrowDropDown } from "@mui/icons-material";
import HomeIcon from '@mui/icons-material/Home';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import StarsIcon from '@mui/icons-material/Stars';
import WorkIcon from '@mui/icons-material/Work';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
const netcomStyle = (theme) => ({
  color: Colors.APP_SECOND_COLOR,
  flex: 1,
  fontFamily: Fonts.UBUNTU,
  fontWeight: "bold"
});

const menuIconStyle = (theme) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
});


function MainmenuBar(props) {

  const navigate = useNavigate();
  const [open, setopen] = useState(false);
  const [specialPackageAnchorEl, setspecialPackageAnchorEl] = React.useState(null);



  const menuStyle = (theme) => ({
    fontFamily:Fonts.UBUNTU,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },

    [theme.breakpoints.up("md")]: {

      marginLeft: 5,
      marginRight: 5,
    },
    '&:hover': {
      background: 'none',
  },
  });

  const specialPackagesMenu = ["Tirunelveli To Tiruchendur",
    "Tirunelveli To Kanniyakumari",
    "Tirunelveli To Vaigaikulam Airport",
    "Tirunelveli To Trivandrum Airport",
    "Tirunelveli To Nagarcoil",
    "Tirunelveli To Chennai",
    "Tirunelveli To Courtallam",
    "Tirunelveli To Papanasam",
    "Tirunelveli To Navathirupathi",
    "Tirunelveli To Tuticorin",
    "Tirunelveli To Madurai"
  ]

  const menuItem = [
    "Home",
    "Services",
    "Tariff",
    "Special Packages",
    "Job Vacancy",
    "Our Vehicles"
  ];


  const icons = [<HomeIcon/>, <MiscellaneousServicesIcon/>,<CurrencyRupeeIcon/>,<StarsIcon/>,<WorkIcon/>,<DirectionsCarIcon/>   ]



  const onMenuItemClick = (menuItemName, event) => {

    console.log(menuItemName)
    if (menuItemName === "Job Vacancy") {
      navigate('/jobVacancy');
    }
    if (menuItemName === "Home") {
      navigate('/');
    }
    if (menuItemName === "Our Vehicles") {
      navigate('/ourVehicles');
    }
    if (menuItemName === "Services") {
      navigate('/services');
    }
    if (menuItemName === "Special Packages") {
      setspecialPackageAnchorEl(event.currentTarget);
    }
  }


  const onSpecialPackageMenuItemClick = (specialPackageItemName) => {
    console.log(specialPackageItemName)
    setspecialPackageAnchorEl(null);
    navigate('/specialPackages',  { state: { specialPackageItemName: specialPackageItemName } });
    
  }

  const handleClick = () => {
    setopen(true);
  };

  const handleClose = () => {
    setopen(!open);
  };

  useEffect(() => {
    console.log("ggd")
  
   
  }, [specialPackageAnchorEl])
  

  return (
    <>
      <Toolbar style={{ backgroundColor: Colors.APP_MAIN_COLOR, display: "flex", flexDirection: "row" }} >
        <Typography variant="h5" sx={netcomStyle}>
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
          <Typography style={{ fontFamily: Fonts.UBUNTU }} variant="h7">
            Call & Book Or Tell Your Feedback
          </Typography>

          <Tooltip title="Click to Call Netcom Cabs" arrow>
            <Typography style={{ color: Colors.APP_SECOND_COLOR, fontFamily: Fonts.UBUNTU, cursor: "pointer" }} onClick={() => { window.open("tel:04624200522") }} variant="h6">0462-4200 522</Typography>
          </Tooltip>
        </div>
      </Toolbar>

      <AppBar position="sticky">
        <Toolbar
          style={{
            backgroundColor: Colors.APP_MAIN_COLOR,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", flex: 1, }}          >
            {menuItem.map((text, index) => (
              <Button startIcon={icons[index]} disableRipple id={text} onClick={(e) => { onMenuItemClick(text, e) }} size="large" sx={menuStyle} style={{ color: text === props.appBtnText ? Colors.APP_SECOND_COLOR : "grey", fontWeight: text === props.appBtnText ? "bold" : "normal" }} >
                {text}
                {text === "Tariff" || text === "Special Packages" ? <ArrowDropDown /> : null}
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
                <MenuItem onClick={(e) => { onMenuItemClick(text, e) }}>  {text}</MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>


      <Menu
        anchorEl={specialPackageAnchorEl}
        open={Boolean(specialPackageAnchorEl)}
        onClose={() => {
          setspecialPackageAnchorEl(null);
        }}
      >
        {
          specialPackagesMenu.map((text) => (
            <MenuItem  onClick={()=>{onSpecialPackageMenuItemClick(text)}}>{text}</MenuItem>
          ))
        }
      </Menu>
    </>
  );
}

export default MainmenuBar;
