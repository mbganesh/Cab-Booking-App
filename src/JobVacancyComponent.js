import "./App.css";

import MainmenuBar from "./MainmenuBar";
import { Card, Box, CardMedia, Typography, Stack } from "@mui/material";
import BackImage from "./bk.png";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import axios from "axios";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import Swal from "sweetalert2";
import TaxiAnimation from './Loty.json'
import FooterComponent from "./FooterComponent";
import { Colors, Fonts } from "./constants";

const cardStyle = (theme) => ({
  width: "100%", borderRadius: 0,
  [theme.breakpoints.down("md")]: {

    // marginTop:10
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
  flexDirection: "row",
  justifyContent: "flex-end",
  backgroundColor: "#DFE0DF",
  flex: 2,
  [theme.breakpoints.up("md")]: {
    backgroundImage: `url(${BackImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
  },
}));






const SecondBlock = styled("div")(({ theme }) => ({
  display: "flex", justifyContent: "center", paddingLeft: 100, paddingRight: 100, marginTop: 30, flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 40, paddingRight: 40,
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 30, paddingRight: 30,
  },
}));

const ThirdBlock = styled("div")(({ theme }) => ({
  display: "flex", paddingLeft: 100, paddingRight: 100, marginTop: 30, justifyContent: "space-between", marginBottom: 10,
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 40, paddingRight: 40,
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 30, paddingRight: 30,
  },
}));



function JobVacancyComponent() {

  console.log("JobVacancyComponent")

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <MainmenuBar appBtnColor={Colors.HOME_MAIN_COLOR} appBtnText={"Job Vacancy"} />
      <div >
        <Card sx={cardStyle}>
          <Box sx={{ position: 'relative' }}>
            <CardMedia
              component="img"
              height={200}
              image="https://i.postimg.cc/V6TgMWXD/pexels-tim-samuel-5835319.jpg"
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                bgcolor: 'rgba(0, 0, 0, 0.54)',
                color: 'white',
                padding: '10px',
              }}
            >
              <Typography sx={{ textAlign: "center" }} variant="h5">Job Vacancy</Typography>

            </Box>
          </Box>

        </Card>
      </div>



      <SecondBlock>
        <Typography variant="subtitle1" align="justify" >
          Netcom Cabs strength lies with in our team ,who are our prime movers and drive our business to next level. One of India’s famous company with global presence invities suitable candidates to join Team Netcom Cabs. It has a culture that nurtures talent, believes in diversity and a safe and secure work environment. The company is committed towards ethical and lawful business conduct which is based on the foundation of integrity and respect for all. Our main motto “is to satisfy every customer who is travelling with us”
        </Typography>
        <Typography variant="subtitle1" align="justify">
          <br />We strongly believe that, continuous learning & development is important to every employee, and our success depends on developing employee capabilities, competencies and nurturing & preparing them for the future challenges Providing freedom to experiment, and leadership that motivates will bring out the best from people. This is the best of your career journery toward experiencing pride, passion, performance and potential with a career at Netcom Cabs   </Typography>
      </SecondBlock>


      <ThirdBlock >
        <Typography>
          <b>If you would like to be a part of our team<br />
            Please contact us at:</b><br />
          HR – Recruitment<br />
          Netcom Cabs call taxi<br />
          E-Mail ID: netcomcabs@gmail.com<br />
          Phone No:8098288899
        </Typography>

        <Typography>
          <b>Address :</b><br />
          1/1 Nathan Street<br />
          Murugankurichi,<br />
          Palayamkottai,<br />
          Tirunelveli-627 002.<br />
        </Typography>

      </ThirdBlock>

      <FooterComponent />
    </div>
  );
}

export default JobVacancyComponent;
