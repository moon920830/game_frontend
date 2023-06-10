import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
// import TwitterIcon from '@mui/icons-material/Twitter';
// import { FaDiscord } from 'react-icons/fa';
// import Button from '@mui/material/Button';
import { SlSocialDropbox } from 'react-icons/sl';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function Header() {
    const [value, setValue] = useState(66325854)
    return(
        <Box sx={{
            width: '100%',
            backgroundColor: '#141421',
            display:'flex',
            alignContent: 'space-between',
          }}>
            <Grid container xs = {9} alignItems={'center'}>
                <Grid item sx={{
                    color: 'rgb(110 110 140)',
                    marginRight: '10px',
                    padding: '5px'
                }}>
                    <img src='/button.svg' alt='gamepanel icon'/>
                </Grid>

                <Grid item  sx={{
                    color: 'grey',
                    marginRight: '10px'
                }}>
                    <img src='/button1.svg' alt='gamepanel icon'/>
                </Grid>

                <Grid marginRight={'10px'}>
                    <img src='/button2.svg' alt='gamepanel icon'/>
                </Grid>
                
                <Typography sx={{
                    color: 'rgb(110 110 140)',
                    marginRight: '10px',
                    fontFamily: 'Montserrat',
                    fontSize: '12px'
                }}>Provable Fair</Typography>

                <Typography  sx={{
                    color: 'rgb(110 110 140)',
                    marginRight: '10px',
                    fontFamily: 'Montserrat',
                    fontSize: '12px'
                }}>Frequently Asked</Typography>

                <Typography sx={{
                    color: 'rgb(110 110 140)',
                    marginRight: '10px',
                    fontFamily: 'Montserrat',
                    fontSize: '12px'
                }}>Privacy Policy</Typography>

                <Typography sx={{
                    color: 'rgb(110 110 140)',
                    marginRight: '10px',
                    fontFamily: 'Montserrat',
                    fontSize: '12px'
                }}>Term of Service</Typography>

                <Typography sx={{
                    color: 'rgb(110 110 140)',
                    marginRight: '10px',
                    fontFamily: 'Montserrat',
                    fontSize: '12px'
                }}>Support</Typography>

                <Typography sx={{
                    color: 'rgb(110 110 140)',
                    marginRight: '10px',
                    fontFamily: 'Montserrat',
                    fontSize: '12px'
                }}>Blog</Typography>

                <Typography  sx={{
                    alignItems: 'center',
                    color: 'rgb(191 191 205)',
                    marginRight: '10px',
                    fontFamily: 'Montserrat',
                    fontSize: '12px'
                }}>Daily Case <SlSocialDropbox style={{paddingLeft:'10px'}}/>
                </Typography>
            </Grid>
                
            <Grid container xs={3} justifyContent={'end'} alignItems={'center'} marginRight={'20px'}>
                <Typography sx={{
                    color: 'white'
                }}>{value.toLocaleString()}</Typography>
                <Typography sx={{
                    color: 'rgb(191 191 205)',
                    paddingLeft: '10px',
                    marginRight: '10px'
                }}>Total Bets</Typography>
            </Grid>
        </Box>
    );
}

export default Header;