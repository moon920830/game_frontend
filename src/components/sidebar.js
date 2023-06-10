import * as React from 'react';

import { Link } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#262638",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#262638",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: '#BFBFCD',
  cursor: 'pointer'
}));
const message = `Truncation should be conditionally applicable on this long line of text
  as this is a much longer line than what the container can support. `;
function Sidebar() {
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (

      <Drawer
        variant="permanent"
        anchor="right"
        open={open}
      >
      <Box sx={{ flexGrow: 1, backgroundColor: "#181823"}}>
        <Link href="#" underline="none">
          <Grid
            container
            height={138}
            width="100%"
            justifyContent="center"
            alignItems="center"
            direction="row"
            style={{
              backgroundImage: `url("images/bg-logo.png")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <img src="images/logo.png" alt="logo" width="70%" style={{marginRight: '-20px'}}></img>
          </Grid>
        </Link>
        <Grid container spacing={2} padding="12px" justifyContent="flex-start">
          <Grid item xs={2}>
            <Item>
              <img
                src="images/pin.svg"
                alt="pin"
                style={{ marginBottom: "-6px", cursor: 'pointer' }}
                onClick={handleDrawerClose}
              ></img>
            </Item>
          </Grid>
          <Grid item xs={10}>
            <Item>
              <Grid container spacing={2} direction="row">
                <Grid
                  item
                  xs={8}
                  style={{ color: "#BFBFCD", textAlign: "start" }}
                >
                  <img
                    src="images/gbsvg.svg"
                    alt="bgsvg"
                    style={{ marginBottom: "-6px" }}
                  ></img>
                  &nbsp;English Chat
                </Grid>
                <Grid item xs={4} style={{ color: "#fff", textAlign: "end" }}>
                  638&nbsp;&nbsp;&nbsp;
                  <img
                    src="images/divflex.svg"
                    alt="divflex"
                    style={{ marginBottom: "-5px", cursor: "pointer" }}
                  ></img>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
        <Divider />
        <Box sx={{ flexGrow: 1, overflowY: "hidden", px: 3 }} height={692}>
          <StyledPaper
            sx={{
              my: 2,
              mx: "auto",
              p: 2,
            }}
          >
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
                <Avatar src="images/avatar.png">W</Avatar>
              </Grid>
              <Grid item xs zeroMinWidth style={{textAlign: 'start'}}>
                <Typography style={{ fontSize: 14, color: '#8A8AA3' }}>Suriki <span style={{float: 'right', color: 'white',fontSize: 12}}>06:51</span></Typography>
                <Typography noWrap style={{ fontSize: 12 }}>{message}</Typography>
              </Grid>
            </Grid>
          </StyledPaper>
        </Box>
      </Box>
      </Drawer>
  );
}

export default Sidebar;
