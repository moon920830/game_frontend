import * as React from 'react';

import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from 'react-router-dom';

import { useMediaQuery } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';
import {
  styled,
  useTheme,
} from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Header from './components/header';
import Content from './components/main';
import Navbar from './components/navbar';
import BlackJack from './pages/blackjack';
import Coinflip from './pages/coinflip';
import Jackpot from './pages/jackpot';
import Wheel from './pages/wheel';

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
  marginTop: "92px",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  marginTop: "92px",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawer = () => {
    if (open === true) {
      handleDrawerClose();
    } else {
      handleDrawerOpen();
    }
  };
  const StyledPaper = styled(Paper)(({ theme }) => ({
    backgroundColor: open ? "#262638" : "#181823",
    ...theme.typography.body2,
    maxWidth: 400,
    color: "#BFBFCD",
    cursor: "pointer",
  }));

  const logoImage = open ? (
    <img src="images/logo.png" alt="logo" width="70%" />
  ) : (
    <img src="images/logo1.png" alt="logo" width="100%" />
  );
  const message = `Truncation should be conditionally applicable on this long line of text
  as this is a much longer line than what the container can support. `;
  const isSmallScreen = useMediaQuery("(max-width: 900px)");
  return (
    <div>
      <Router>
        {!isSmallScreen && <Header></Header>}
        <Navbar />
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <Box
            component="main"
            sx={{ flexGrow: 1, p: 3 }}
            style={{ backgroundImage: `url("images/bg-content.png")` }}
          >
            <DrawerHeader />
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/blackjack" element={<BlackJack />} />
              <Route path="/coinflip" element={<Coinflip />} />
              <Route path="/wheel" element={<Wheel />} />
              <Route path="/jackpot" element={<Jackpot />} />
            </Routes>
          </Box>
          {!isSmallScreen && (
            <Drawer
              variant="permanent"
              anchor="right"
              open={open}
              sx={{
                "& .MuiDrawer-paper": {
                  position: "absolute",
                  backgroundColor: "#181823",
                  color: "#BFBFCD",
                  padding: "12px",
                  display: isSmallScreen ? "hidden" : "inherit",
                },
                visibility: isSmallScreen ? "hidden" : "inherit",
                backgroundColor: '#181823',
              }}
            >
              <DrawerHeader onClick={handleDrawer} sx={{ padding: 0 }}>
                <Link href="#" underline="none">
                  <Grid
                    container
                    width="100%"
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                    style={{
                      backgroundImage: open ? 'url("images/bg-logo.png")' : "",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {logoImage}
                  </Grid>
                </Link>
              </DrawerHeader>
              <Divider />
              <List>
                <StyledPaper
                  sx={{
                    my: 2,
                    mx: "auto",
                    py: 2,
                  }}
                >
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar src="images/avatar.png"></Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth style={{ textAlign: "start" }}>
                      <Typography
                        style={{ fontSize: 14, color: "#8A8AA3" }}
                        sx={{ visibility: open ? "inherit" : "hidden" }}
                      >
                        Suriki{" "}
                        <span
                          style={{
                            float: "right",
                            color: "white",
                            fontSize: 12,
                          }}
                        >
                          06:51
                        </span>
                      </Typography>
                      <Typography noWrap style={{ fontSize: 12 }}>
                        {message}
                      </Typography>
                    </Grid>
                  </Grid>
                </StyledPaper>
                <StyledPaper
                  sx={{
                    my: 2,
                    mx: "auto",
                    py: 2,
                  }}
                >
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar src="images/avatar.png">W</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth style={{ textAlign: "start" }}>
                      <Typography
                        style={{ fontSize: 14, color: "#8A8AA3" }}
                        sx={{ visibility: open ? "inherit" : "hidden" }}
                      >
                        Suriki{" "}
                        <span
                          style={{
                            float: "right",
                            color: "white",
                            fontSize: 12,
                          }}
                        >
                          06:51
                        </span>
                      </Typography>
                      <Typography noWrap style={{ fontSize: 12 }}>
                        {message}
                      </Typography>
                    </Grid>
                  </Grid>
                </StyledPaper>
                <StyledPaper
                  sx={{
                    my: 2,
                    mx: "auto",
                    py: 2,
                  }}
                >
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar src="images/avatar.png">W</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth style={{ textAlign: "start" }}>
                      <Typography
                        style={{ fontSize: 14, color: "#8A8AA3" }}
                        sx={{ visibility: open ? "inherit" : "hidden" }}
                      >
                        Suriki{" "}
                        <span
                          style={{
                            float: "right",
                            color: "white",
                            fontSize: 12,
                          }}
                        >
                          06:51
                        </span>
                      </Typography>
                      <Typography noWrap style={{ fontSize: 12 }}>
                        {message}
                      </Typography>
                    </Grid>
                  </Grid>
                </StyledPaper>
                <StyledPaper
                  sx={{
                    my: 2,
                    mx: "auto",
                    py: 2,
                  }}
                >
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar src="images/avatar.png">W</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth style={{ textAlign: "start" }}>
                      <Typography
                        style={{ fontSize: 14, color: "#8A8AA3" }}
                        sx={{ visibility: open ? "inherit" : "hidden" }}
                      >
                        Suriki{" "}
                        <span
                          style={{
                            float: "right",
                            color: "white",
                            fontSize: 12,
                          }}
                        >
                          06:51
                        </span>
                      </Typography>
                      <Typography noWrap style={{ fontSize: 12 }}>
                        {message}
                      </Typography>
                    </Grid>
                  </Grid>
                </StyledPaper>
                <StyledPaper
                  sx={{
                    my: 2,
                    mx: "auto",
                    py: 2,
                  }}
                >
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar src="images/avatar.png">W</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth style={{ textAlign: "start" }}>
                      <Typography
                        style={{ fontSize: 14, color: "#8A8AA3" }}
                        sx={{ visibility: open ? "inherit" : "hidden" }}
                      >
                        Suriki{" "}
                        <span
                          style={{
                            float: "right",
                            color: "white",
                            fontSize: 12,
                          }}
                        >
                          06:51
                        </span>
                      </Typography>
                      <Typography noWrap style={{ fontSize: 12 }}>
                        {message}
                      </Typography>
                    </Grid>
                  </Grid>
                </StyledPaper>
                <StyledPaper
                  sx={{
                    my: 2,
                    mx: "auto",
                    py: 2,
                  }}
                >
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar src="images/avatar.png">W</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth style={{ textAlign: "start" }}>
                      <Typography
                        style={{ fontSize: 14, color: "#8A8AA3" }}
                        sx={{ visibility: open ? "inherit" : "hidden" }}
                      >
                        Suriki{" "}
                        <span
                          style={{
                            float: "right",
                            color: "white",
                            fontSize: 12,
                          }}
                        >
                          06:51
                        </span>
                      </Typography>
                      <Typography noWrap style={{ fontSize: 12 }}>
                        {message}
                      </Typography>
                    </Grid>
                  </Grid>
                </StyledPaper>
                <StyledPaper
                  sx={{
                    my: 2,
                    mx: "auto",
                    py: 2,
                  }}
                >
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar src="images/avatar.png">W</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth style={{ textAlign: "start" }}>
                      <Typography
                        style={{ fontSize: 14, color: "#8A8AA3" }}
                        sx={{ visibility: open ? "inherit" : "hidden" }}
                      >
                        Suriki{" "}
                        <span
                          style={{
                            float: "right",
                            color: "white",
                            fontSize: 12,
                          }}
                        >
                          06:51
                        </span>
                      </Typography>
                      <Typography noWrap style={{ fontSize: 12 }}>
                        {message}
                      </Typography>
                    </Grid>
                  </Grid>
                </StyledPaper>
                <StyledPaper
                  sx={{
                    my: 2,
                    mx: "auto",
                    py: 2,
                  }}
                >
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar src="images/avatar.png">W</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth style={{ textAlign: "start" }}>
                      <Typography
                        style={{ fontSize: 14, color: "#8A8AA3" }}
                        sx={{ visibility: open ? "inherit" : "hidden" }}
                      >
                        Suriki{" "}
                        <span
                          style={{
                            float: "right",
                            color: "white",
                            fontSize: 12,
                          }}
                        >
                          06:51
                        </span>
                      </Typography>
                      <Typography noWrap style={{ fontSize: 12 }}>
                        {message}
                      </Typography>
                    </Grid>
                  </Grid>
                </StyledPaper>
              </List>
            </Drawer>
          )}
        </Box>
      </Router>
    </div>
  );
}
