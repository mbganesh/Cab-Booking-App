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
import moment from "moment";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Swal from "sweetalert2";
import Lottie from "react-lottie";
import TaxiAnimation from './Loty.json'
import FooterComponent from "./FooterComponent";
import Modal from '@mui/material/Modal';
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
  display: "flex", justifyContent: "center", paddingLeft: 100, paddingRight: 100, marginTop: 30, flexWrap: "wrap",
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

function OurVehiclesComponent() {

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

  const [modalImage, setmodalImage] = useState("")

  const [modalOpener, setmodalOpener] = useState(false)

  const onModalOpen = (text) => {
    setmodalOpener(true)
    setmodalImage(text)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <MainmenuBar appBtnColor={Colors.HOME_MAIN_COLOR} appBtnText={"Our Vehicles"} />
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
              <Typography sx={{ textAlign: "center" }} variant="h5">Our Vehicles</Typography>
            </Box>
          </Box>

        </Card>
      </div>



      <SecondBlock>
        {imgArray.map((text, index) => (
          <div  >
            <Box

              onClick={() => { onModalOpen(text) }}
              component="img"
              sx={{
                height: 233,
                width: 350,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
              }}
              alt="The house from the offer."
              src={text}
            />
          </div>
        ))}
      </SecondBlock>

      <Modal
        open={modalOpener}
        onClose={() => { setmodalOpener(false) }}
      >
        <Box sx={modalStyle}>
          <Box
            component="img"
            sx={modalImageStyle}

            src={modalImage}
          />
        </Box>
      </Modal>




      <FooterComponent />
    </div>
  );
}

export default OurVehiclesComponent;
