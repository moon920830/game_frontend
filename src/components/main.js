import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import { Link } from 'react-router-dom';

import Dialog from '@mui/material/Dialog';
import Grid from '@mui/material/Grid';
import {
  createTheme,
  ThemeProvider,
} from '@mui/material/styles';

function GameItem({ imageSrc, overlayText }) {
  const theme = createTheme({
    components: {
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: '45px',
            overflow: 'hidden',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            paddingRight: '0 !important',
          },
        },
      },
    },
  });

  const dialogImageStyle = {
    width: '1000px',
    height: '100%',
    margin: '-20px',
    marginBottom: '-30px',
  };

  const overlayBoxRef = useRef(null);

  const handleImageLoad = (e) => {
    const img = e.target;
    const box = img.parentNode && img.parentNode.querySelector('.overlay-box');
    if (box) {
      box.style.width = `${img.offsetWidth}px`;
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const box = overlayBoxRef.current;
      if (box) {
        box.style.width = `${box.parentNode.offsetWidth}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        item
        xs={12}
        sm={6}
        xl={3}
        style={{ cursor: 'pointer', position: 'relative' }}
        onClick={handleClickOpen}
      >
        <Link to="#">
          <img
            src={imageSrc}
            style={{ maxWidth: '100%' }}
            alt="game1"
            onLoad={handleImageLoad}
          />
          <Grid
            container
            alignItems="center"
            className="overlay-box"
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(0, 0, 0, 0.16)',
              bottom: '5px',
              borderBottomRightRadius: '10px',
              borderBottomLeftRadius: '10px',
              width: '100%', // Added width property
            }}
            height="50px"
            px={2}
            columnGap={1}
            ref={overlayBoxRef}
          >
            <img src="images/svg5.svg" alt="svg6" />
            <span style={{ color: 'white' }}>{overlayText}</span>
          </Grid>
        </Link>
      </Grid>
      <Dialog open={open} onClose={handleClose} maxWidth={false}>
        <img src={imageSrc} style={dialogImageStyle} alt="game1" />
      </Dialog>
    </ThemeProvider>
  );
}
function GameItem1({ imageSrc, overlayText }) {
  const theme = createTheme({
    components: {
      MuiDialog: {
        styleOverrides: {
          paper: {
            borderRadius: '45px',
            overflow: 'hidden',
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            paddingRight: '0 !important',
          },
        },
      },
    },
  });

  const dialogImageStyle = {
    width: '1000px',
    height: '100%',
    margin: '-20px',
    marginBottom: '-30px',
  };

  const overlayBoxRef = useRef(null);

  const handleImageLoad = (e) => {
    const img = e.target;
    const box = img.parentNode && img.parentNode.querySelector('.overlay-box');
    if (box) {
      box.style.width = `${img.offsetWidth}px`;
    }
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const box = overlayBoxRef.current;
      if (box) {
        box.style.width = `${box.parentNode.offsetWidth}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Grid
        item
        xs={12}
        sm={6}
        style={{ cursor: 'pointer', position: 'relative' }}
        onClick={handleClickOpen}
      >
        <Link to="#">
          <img
            src={imageSrc}
            style={{ maxWidth: '100%' }}
            alt="game1"
            onLoad={handleImageLoad}
          />
          <Grid
            container
            alignItems="center"
            className="overlay-box"
            style={{
              position: 'absolute',
              backgroundColor: 'rgba(0, 0, 0, 0.16)',
              bottom: '5px',
              borderBottomRightRadius: '10px',
              borderBottomLeftRadius: '10px',
              width: '100%', // Added width property
            }}
            height="50px"
            px={2}
            columnGap={1}
            ref={overlayBoxRef}
          >
            <img src="images/svg5.svg" alt="svg6" />
            <span style={{ color: 'white' }}>{overlayText}</span>
          </Grid>
        </Link>
      </Grid>
      <Dialog open={open} onClose={handleClose} maxWidth={false}>
        <img src={imageSrc} style={dialogImageStyle} alt="game1" />
      </Dialog>
    </ThemeProvider>
  );
}

function Content() {
  return (
    <div>
      <Grid
        fixed
        width="100%"
        height="100%"
        direction="row"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
        }}
      >
        <Grid
          container
          maxWidth="90%"
          spacing={1}
          style={{ margin: 'auto', textAlign: 'start' }}
        >
          <Grid item xs={12}>
            Howl Originals
          </Grid>
          <Grid item container direction="row" spacing={2} xs={12} mt={1}>
            <GameItem
              imageSrc="images/game1.png"
              overlayText="BlackJack"
            />
            <GameItem
              imageSrc="images/game2.png"
              overlayText="Coinflip"
            />
            <GameItem
              imageSrc="images/game3.png"
              overlayText="Wheel"
            />
            <GameItem
              imageSrc="images/game4.png"
              overlayText="Jackpot"
            />
          </Grid>
          <Grid item xs={12} mt={6}>
            Howl Originals
          </Grid>
          <Grid item container direction="row" spacing={2} xs={12} mt={1}>
            <GameItem1
              imageSrc="images/game5.png"
              overlayText="BlackJack"
            />
            <GameItem1
              imageSrc="images/game6.png"
              overlayText="Coinflip"
            />
          </Grid>
          <Grid item xs={12} mt={6}>
            Howl Originals
          </Grid>
          <Grid item container direction="row" spacing={2} xs={12} mt={1}>
            <GameItem
              imageSrc="images/game1.png"
              overlayText="BlackJack"
            />
            <GameItem
              imageSrc="images/game2.png"
              overlayText="Coinflip"
            />
            <GameItem
              imageSrc="images/game3.png"
              overlayText="Wheel"
            />
            <GameItem
              imageSrc="images/game4.png"
              overlayText="Jackpot"
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
