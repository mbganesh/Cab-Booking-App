import "./App.css";

import MainmenuBar from "./MainmenuBar";
import { Card, Box, CardMedia, Typography, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import FooterComponent from "./FooterComponent";
import { Colors, Fonts } from "./constants";
import { useLocation } from "react-router-dom";
import specialPackageData from "./constants/specialPackageData.json"
import useState from 'react-usestateref'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import React, {  useEffect } from 'react';

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

function SpecialPackagesComponent() {

  const { state } = useLocation();
  const { specialPackageItemName } = state;

  


  console.log("SpecialPackagesComponent")
  console.log("specialPackageItemName " + specialPackageItemName)

  const [spot, setSpot,spotRef] = useState(0);
  const [cityName,setCityName,cityNameRef]=useState("")


  useEffect(() => {
    setCityName(specialPackageItemName)
  
   
  })
  



const listCityName=Object.keys(specialPackageData)

  let dataArr=Object.values(specialPackageData[spotRef.current])
  let data= dataArr[0]

  let valuesArr = [];
  
  for (var i = 0; i <data.length; i++) {
  
    
    var values_obj = Object.values(data[i]);
    let values=[]

    for (let j = 0; j <values_obj.length; j++) {
      if (typeof values_obj[j] === "object") {
        values.push(values_obj[j]["Non A/C"]);
        values.push(values_obj[j]["A/C"]);
      } else {
        values.push(values_obj[j]);
      }
    }    
    valuesArr.push(values)
  }

  



  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <MainmenuBar appBtnColor={Colors.HOME_MAIN_COLOR} appBtnText={"Special Packages"} />


      <div style={{   height: "100vh", display: "flex", justifyContent: "center",flexDirection: "column",}} >
        <div style={{ flexDirection: "column", flex: 1 }}>
          <Typography variant="h4" style={{ color: Colors.APP_SECOND_COLOR, display: "flex", justifyContent: "center", margin: "10 auto", marginTop: "2%", fontFamily:Fonts.UBUNTU }} > {cityName} cab fare
          </Typography>
          <div style={{ display: "flex", justifyContent: "center", margin: "0 auto", marginTop: "2%" }}>
            
            <table width="90%" style={{borderCollapse: "collapse", backgroundColor: "white" }} >
              <tr  >
                <th rowspan="2" align="center" style={{  border: `1px solid ${Colors.APP_SECOND_COLOR}`, height: "80px", color: Colors.APP_SECOND_COLOR }}> VECHICLE TYPE </th>
                <th rowspan="2" align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, width: "50px", color: Colors.APP_SECOND_COLOR }}> KM </th>
                <th rowspan="2" align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: Colors.APP_SECOND_COLOR }}> FREE HRS </th>
                <th colspan="2" align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: Colors.APP_SECOND_COLOR }}> RATE(Rs) </th>
                <th colspan="2" align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: Colors.APP_SECOND_COLOR }}> EXTRA PER KM </th>
                <th rowspan="2" align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: Colors.APP_SECOND_COLOR }}> EXTRA PER HRS </th>
              </tr>

              <tr>
                <td align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, width: "50px", height: "30px", color: Colors.APP_SECOND_COLOR }}> AC </td>
                <td align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: Colors.APP_SECOND_COLOR }}> Non-AC </td>
                <td align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: Colors.APP_SECOND_COLOR }}> AC </td>
                <td align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: Colors.APP_SECOND_COLOR}}> Non-AC </td>
              </tr>

              {
                valuesArr.map((text) => (
                  <tr>

                    <td align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, height: "30px", color: "black" }}> {text[0]}</td>
                    <td align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: "black" }}>{text[1]}</td>
                    <td align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: "black" }}>{text[2]}</td>
                    <td align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: "black" }}>{text[3]}</td>
                    <td align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: "black" }}>{text[4]}</td>
                    <td align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: "black" }}>{text[5]}</td>
                    <td align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: "black" }}>{text[6]}</td>
                    <td align="center" style={{ border: `1px solid ${Colors.APP_SECOND_COLOR}`, color: "black" }}>{text[7]}</td>

                  </tr>
                ))
              }

            </table>
          
        
          </div>


          <Typography style={{ color: 'black', fontSize: 16, marginLeft: "2%", marginTop: "2%", fontWeight: 800, fontFamily:Fonts.UBUNTU }}>Note :</Typography>
          <Typography style={{ color: 'black', fontSize: 16, marginLeft: "7%", marginTop: "1%", fontFamily:Fonts.UBUNTU  }}><DirectionsCarIcon style={{ color: Colors.APP_SECOND_COLOR, verticalAlign: "text-bottom", marginRight: "0.5%" }} />Toll, Parking Charges Applicable. </Typography>
          <Typography style={{ color: 'black', fontSize: 16, marginLeft: "7%", fontFamily:Fonts.UBUNTU  }}><DirectionsCarIcon style={{ color: Colors.APP_SECOND_COLOR, verticalAlign: "text-bottom", marginRight: "0.5%" }} />Extra Kilometers Hours Charges Applicable. </Typography>
        
          <Typography style={{ color: 'black', fontSize: 18,  marginTop: "2%", fontFamily:Fonts.UBUNTU  }}>For booking a Cab - Taxi from {cityName},  Please dial
           
            <Tooltip title="Click to Call Netcom Cabs" arrow>
              <span onClick={() => window.open('tel:04624200522')} style={{ color: Colors.APP_SECOND_COLOR, cursor: "pointer", fontFamily:Fonts.UBUNTU  }}> 0462 4200 522.</span>
            </Tooltip>


          </Typography>


        </div>



      </div>






      <FooterComponent />
    </div>
  );
}

export default SpecialPackagesComponent;
