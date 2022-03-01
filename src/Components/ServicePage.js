import { AppBar, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import HomeCabPic from "../homes.png";

const RootDiv = styled("div")(({ theme }) => ({

  width: "100vw",
  height: "100vh",

  [theme.breakpoints.down("md")]: {
    // backgroundColor: "red",
  },
  [theme.breakpoints.up("md")]: {
    // backgroundColor: "blue",
  },
  [theme.breakpoints.up("lg")]: {
    backgroundImage: `url(${HomeCabPic})`,
    backgroundPosition: "center",
    backgroundSize: "80vw 80vh",
    backgroundColor: "#ddd",
    backgroundRepeat: "no-repeat",
  },
}));

const Row1Div = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  flex: 1,
  flexDirection: "column",
  [theme.breakpoints.down("md")]: {
    // backgroundColor: "red",
  },
  [theme.breakpoints.up("md")]: {
    // backgroundColor: "blue",
  },
  [theme.breakpoints.up("lg")]: {
    // backgroundColor: "green",
  },
}));

const Row2Div = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column",
  marginTop: "2%",
  flex: 1,
  [theme.breakpoints.down("md")]: {
    // backgroundColor: "red",
  },
  [theme.breakpoints.up("md")]: {
    // backgroundColor: "blue",
  },
  [theme.breakpoints.up("lg")]: {
    // backgroundColor: "green",
  },
}));

const SubDiv = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  flex: 1,
  [theme.breakpoints.down("md")]: {
    // backgroundColor: "red",
    flexDirection: "column",
  },
  [theme.breakpoints.up("md")]: {
    // backgroundColor: "blue",
  },
  [theme.breakpoints.up("lg")]: {
    // backgroundColor: "green",
  },
}));


const BgDiv = styled("div")(({ theme }) => ({
  border: "1px solid black",
  margin: "3% 3%",
  borderRadius: "25px",
  padding: "10px",
  boxShadow: "3px 3px 10px #010101",
  backgroundColor: "white",
  opacity: "0.8",
  [theme.breakpoints.down("md")]: {
    // backgroundColor: "red",
  },
  [theme.breakpoints.up("md")]: {
    // backgroundColor: "blue",
  },
  [theme.breakpoints.up("lg")]: {
    // backgroundColor: "green",
  },
}));

export default function ServicePage() {
  var serviceList = [
    "India’s No:1 call taxi services.",
    "We are providing 24x7 hours service.",
    "Available across all major cities.",
    "Safe & Secure.",
    "Exclusive counters at Railway and Airport pickups.",
    "Cargo services.",
    "Well maintained car fleets.",
    "Booking through website & App",
    "Best car rental price guarantee",
    "6.5 million happy customers",
    "19,000+ rides a day",
    "Efficient booking channel",
    "Customer care executive",
  ];

  return (
    <RootDiv>
      <AppBar position="static">
        <Toolbar>
          <Typography>ServicePage</Typography>
        </Toolbar>
      </AppBar>

      <BgDiv
       
      >
        <div>
          <Divider>
            <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
              Services
            </Typography>
          </Divider>
        </div>

        <SubDiv>
          <Row1Div>
            <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
              Accessiblity
            </Typography>

            <Typography>
              We are available across all over Tamil Nadu and in few more
              locations like Bengaluru, Tirunelveli, Vizag, Vijayawada and
              Hyderabad. Convenience of booking through web, phone and App.
              Moreover, customer can pay only for the traveled kilometers and
              proper bills are furnished to the customer.
            </Typography>
          </Row1Div>

          <Row1Div>
            <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
              Reliability
            </Typography>

            <Typography>
              We are proud to introduce ourselves as a No: 1 call taxi. Our
              service is available throughout Tamil Nadu and a few other places
              like Bengaluru, Tirunelveli, Vizag, Vijayawada, and Hyderabad. All
              types of cables are available according to customer requirements.
              Our driver-guides help the customer find the right place to drop
              off as this can benefit the new traveler anywhere due to its free
              ride. All of our cabs arrive on time to meet your travel needs
              with a transparent pricing structure.
            </Typography>
          </Row1Div>
        </SubDiv>

        <SubDiv style={{ display: "flex", }}>
          <Row2Div>
            <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
              Quality Serices
            </Typography>

            <Typography>
              Quality assurance extends beyond any transportation service of
              your experience. In Netcom Cabs you can find a complete picture of
              safety, security, comfort, common costs, and peace of mind.
            </Typography>
          </Row2Div>

          <Row2Div>
            <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
              Our Value Added Services
            </Typography>
            <div>
              {serviceList.map((el) => (
                <Typography key={el}> ➡ {el} </Typography>
              ))}
            </div>
          </Row2Div>
        </SubDiv>
      </BgDiv>
    </RootDiv>
  );
}
