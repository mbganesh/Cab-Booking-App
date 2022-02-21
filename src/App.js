import "./App.css";
import {
  AppBar,
  Button,
  Card,
  Checkbox,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import HomeCabPic from "./homes.png";

function App() {
  const [MyData, setMyData] = useState({
    PickupLocation: "",
    DropLocation: "",
    Pickup_Date: "",
    Pickup_Time: "",
    MobileNo: "",
  });

  const handlePickupLocation = (e) => {
    console.log(e.target.value);
    setMyData({ ...MyData, PickupLocation: e.target.value });
  };

  const handleDropLocation = (e) => {
    setMyData({ ...MyData, DropLocation: e.target.value });
  };

  const handlePickup_Date = (e) => {
    setMyData({ ...MyData, Pickup_Date: e.target.value });
  };

  const handlePickup_Time = (e) => {
    setMyData({ ...MyData, Pickup_Time: e.target.value });
  };

  const handleMobileNo = (e) => {
    setMyData({ ...MyData, MobileNo: e.target.value });
  };

  const handleClick = () => {
    console.log(MyData);
    if (
      MyData.PickupLocation === "" ||
      MyData.DropLocation === "" ||
      MyData.Pickup_Date === "" ||
      MyData.Pickup_Time === "" ||
      MyData.MobileNo === ""
    ) {
      alert("Please enter all the data");
    } else {
      let myObj = {
        PickupLocation: MyData.PickupLocation,
        DropLocation: MyData.DropLocation,
        Pickup_Date_Time: MyData.Pickup_Date + " & " + MyData.Pickup_Time,
        MobileNo: MyData.MobileNo,
      };

      axios
        .post(
          "https://sheet.best/api/sheets/2082ffaa-3171-4c8a-9aa4-a1f1f88297bc",
          myObj
        )
        .then((result) => {
          let res = result.data;
          setMyData({
            PickupLocation: "",
            DropLocation: "",
            Pickup_Date: "",
            Pickup_Time: "",
            MobileNo: "",
          });
        });
    }
  };

  useEffect(() => {
    // axios.get('https://sheet.best/api/sheets/2082ffaa-3171-4c8a-9aa4-a1f1f88297bc'  ).then(result => {
    //     let res = result.data
    //     console.log(res)
    //   })
  }, []);

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
        <Toolbar style={{ backgroundColor: "#282c34" }}>
          <Typography style={{ flex: 1, fontSize: "22px" }}>
            Netcom Cabs
          </Typography>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Call & Book Or Tell Your Feedback</Typography>
            <Typography style={{ fontWeight: "bold", fontSize: "24px" }}>
              0462 - 85225800
            </Typography>   
          </div>

        </Toolbar>
      </AppBar>
 
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Card
          style={{
            margin: "2%",
            width: "25vw",
            borderRadius: "2%",
            backgroundColor:'#F7F7F7',
            opacity:'0.8'
          }}
          elevation="5"
        >
          <div>
            <Typography
              style={{
                textAlign: "center",
                padding: "1%",
                fontWeight: "bold",
                fontSize: "18px",
              }}
            >
              {" "}
              Hot Cab Booking!{" "}
            </Typography>
          </div>

          <div style={{ margin: "2%" }}>
            <Typography style={{ padding: "1%", fontSize: "16px" }}>
              {" "}
              Pickup Location{" "}
            </Typography>
            <TextField
              variant="outlined"
              type="text"
              placeholder="Enter an Origin Location"
              fullWidth
              value={MyData.PickupLocation}
              onChange={handlePickupLocation}
            />
          </div>

          <div style={{ margin: "2%" }}>
            <Typography style={{ padding: "1%", fontSize: "16px" }}>
              {" "}
              Drop Location{" "}
            </Typography>
            <TextField
              variant="outlined"
              type="text"
              placeholder="Enter a Destination Location"
              fullWidth
              value={MyData.DropLocation}
              onChange={handleDropLocation}
            />
          </div>

          <div style={{ margin: "2%" }}>
            <Typography style={{ padding: "1%", fontSize: "16px" }}>
              {" "}
              Pickup Date & Time{" "}
            </Typography>
            <div style={{ display: "flex" }}>
              <TextField
                style={{ marginRight: "2%" }}
                variant="outlined"
                type="date"
                placeholder="Enter a Destination Location"
                fullWidth
                value={MyData.Pickup_Date}
                onChange={handlePickup_Date}
              />
              <TextField
                style={{ marginLeft: "2%" }}
                variant="outlined"
                type="time"
                placeholder="Enter a Destination Location"
                fullWidth
                value={MyData.Pickup_Time}
                onChange={handlePickup_Time}
              />
            </div>
          </div>

          <div style={{ margin: "2%" }}>
            <Typography style={{ padding: "1%", fontSize: "16px" }}>
              {" "}
              Your Mobile No{" "}
            </Typography>
            <TextField
              variant="outlined"
              type="number"
              placeholder="Enter a Destination Location"
              fullWidth
              value={MyData.MobileNo}
              onChange={handleMobileNo}
            />
          </div>

          <div style={{ margin: "2%", display: "flex", alignItems: "center" }}>
            <Checkbox />
            <Typography
              style={{
                textAlign: "center",
                padding: "1%",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              I agree to the terms of service.{" "}
            </Typography>
          </div>

          <div style={{ margin: "2%" }}>
            <Button variant="contained" onClick={handleClick}>
              {" "}
              Book My Cab{" "}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;
