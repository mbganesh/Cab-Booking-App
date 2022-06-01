import "./App.css";

import MainmenuBar from "./MainmenuBar";
import { Card, InputAdornment, TextField, Typography } from "@mui/material";
import BackImage from "./bk.png";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import axios from "axios";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import moment from "moment";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Swal from "sweetalert2";
import Lottie from "react-lottie";
import TaxiAnimation from './Loty.json'
import { Colors, Fonts } from "./constants";

const cardStyle = (theme) => ({
  width: 425,
  height: 475,
  backgroundColor: "#EFEFEF",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  marginRight: 5,
  marginLeft: 3,
  marginTop: 3,
  padding: 3,
  borderRadius: 2,
  [theme.breakpoints.down("md")]: {
    border: "none",
    boxShadow: "none",
    padding: 2,
    marginRight: 2,
    marginLeft: 2,
  },
});

const textfieldStyle = (theme) => ({
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "black",
    },
});

const mobNoStyle = (theme) => ({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
  [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]:
    {
      borderColor: "black",
    },
});

const Root = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: Colors.APP_MAIN_COLOR, 
  width:"100%",
  [theme.breakpoints.up("xl")]: {
    position:"fixed", bottom:0,
  },
}));

function FooterComponent() {
  
  console.log("FooterComponent")

  return (
      <Root>
        <div style={{ paddingTop: 10, paddingLeft: 20 }}>
          <Typography>
            Feedback & Complaints | Testimonials | About Us | Tariff | Popular
            Places | Events & Gallery |
          </Typography>
        </div>
        <div style={{ paddingBottom: 10 }}>
          <Typography >Powered by Netcom Computers Pvt. Ltd </Typography>
        </div>
      </Root>
    
  );
}

export default FooterComponent;
