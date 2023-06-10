import Grid from '@mui/material/Grid';

function Coinflip() {
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
        This is Coinflip page
      </Grid>
    </div>
  );
}

export default Coinflip;
