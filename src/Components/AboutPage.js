import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { styled } from '@mui/material/styles';

const appBarSx = (theme) => ({
  padding: theme.spacing(1),

  [theme.breakpoints.down("md")]: {
    backgroundColor: "red",
  },
  [theme.breakpoints.up("md")]: {
    backgroundColor: "orange",
  },
  [theme.breakpoints.between("sm", "md")]: {
    backgroundColor: "green",
  },
  [theme.breakpoints.up("lg")]: {
    backgroundColor: "indigo",
  },
});


const Root = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    backgroundColor: "red",
  },
  [theme.breakpoints.up('md')]: {
    backgroundColor: "blue",
  },
  [theme.breakpoints.up('lg')]: {
    backgroundColor: "green",
  },
}));


const sx1 = (theme) => ({
  [theme.breakpoints.down('md')]:{
    color:'white'
  }
})

const NewDiv = styled('div')(({theme}) => ({
  height:'200px',
    weight:'200px',
  [theme.breakpoints.down('md')]:{
    backgroundColor:'cyan',
    
  }
}))


export default function AboutPage() {
  return (
    <div>
      <AppBar sx={appBarSx} position="static">
        <Toolbar>
          <Typography>AboutPage</Typography>
        </Toolbar>
      </AppBar>

      <Root>
        <Typography sx={sx1} >LMAO</Typography >
      
      </Root>

      <NewDiv >
          <h1>LOL</h1>
        </NewDiv>
    </div>
  );
} 

