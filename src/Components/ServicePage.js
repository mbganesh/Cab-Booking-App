import { AppBar, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import HomeCabPic from "../homes.png";

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
    <div
      style={{
        backgroundImage: `url(${HomeCabPic})`,
        backgroundPosition: "center",
        backgroundSize: "80vw 80vh",
        backgroundColor: "#ddd",
        width: "100vw",
        height: "100vh",
        backgroundRepeat: "no-repeat",
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography>ServicePage</Typography>
        </Toolbar>
      </AppBar>

      <div
        style={{
          border: "1px solid black",
          margin: "3% 3%",
          borderRadius: "25px",
          padding: "10px",
          boxShadow: "3px 3px 10px #010101",
          backgroundColor: "white",
          opacity: "0.8",
        }}
      >
        <div>
          <Divider>
            <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
              Services
            </Typography>
          </Divider>
        </div>

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              marginRight: "5%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2%",
              }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
                Quality Serices
              </Typography>

              <Typography>
                Quality assurance extends beyond any transportation service of
                your experience. In Netcom Cabs you can find a complete picture
                of safety, security, comfort, common costs, and peace of mind.
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "2%",
              }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
                Our Value Added Services
              </Typography>
              <div>
                {serviceList.map((el) => (
                  <Typography key={el}> ➡ {el} </Typography>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "2%",
              flex: 1,
              marginLeft: "5%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography style={{ fontWeight: "bold", fontSize: "18px" }}>
                Reliability
              </Typography>

              <Typography>
                We are proud to introduce ourselves as a No: 1 call taxi. Our
                service is available throughout Tamil Nadu and a few other
                places like Bengaluru, Tirunelveli, Vizag, Vijayawada, and
                Hyderabad. All types of cables are available according to
                customer requirements. Our driver-guides help the customer find
                the right place to drop off as this can benefit the new traveler
                anywhere due to its free ride. All of our cabs arrive on time to
                meet your travel needs with a transparent pricing structure.
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
