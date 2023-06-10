import PopupState, {
  bindPopover,
  bindTrigger,
} from 'material-ui-popup-state';
import {
  BsDpad,
  BsGiftFill,
} from 'react-icons/bs';
import { FaHome } from 'react-icons/fa';
import { TbTargetArrow } from 'react-icons/tb';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Grid,
  IconButton,
} from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

function Navbar() {
    return(
        <div>
            <Box sx={{
                width: '100%',
                height: 50,
                backgroundColor: '#1F1F2D',
                display: 'flex',
            }}>
                <Grid container display={'flex'} alignItems={'center'}>
                    <Grid paddingRight={'20px'} paddingLeft={'20px'} borderRight={'1px solid grey'}>
                        <FaHome color='rgb(110 110 140)' size={25}/>
                    </Grid>
                    <Grid display={'flex'} paddingLeft={'50px'}>
                        {/* <img src='/gamepanel.svg' style={{marginRight: '30px'}} alt='gamepanel icon'/> */}
                        
                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                                <div>
                                    {console.log("popup state", popupState.isOpen)}
                                    <IconButton style={{width:'20px', height:'20px', marginLeft:'4px'}} {...bindTrigger(popupState)}>
                                        {popupState.isOpen ? <BsDpad color='rgb(255,0,0)'/> : <BsDpad color='rgb(110 110 140)'/>}
                                        <Typography marginLeft={'10px'} color={'rgb(110 110 140)'}>Games</Typography>
                                        {popupState.isOpen ? (<ExpandLessIcon sx={{color:'red'}}/>) : (<ExpandMoreIcon sx={{color:'rgb(110 110 140)'}}/>)}
                                    </IconButton>
                                    <Popover
                                        {...bindPopover(popupState)}
                                        anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'center',
                                        display: 'flex'
                                        }}
                                    >
                                        <Grid container display={'flex'} sx={{
                                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                        }} >
                                            <Grid item alignItems={'end'} padding={'10px'} margin={'5px'} sx={{
                                                backgroundImage: `url(jackpotthumbnailb2a1b703aef9b463523apng@2x.png)`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                width: '130px',
                                                height: '87px', // Adjust the height as per your requirement
                                            }}>
                                                <Typography color={'white'} fontSize={'14px'} fontFamily={'Montserrat,Arial,Helvetica,sans-serif'} marginBottom={'25px'} textAlign={'end'}>$0.00</Typography>
                                                <Typography alignItems={'center'} color={'white'} display={'flex'} fontSize={'14px'} fontFamily={'Montserrat,Arial,Helvetica,sans-serif'} justifyContent={'center'} textAlign={'center'}><TbTargetArrow style={{marginRight:'3px'}}/>Jackpot</Typography>
                                            </Grid>

                                            <Grid item alignItems={'end'} padding={'10px'} margin={'5px'} sx={{
                                                backgroundImage: `url(coinflipthumbnail69e7131bd5dd3e257231png@2x.png)`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                width: '130px',
                                                height: '87px', // Adjust the height as per your requirement
                                            }}>
                                                {/* <img width={'130px'} height = {'87px'} src='coinflipthumbnail69e7131bd5dd3e257231png@2x.png' alt='gamejack'/> */}
                                                <Typography color={'white'} fontSize={'14px'} fontFamily={'Montserrat,Arial,Helvetica,sans-serif'} marginBottom={'25px'} textAlign={'end'}>$0.00</Typography>
                                                <Typography alignItems={'center'} color={'white'} display={'flex'} fontSize={'14px'} fontFamily={'Montserrat,Arial,Helvetica,sans-serif'} justifyContent={'center'} textAlign={'center'}><TbTargetArrow style={{marginRight:'3px'}}/>Coinflip</Typography>
                                            </Grid>

                                            <Grid item alignItems={'end'} padding={'10px'} margin={'5px'} sx={{
                                                backgroundImage: `url(wheelthumbnaila77aff37bbbf7e5795b1png@2x.png)`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                width: '130px',
                                                height: '87px', // Adjust the height as per your requirement
                                            }}>
                                                <Typography color={'white'} fontSize={'14px'} fontFamily={'Montserrat,Arial,Helvetica,sans-serif'} marginBottom={'25px'} textAlign={'end'}>$0.00</Typography>
                                                <Typography alignItems={'center'} color={'white'} display={'flex'} fontSize={'14px'} fontFamily={'Montserrat,Arial,Helvetica,sans-serif'} justifyContent={'center'} textAlign={'center'}><TbTargetArrow style={{marginRight:'3px'}}/>The Wheel</Typography>
                                            </Grid>

                                            <Grid item alignItems={'end'} padding={'10px'} margin={'5px'} sx={{
                                                backgroundImage: `url(blackjackthumbnailc865271d922ebae23820png@2x.png)`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                width: '130px',
                                                height: '87px', // Adjust the height as per your requirement
                                            }}>
                                                <Typography color={'white'} fontSize={'14px'} fontFamily={'Montserrat,Arial,Helvetica,sans-serif'} marginBottom={'25px'} textAlign={'end'}>$0.00</Typography>
                                                <Typography alignItems={'center'} color={'white'} display={'flex'} fontSize={'14px'} fontFamily={'Montserrat,Arial,Helvetica,sans-serif'} justifyContent={'center'} textAlign={'center'}><TbTargetArrow style={{marginRight:'3px'}}/>Blackjack</Typography>
                                            </Grid>

                                            <Grid item alignItems={'end'} padding={'10px'} margin={'5px'} sx={{
                                                backgroundImage: `url(slotsthumbnail6568ae611f75a46d7c90png@2x.png)`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                width: '130px',
                                                height: '87px', // Adjust the height as per your requirement
                                            }}>
                                                <Typography color={'white'} fontSize={'14px'} fontFamily={'Montserrat,Arial,Helvetica,sans-serif'} marginBottom={'25px'} textAlign={'end'}>$0.00</Typography>
                                                <Typography alignItems={'center'} color={'white'} display={'flex'} fontSize={'14px'} fontFamily={'Montserrat,Arial,Helvetica,sans-serif'} justifyContent={'center'} textAlign={'center'}><TbTargetArrow style={{marginRight:'3px'}}/>Slots</Typography>
                                            </Grid>

                                            <Grid item alignItems={'end'} padding={'10px'} margin={'5px'} sx={{
                                                backgroundImage: `url(livegamesthumbnail9929962bf3f823cd2426png@2x.png)`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                width: '130px',
                                                height: '87px', // Adjust the height as per your requirement
                                            }}>
                                                <Typography color={'white'} fontSize={'14px'} fontFamily={'Montserrat,Arial,Helvetica,sans-serif'} marginBottom={'25px'} textAlign={'end'}>$0.00</Typography>
                                                <Typography alignItems={'center'} color={'white'} display={'flex'} fontSize={'14px'} fontFamily={'Montserrat,Arial,Helvetica,sans-serif'} justifyContent={'center'} textAlign={'center'}><TbTargetArrow style={{marginRight:'3px'}}/>Live Games</Typography>
                                            </Grid>
                                        </Grid>
                                        
                                    </Popover>
                                </div>
                                
                            )}
                        </PopupState>
                        
                    </Grid>
                </Grid>

                <Grid container alignItems={'center'} justifyContent={'end'} marginRight={'20px'}>
                    <Grid borderRight={'1px solid grey'} paddingRight={'20px'}>
                        <Button variant="contained" color='error'><BsGiftFill style={{marginRight: '10px'}}/>Free Coins</Button>
                    </Grid>

                    <Grid paddingLeft={'20px'}>
                        <Button variant='contained' color='error' size='large'>Login</Button>
                    </Grid>

                </Grid>
            </Box>
        </div>
    );
}

export default Navbar;