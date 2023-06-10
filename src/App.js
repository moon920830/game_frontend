import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import Grid from '@mui/material/Grid';

import Header from './components/header';
import Content from './components/main';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import BlackJack from './pages/blackjack';
import Jackpot from './pages/blackjack';
import Coinflip from './pages/coinflip';
import Wheel from './pages/wheel';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <Router>
        <Grid container>
          <Grid item xs={9}>
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/blackjack" element={<BlackJack />} />
              <Route path="/coinflip" element={<Coinflip />} />
              <Route path="/wheel" element={<Wheel />} />
              <Route path="/jackpot" element={<Jackpot />} />
            </Routes>
          </Grid>
          <Grid item xs={3}>
            <Sidebar></Sidebar>
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
