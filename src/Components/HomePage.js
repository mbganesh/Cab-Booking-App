import "../App.css";
import MainmenuBar from "./MainmenuBar";
import {
  Card,
  InputAdornment,
  TextField,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import BackImage from "../backimg.svg";
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
import TaxiAnimation from "../Loty.json";

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

let autoComplete;
let autoCompleteLoc;

const loadScript = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
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
  //console.log(addressObject);
}



const loadScriptLoc = (url, callback) => {
  let script = document.createElement("script");
  script.type = "text/javascript";

  if (script.readyState) {
    script.onreadystatechange = function () {
      if (script.readyState === "loaded" || script.readyState === "complete") {
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

function handleScriptLoadLoc(updateQueryLoc, autoCompleteLocRef) {
  autoCompleteLoc = new window.google.maps.places.Autocomplete(
    autoCompleteLocRef.current,
    { types: ["(cities)"], componentRestrictions: { country: "ind" } }
  );
  autoCompleteLoc.setFields(["address_components", "formatted_address"]);
  autoCompleteLoc.addListener("place_changed", () =>
    handlePlaceSelectLoc(updateQueryLoc)
  );
}

async function handlePlaceSelectLoc(updateQueryLoc) {
  const addressObject = autoCompleteLoc.getPlace();
  const query = addressObject.formatted_address;
  updateQueryLoc(query);
  //console.log(addressObject);
}

export default function HomePage() {
  const [open, setopen] = useState(false);
  const [errorMsgPL, seterrorMsgPL] = useState(false);
  const [errorMsgDL, seterrorMsgDL] = useState(false);
  const [errorMsgD, seterrorMsgD] = useState(false);
  const [errorMsgT, seterrorMsgT] = useState(false);
  const [errorMsgM, seterrorMsgM] = useState(false);
  var presentDate = new moment().format("YYYY-MM-DD");
  const [data, setdata] = useState({
    "Pick up Location": "",
    "Drop Location": "",
    "Pick Up Date": presentDate,
    "Pick Up Time": "",
    "Mobile Number": "",
  });
  const handleSendData = () => {
    const mydata = {
      "Pick Up Location": data["Pick up Location"],
      "Drop Location": data["Drop Location"],
      "Pick Up Date": data["Pick Up Date"],
      "Pick Up Time": data["Pick Up Time"],
      "Mobile Number": data["Mobile Number"],
    };
    {
      data["Pick up Location"] === ""
        ? seterrorMsgPL(true)
        : data["Drop Location"] === ""
        ? seterrorMsgDL(true)
        : data["Pick Up Date"] === ""
        ? seterrorMsgD(true)
        : data["Pick Up Time"] === ""
        ? seterrorMsgT(true)
        : data["Mobile Number"] === "" || data["Mobile Number"].length < 10
        ? seterrorMsgM(true)
        : setopen(true);
      {
        if (
          data["Pick up Location"] !== "" &&
          data["Drop Location"] !== "" &&
          data["Pick Up Date"] !== "" &&
          data["Pick Up Time"] !== "" &&
          data["Mobile Number"] !== ""
        ) {
          axios
            .post(
              "https://sheet.best/api/sheets/d46bbf67-696a-4663-8353-7f9388e67c9c",
              mydata
            )
            .then((result) => {
              //console.log(result.data);
              setdata({
                ...data,
                "Pick up Location": "",
                "Drop Location": "",
                "Pick Up Date": presentDate,
                "Pick Up Time": "",
                "Mobile Number": "",
              });
              setopen(false);
              Swal.fire("sdfgjdfkg", "dfgfdgdfg", "success");
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
    data["Pick Up Date"] === presentDate
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

  const autoCompleteRef = useRef(null);
  const autoCompleteLocRef = useRef(null);

  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places`,
      () => handleScriptLoad(setdata, autoCompleteRef)
    );

    loadScriptLoc(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API}&libraries=places`,
      () => handleScriptLoadLoc(setdata, autoCompleteLocRef)
    );
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <MainmenuBar />
      <Root>
        <Card sx={cardStyle}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">Book your cab now !</Typography>
          </div>
          <div>
            <Typography>PickUp Location*</Typography>
            <TextField
              inputRef={autoCompleteRef}
              ref={autoComplete}
              placeholder=""
              sx={textfieldStyle}
              size="small"
              autoComplete="off"
              fullWidth
              onChange={(e) => {
                setdata({ ...data, "Pick up Location": e.target.value });
                seterrorMsgPL(false);
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
          <div>
            <Typography>Drop Location*</Typography>
            <TextField
              inputRef={autoCompleteLocRef}
              ref={autoCompleteLoc}
              placeholder=""
              sx={textfieldStyle}
              autoComplete="off"
              size="small"
              fullWidth
              onChange={(e) => {
                setdata({ ...data, "Drop Location": e.target.value });
                seterrorMsgDL(false);
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
          <div>
            <Typography>Pickup Date & Time*</Typography>
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
                  setdata({ ...data, "Pick Up Date": e.target.value });
                  seterrorMsgD(false);
                }}
                inputProps={{ min: presentDate }}
                value={
                  data["Pick Up Date"] === ""
                    ? presentDate
                    : data["Pick Up Date"]
                }
                error={errorMsgD}
                helperText={!errorMsgD ? "" : "Please enter pickup date"}
              />
              <div style={{ width: 170 }}>
                <TextField
                  sx={textfieldStyle}
                  select
                  size="small"
                  fullWidth
                  onChange={(e) => {
                    setdata({ ...data, "Pick Up Time": e.target.value });
                    seterrorMsgT(false);
                  }}
                  SelectProps={{ MenuProps: { sx: { maxHeight: 247 } } }}
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
                    <MenuItem value={text} key={text}>{text}</MenuItem>
                  ))}
                </TextField>
              </div>
            </div>
          </div>
          <div>
            <Typography>Mobile Number*</Typography>
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
            }}
          >
            <Typography style={{ fontSize: 12 }}>
              By Clicking Book my Cab, you agree to Netcom Cab's{" "}
              <span
                style={{
                  color: "#f9b233",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Terms of Use
              </span>{" "}
              and{" "}
              <span
                style={{
                  color: "#f9b233",
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
              >
                Privacy Policy
              </span>{" "}
              .
            </Typography>
          </div>
          <div>
            <Button
              fullWidth
              size="small"
              style={{
                backgroundColor: "grey",
                color: "white",
                textTransform: "none",
              }}
              onClick={handleSendData}
            >
              Book My Cab
            </Button>
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
