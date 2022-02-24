import { AppBar, Divider, Toolbar, Typography } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import HomeCabPic from "../homes.png";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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

function createData(name, rate, add1, min1) {
  let add2 = add1 + 1;
  return { name, rate, add1, add2, min1, min1 };
}

const rows = [
  createData("Indica/Sedan", "Rs.60 (2 KMS)", 19, 2),
  createData("Eeco", "Rs.405 (20 KMS)", 12.5, 1.5),
  createData("Tavera/Xylo", "Rs.620 (30 KMS)", 14.5, 2),
];

export default function CityMeterTariffPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const notesList=[
    "Meter starts from your pickup place.",
    " Waiting charges free for first 5 minutes.",
    " Night charges(10pm to 6am) applicable.",
    " Package trip available at special rate.",
    " Applicable within the city limit only."
  ]


  return (
    <RootDiv>
      <AppBar position="static">
        <Toolbar>
          <Typography>City Meter Tariff</Typography>
        </Toolbar>
      </AppBar>

      <BgDiv>
        <div>
          <Divider>
            <Typography style={{ fontWeight: "bold", fontSize: "20px" }}>
              City Meter Tariff - Tirunelveli
            </Typography>
          </Divider>
        </div>

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow >
                <TableCell align="center" style={{fontWeight:'bold'}}  >
                Vehicle Type
                </TableCell>
                <TableCell align="center" style={{fontWeight:'bold'}} >
                Minimum Rate
                </TableCell>
                <TableCell align="center" colSpan={2} style={{fontWeight:'bold'}}>
                Additional Charges Per Km
                </TableCell>
                <TableCell align="center" colSpan={2} style={{fontWeight:'bold'}}>
                Riding Charges Per Min
                </TableCell>
              </TableRow>
              
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      
                      tabIndex={-1}
                      key={row.name}
                    >
                   <TableCell align="center">
                   {row.name}
                   </TableCell>
                   <TableCell align="center">
                   {row.rate}
                   </TableCell>
                   <TableCell align="center">
                   {row.add1}
                   </TableCell>
                   <TableCell align="center">
                   {row.add2}
                   </TableCell>
                   <TableCell align="center">
                   {row.min1}
                   </TableCell>
                   <TableCell align="center">
                   {row.min1}
                   </TableCell>
                    </TableRow>

                    
                    
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>

        <div style={{marginTop:'5%',marginLeft:'1%'}}>
            <Typography style={{fontWeight:'bold'}}>Notes:</Typography>
            {
                notesList.map(el => (
                    <Typography style={{marginLeft:'2%'}}> ➡ {el} </Typography>
                ))
            }
        </div>
      </BgDiv>
    </RootDiv>
  );
}
