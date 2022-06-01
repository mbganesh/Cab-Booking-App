import "./App.css";

import MainmenuBar from "./MainmenuBar";
import { Card, Box, CardMedia, Typography, Stack } from "@mui/material";
import headImage from "./Images/serviceImages/head.svg";
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
import FooterComponent from "./FooterComponent";
import Modal from '@mui/material/Modal';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { Colors, Fonts } from "./constants";
import { width } from "@mui/system";

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








const SecondBlock = styled("div")(({ theme }) => ({
  display: "flex", justifyContent: "center", paddingLeft: 100, paddingRight: 100, marginTop: 30, flexWrap: "wrap",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 40, paddingRight: 40,
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 30, paddingRight: 30,
  },
}));

const ThirdBlock = styled("div")(({ theme }) => ({
  display: "flex", paddingLeft: 100, paddingRight: 100, marginTop: 30, marginBottom: 10, flexDirection: "column",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: 40, paddingRight: 40,
  },
  [theme.breakpoints.down("sm")]: {
    paddingLeft: 30, paddingRight: 30,
  },
}));

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const modalImageStyle = (theme) => ({
  height: 500, width: 700,
  [theme.breakpoints.down("md")]: {
    height: 300, width: 500,
    // marginTop:10
  },
  [theme.breakpoints.down("sm")]: {
    height: 200, width: 300,
    // marginTop:10
  },
});

function ServicesComponent() {

  console.log("JobVacancyComponent")

  const imgArray = [
    "https://i.postimg.cc/nVs1j1JN/gallery-1.jpg",
    "https://i.postimg.cc/T3xjsMDX/gallery-2.jpg",
    "https://i.postimg.cc/Px0YzBj9/gallery-3.jpg",
    "https://i.postimg.cc/zGphPLNn/gallery-4.jpg",
    "https://i.postimg.cc/qR6CRj3L/gallery-5.jpg",
    "https://i.postimg.cc/P56LQBby/gallery-6.jpg",
    "https://i.postimg.cc/j2Q2w9dz/gallery-7.jpg",
    "https://i.postimg.cc/2j4VKqFV/gallery-8.jpg",
    "https://i.postimg.cc/Z5qnnwkd/gallery-9.jpg"

  ]

  const vehicleArray = ["Innova", "Swift", "Eeco", "Swift Desire", "Van", "Safari", "Alto"]

  const [modalImage, setmodalImage] = useState("")

  const [modalOpener, setmodalOpener] = useState(false)

  const onModalOpen = (text) => {
    setmodalOpener(true)
    setmodalImage(text)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <MainmenuBar appBtnColor={Colors.HOME_MAIN_COLOR} appBtnText={"Services"} />

      <div >
        <Card sx={cardStyle}>
          <Box sx={{ position: 'relative' }}>

            
             <img style={{height:200, width:"100%", objectFit:'cover' ,    backgroundSize:'cover'}} src = {headImage}></img>
      

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
              <Typography sx={{ textAlign: "center" }} variant="h5">Services</Typography>
            </Box>
          </Box>

        </Card>
      </div>



      <SecondBlock>
        <Typography variant="subtitle1" align="justify" >
          In more than seven years in the field of Car rental service, Thousands of respected customers have chosen Netcom Cabs for their Holidays & Tours. We have built our reputation on the principle of giving sincere service and best value for the lowest price. The care and attention of our experienced staff, many of whom have been with us from the beginning, ensures each of your holidays is planned to give you maximum enjoyment and value whilst making sure you don't pay more than you need to.
        </Typography>
        <Typography variant="subtitle1" align="justify">
          Customer can request for cab through phone to our office. To accommodate any types of travel need, we have a choice of classical and luxury cab/cars of most makes. Netcom Cabs has served thousands of passengers/travelers to reach their destinations comfortable and safe.
        </Typography>
      </SecondBlock>


      <ThirdBlock >
        <Typography variant="h6">
          <b>Vehicles We Provide</b>
        </Typography>

        {vehicleArray.map((text, index) => (
          <div style={{ display: "flex", marginTop: 10 }}>
            <DirectionsCarIcon style={{ color: "#FFB72B" }} /><Typography variant="subtitle1" sx={{ ml: 1 }}>{text}</Typography>
          </div>
        ))}



      </ThirdBlock>




      <FooterComponent />
    </div>
  );
}

export default ServicesComponent;
