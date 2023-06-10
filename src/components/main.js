import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';

function Content() {
  return (
    <div>
      <Grid
        fixed
        height="92vh"
        width="100%"
        direction="row"
        style={{
          backgroundImage: `url("images/bg-content.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          paddingTop: "108px",
          color: "white",
        }}
      >
        <Grid
          container
          maxWidth="90%"
          spacing={1}
          style={{ margin: "auto", textAlign: "start" }}
        >
          <Grid item xs={12}>
            Howl Originals
          </Grid>
          <Grid item container direction="row" spacing={2} xs={12} mt={1}>
            <Grid
              item
              xs={3}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <Link to="/blackjack">
                <img
                  src="images/game1.png"
                  style={{ maxWidth: "100%" }}
                  alt="game1"
                  ref={(img) => {
                    if (img) {
                      const box = img.parentNode.querySelector(".overlay-box");
                      box.style.width = `${img.clientWidth}px`;
                    }
                  }}
                  onLoad={(e) => {
                    const img = e.target;
                    const box = img.parentNode.querySelector(".overlay-box");
                    box.style.width = `${img.clientWidth}px`;
                  }}
                />
                <Grid
                  container
                  alignItems="center"
                  className="overlay-box"
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.16)",
                    bottom: "5px",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                  width="100%"
                  height="50px"
                  px={2}
                  columnGap={1}
                >
                  <img src="images/svg5.svg" alt="svg6"></img>
                  <span style={{ color: "white" }}>BlackJack</span>
                </Grid>
              </Link>
            </Grid>
            <Grid
              item
              xs={3}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <Link to="/coinflip">
                <img
                  src="images/game2.png"
                  style={{ maxWidth: "100%" }}
                  alt="game2"
                  ref={(img) => {
                    if (img) {
                      const box = img.parentNode.querySelector(".overlay-box");
                      box.style.width = `${img.clientWidth}px`;
                    }
                  }}
                  onLoad={(e) => {
                    const img = e.target;
                    const box = img.parentNode.querySelector(".overlay-box");
                    box.style.width = `${img.clientWidth}px`;
                  }}
                />
                <Grid
                  container
                  alignItems="center"
                  className="overlay-box"
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.16)",
                    bottom: "5px",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                  width="100%"
                  height="50px"
                  px={2}
                  columnGap={1}
                >
                  <img src="images/svg5.svg" alt="svg6"></img>
                  <span style={{ color: "white" }}>Coinflip</span>
                </Grid>
              </Link>
            </Grid>
            <Grid
              item
              xs={3}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <Link to="/wheel">
                <img
                  src="images/game3.png"
                  style={{ maxWidth: "100%" }}
                  alt="game3"
                  ref={(img) => {
                    if (img) {
                      const box = img.parentNode.querySelector(".overlay-box");
                      box.style.width = `${img.clientWidth}px`;
                    }
                  }}
                  onLoad={(e) => {
                    const img = e.target;
                    const box = img.parentNode.querySelector(".overlay-box");
                    box.style.width = `${img.clientWidth}px`;
                  }}
                />
                <Grid
                  container
                  alignItems="center"
                  className="overlay-box"
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.16)",
                    bottom: "5px",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                  width="100%"
                  height="50px"
                  px={2}
                  columnGap={1}
                >
                  <img src="images/svg5.svg" alt="svg6"></img>
                  <span style={{ color: "white" }}>The Wheel</span>
                </Grid>
              </Link>
            </Grid>
            <Grid
              item
              xs={3}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <Link to="/jackpot">
                <img
                  src="images/game4.png"
                  style={{ maxWidth: "100%" }}
                  alt="game4"
                  ref={(img) => {
                    if (img) {
                      const box = img.parentNode.querySelector(".overlay-box");
                      box.style.width = `${img.clientWidth}px`;
                    }
                  }}
                  onLoad={(e) => {
                    const img = e.target;
                    const box = img.parentNode.querySelector(".overlay-box");
                    box.style.width = `${img.clientWidth}px`;
                  }}
                />
                <Grid
                  container
                  alignItems="center"
                  className="overlay-box"
                  style={{
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.16)",
                    bottom: "5px",
                    borderBottomRightRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                  width="100%"
                  height="50px"
                  px={2}
                  columnGap={1}
                >
                  <img src="images/svg5.svg" alt="svg6"></img>
                  <span style={{ color: "white" }}>Jackpot</span>
                </Grid>
              </Link>
            </Grid>
          </Grid>
          <Grid item xs={12} mt={6}>
            Casino
          </Grid>
          <Grid item container direction="row" spacing={2} xs={12} mt={1}>
            <Grid
              item
              xs={6}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <img
                src="images/game5.png"
                style={{ maxWidth: "100%" }}
                alt="game5"
                ref={(img) => {
                  if (img) {
                    const box = img.parentNode.querySelector(".overlay-box");
                    box.style.width = `${img.clientWidth}px`;
                  }
                }}
                onLoad={(e) => {
                  const img = e.target;
                  const box = img.parentNode.querySelector(".overlay-box");
                  box.style.width = `${img.clientWidth}px`;
                }}
              />
              <Grid
                container
                alignItems="center"
                className="overlay-box"
                style={{
                  position: "absolute",
                  backgroundColor: "rgba(0, 0, 0, 0.16)",
                  bottom: "5px",
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                width="100%"
                height="50px"
                px={2}
                columnGap={1}
              >
                <img src="images/svg5.svg" alt="svg6"></img>
                Slots
              </Grid>
            </Grid>
            <Grid
              item
              xs={6}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <img
                src="images/game6.png"
                style={{ maxWidth: "100%" }}
                alt="game6"
                ref={(img) => {
                  if (img) {
                    const box = img.parentNode.querySelector(".overlay-box");
                    box.style.width = `${img.clientWidth}px`;
                  }
                }}
                onLoad={(e) => {
                  const img = e.target;
                  const box = img.parentNode.querySelector(".overlay-box");
                  box.style.width = `${img.clientWidth}px`;
                }}
              />
              <Grid
                container
                alignItems="center"
                className="overlay-box"
                style={{
                  position: "absolute",
                  backgroundColor: "rgba(0, 0, 0, 0.16)",
                  bottom: "5px",
                  borderBottomRightRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
                width="100%"
                height="50px"
                px={2}
                columnGap={1}
              >
                <img src="images/svg5.svg" alt="svg6"></img>
                Live Games
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Content;
