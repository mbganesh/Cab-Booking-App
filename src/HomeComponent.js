import "./App.css";
import MainmenuBar from "./MainmenuBar";
import { Card, InputAdornment, TextField, Typography, Modal, Box,ListItemIcon } from "@mui/material";
import BackImage from "./Images/homeImages/bgImage.svg";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import moment from "moment";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import Swal from "sweetalert2";
import Lottie from "react-lottie";
import TaxiAnimation from "./Images/homeImages/carRunningLottie.json";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Colors, Fonts } from "./constants";
import RoundTripIcon from "@mui/icons-material/LoopOutlined";
import OneWayIcon from "@mui/icons-material/ArrowCircleUp";
import HourlyIcon from "@mui/icons-material/DepartureBoard";
import ListItemText from "@mui/material/ListItemText";


const style = (theme) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#CDD0CB",
  boxShadow: 18,
  padding: 2,
});
const cardStyle = (theme) => ({
  width: 425,
  height: 565,
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

const cardText = () => ({
  fontFamily:Fonts.UBUNTU,

})
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
    backgroundSize: "cover",
  },
}));




function HomeComponent() {
  const [done, setdone] = useState("");
  const [open, setopen] = useState(false);
  const [errorCustName, seterrorCustName] = useState(false);
  const [errorMsgPL, seterrorMsgPL] = useState(false);
  const [errorMsgDL, seterrorMsgDL] = useState(false);
  const [errorMsgD, seterrorMsgD] = useState(false);
  const [errorMsgT, seterrorMsgT] = useState(false);
  const [errorMsgM, seterrorMsgM] = useState(false);
  const [errorMsgTrip, seterrorMsgTrip] = useState(false);
  var presentDate = new moment().format("YYYY-MM-DD");

  const [data, setdata] = useState({
    "Customer Name": "",
    "Pick up Location": "",
    "Drop Location": "",
    "Pick Up Time": "",
    "Mobile Number": "",
  });

  const [dateData, setdateData] = useState({
    "Pick Up Date": presentDate,
  });
  const [tripData, settripData] = useState({ Trip: "Round Trip" });

  const trip = [
    {
      text: "Round Trip",
      icon: <RoundTripIcon style={{ verticalAlign: "text-bottom" }} />,
    },
    {
      text: "Oneway Trip",
      icon: <OneWayIcon style={{ verticalAlign: "text-bottom" }} />,
    },
    {
      text: "Hourly Rental",
      icon: <HourlyIcon style={{ verticalAlign: "text-bottom" }} />,
    },
  ];

  const handleSendData = () => {
    const mydata = {
      "Customer Name": data["Customer Name"],
      "Pick Up Location": data["Pick up Location"],
      "Drop Location": data["Drop Location"],
      "Pick Up Date": dateData["Pick Up Date"],
      "Pick Up Time": data["Pick Up Time"],
      Trip: tripData.Trip,
      "Mobile Number": data["Mobile Number"],
    };

    console.log(mydata);
    {
      data["Customer Name"] === ""
      ? seterrorCustName(true)
      : data["Pick up Location"] === ""
      ? seterrorMsgPL(true)
      : data["Drop Location"] === ""
      ? seterrorMsgDL(true)
      : dateData["Pick Up Date"] === ""
      ? seterrorMsgD(true)
      : data["Pick Up Time"] === ""
      ? seterrorMsgT(true)
      : tripData.Trip === ""
      ? seterrorMsgTrip(true)
      : data["Mobile Number"] === "" || data["Mobile Number"].length < 10
      ? seterrorMsgM(true)
      : setopen(true);
    {
        if (data["Customer Name"]!==""&&
          data["Pick up Location"] !== "" &&
          data["Drop Location"] !== "" &&
          dateData["Pick Up Date"] !== "" &&
          data["Pick Up Time"] !== "" &&
          tripData.Trip !== "" &&
          data["Mobile Number"] !== "" &&
          data["Mobile Number"].length === 10
        ) {
          axios
            .post(
              "https://sheet.best/api/sheets/d46bbf67-696a-4663-8353-7f9388e67c9c",
              mydata
            )
            .then((result) => {
              console.log(result.data);
              setdata({
                ...data,
                "Customer Name":"",
                "Pick up Location": "",
                "Drop Location": "",
                "Pick Up Time": "",
                Trip: "Round Trip",
                "Mobile Number": "",
              });
              setdateData({ ...dateData, "Pick Up Date": presentDate });
              setopen(false);
              Swal.fire(
                "Your Cab has been Booked",
                "Happy Journey !",
                "success"
              );
            });
        }
      }
    }
  };
  const hoursArray = Array.from(
    {
      length: 48,
    },
    (_, hour) =>
      moment({
        hour: Math.floor(hour / 2),
        minutes: hour % 2 === 0 ? 0 : 30,
      }).format("hh:mm a")
  );
  var now = new moment();
  var timeToSet = "";
  {
    now.format("mm") < 30 ? (timeToSet = "00") : (timeToSet = "30");
  }
  var newTime = now.format("hh") + ":" + timeToSet + " " + now.format("a");
  var newTimeCheck = hoursArray.indexOf(newTime);
  var currentHour = "";
  {
    dateData["Pick Up Date"] === presentDate
      ? (currentHour = hoursArray.slice(newTimeCheck + 1))
      : (currentHour = hoursArray);
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TaxiAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  let autoComplete;

  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["(cities)"], componentRestrictions: { country: "ind" } }
    );
    autoComplete.setFields(["address_components", "formatted_address"]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );
  }

  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();
    const query = addressObject.formatted_address;
    updateQuery(query);
    console.log(addressObject);
    setdata({ ...data, "Pick up Location": addressObject.formatted_address });
  }

  let autoCompleteTo;

  const loadScriptTo = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  function handleScriptLoadTo(updateQueryTo, autoCompleteToRef) {
    autoCompleteTo = new window.google.maps.places.Autocomplete(
      autoCompleteToRef.current,
      { types: ["(cities)"], componentRestrictions: { country: "ind" } }
    );
    autoCompleteTo.setFields(["address_components", "formatted_address"]);
    autoCompleteTo.addListener("place_changed", () =>
      handlePlaceSelectTo(updateQueryTo)
    );
  }

  async function handlePlaceSelectTo(updateQueryTo) {
    const addressObject = autoCompleteTo.getPlace();
    const query = addressObject.formatted_address;
    updateQueryTo(query);
    console.log(addressObject);
    setdata({ ...data, "Drop Location": addressObject.formatted_address });
  }

  const autoCompleteRef = useRef(null);
  const autoCompleteToRef = useRef(null);

  const APILink = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCneXQewu90VNJTWxGkX8zJFKM_9iYud3E&libraries=places`;

  const apiFunc = (setdata, autoCompleteRef) => {
    loadScript(APILink, () => handleScriptLoad(setdata, autoCompleteRef));
  };

  const apiFuncTo = (setdata, autoCompleteToRef) => {
    loadScriptTo(APILink, () => handleScriptLoadTo(setdata, autoCompleteToRef));
  };

  useEffect(() => {
    console.log("useEdffect");
    console.log(done);
    if (done === "Pick") {
      console.log("if " + done);
      apiFunc(setdata, autoCompleteRef);
    } else if (done === "PickUp") {
      console.log("elsee  if " + done);

      apiFuncTo(setdata, autoCompleteToRef);
    }
  }, [done]);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <MainmenuBar appBtnColor= {Colors.HOME_MAIN_COLOR} appBtnText= {"Home"} />
      <Root>
        <Card sx={cardStyle}>
          
          <div style={{display:"flex", flexDirection:"column"}}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Typography sx={{fontFamily:Fonts.UBUNTU, color:Colors.APP_SECOND_COLOR}} variant="h5">Book your cab now !</Typography>
          </div>
          <div style={{marginTop:10}}>
            <Typography sx= {cardText}>Name</Typography>
            <TextField
              sx={textfieldStyle}
              placeholder=""
              size="small"
              autoComplete="off"
              fullWidth
              onChange={(e) => {
                setdata({ ...data, "Customer Name": e.target.value });
                seterrorCustName(false);

              }}
              value={data["Customer Name"]}
              error={errorCustName}
              helperText={!errorCustName ? "" : "Please enter Customer Name"}
              InputProps={{
                startAdornment: (
                  <InputAdornment style={{ marginRight: 10 }}>
                    <PersonOutlineOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <div style={{marginTop:10}}>
            <Typography sx= {cardText}>PickUp Location*</Typography>
            <TextField
              inputRef={autoCompleteRef}
              ref={autoComplete}
              sx={textfieldStyle}
              placeholder=""
              size="small"
              autoComplete="off"
              fullWidth
              onChange={(e) => {
                setdata({ ...data, "Pick up Location": e.target.value });
                seterrorMsgPL(false);
                setdone("Pick");
                console.log(e.target.value);
              }}
              value={data["Pick up Location"]}
              error={errorMsgPL}
              helperText={!errorMsgPL ? "" : "Please enter pickup location"}
              InputProps={{
                startAdornment: (
                  <InputAdornment style={{ marginRight: 10 }}>
                    <LocationOnOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div style={{marginTop:10}}>
            <Typography sx= {cardText}>Drop Location*</Typography>
            <TextField
              inputRef={autoCompleteToRef}
              ref={autoComplete}
              placeholder=""
              sx={textfieldStyle}
              autoComplete="off"
              size="small"
              fullWidth
              onChange={(e) => {
                setdata({ ...data, "Drop Location": e.target.value });
                seterrorMsgDL(false);
                setdone("PickUp");
              }}
              value={data["Drop Location"]}
              error={errorMsgDL}
              helperText={!errorMsgDL ? "" : "Please enter pickup location"}
              InputProps={{
                startAdornment: (
                  <InputAdornment style={{ marginRight: 10 }}>
                    <LocationOnOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div style={{marginTop:10}}> 
            <Typography sx= {cardText}>Pickup Date & Time*</Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                sx={textfieldStyle}
                size="small"
                type="date"
                autoComplete="off"
                onChange={(e) => {
                  setdateData({ ...dateData, "Pick Up Date": e.target.value });
                  seterrorMsgD(false);
                }}
                inputProps={{ min: presentDate }}
                value={dateData["Pick Up Date"] === "" ? presentDate : dateData["Pick Up Date"]}
                error={errorMsgD}
                helperText={!errorMsgD ? "" : "Please enter pickup date"}
              />
              <div style={{ width: 170 }}>
                <TextField
                  sx={textfieldStyle}
                  select
                  SelectProps={{ MenuProps: { sx: { maxHeight: 247 } } }}
                  size="small"
                  fullWidth
                  MenuProps={{ style: { maxHeight: 247 } }}
                  onChange={(e) => {
                    setdata({ ...data, "Pick Up Time": e.target.value });
                    seterrorMsgT(false);
                  }}
                  value={data["Pick Up Time"]}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment style={{ marginRight: 10 }}>
                        <AccessTimeOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={errorMsgT}
                  helperText={!errorMsgT ? "" : "Please enter pickup time"}
                >
                  {currentHour.map((text) => (
                    <MenuItem value={text}>{text}</MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
          </div>

          <div style={{marginTop:10}}>
            <Typography>Trip</Typography>
            <TextField
              size="small"
              fullWidth
              select
             
              sx={textfieldStyle}
              onChange={(e) => {
                settripData({ ...tripData, Trip: e.target.value });
                seterrorMsgTrip(false);
              }}
              value={tripData.Trip === "" ? "Round Trip" : tripData.Trip}
            >
              {trip.map((item) => (
                <MenuItem value={item.text}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText>{item.text}</ListItemText>
                  </div>
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div style={{marginTop:10}}>
            <Typography sx= {cardText}>Mobile Number*</Typography>
            <TextField
              size="small"
              autoComplete="off"
              fullWidth
              type="number"
              sx={mobNoStyle}
              onChange={(e) => {
                setdata({
                  ...data,
                  "Mobile Number": (e.target.value = e.target.value.slice(
                    0,
                    10
                  )),
                });
                seterrorMsgM(false);
              }}
              value={data["Mobile Number"]}
              error={errorMsgM}
              helperText={!errorMsgM ? "" : "please enter valid Mobile No"}
              InputProps={{
                startAdornment: (
                  <InputAdornment style={{ marginRight: 10 }}>
                    {"+91"}
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop:10
            }}
          >
            <Typography sx= {cardText} style={{ fontSize: 12 }}>
              By Clicking Book my Cab, you agree to Netcom Cab's{" "}
              <span
                style={{
                  color: Colors.APP_SECOND_COLOR,
                  textDecoration: "underline",
                  cursor: "pointer",fontFamily:Fonts.UBUNTU
                }}
              >
                Terms of Use
              </span>{" "}
              and{" "}
              <span
                style={{
                  color: Colors.APP_SECOND_COLOR,
                  textDecoration: "underline",
                  cursor: "pointer",fontFamily:Fonts.UBUNTU
                }}
              >
                Privacy Policy
              </span>{" "}
              .
            </Typography>
          </div>
          <div style={{marginTop:10}}>
            <Button
              fullWidth
              style={{
                backgroundColor: Colors.APP_SECOND_COLOR,fontFamily:Fonts.UBUNTU,
                color: "white",
                textTransform: "none",
              }}
              onClick={handleSendData}
            >
              Book My Cab
            </Button>
          </div>

          </div>
        </Card>
      </Root>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#CDD0CB",
        }}
      >
        <div style={{ paddingTop: 10, paddingLeft: 20 }}>
          <Typography>
            Feedback & Complaints | Testimonials | About Us | Tariff | Popular
            Places | Events & Gallery |
          </Typography>
        </div>
        <div style={{ paddingBottom: 10 }}>
          <Typography>Book a Cab All Rights Reserved © - 2022</Typography>
        </div>
      </div>
      <Modal open={open}>
        <Box sx={style}>
          <Lottie options={defaultOptions} height={100} width={200} />
          <Typography align="center">Booking Cab... Please wait...</Typography>
        </Box>
      </Modal>
    </div>
  );
}


export default HomeComponent;