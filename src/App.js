import logo from './logo.svg';
import './App.css';
import Home from './components/home-content/home/Home';
import { Redirect, Route, Switch } from 'react-router';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import Games from './components/games/games-main/Games';
import DataContextProvider from './context';
import GameCard from './components/games/game-card/GameCard';
import Hayday from './components/games/hayday/Hayday';
import { CookiesProvider } from 'react-cookie';


function App() {
  return (
        <CookiesProvider>
          <div className="App">
            <Header/>
              <Switch>
                  <Route exact path="/home" component={Home}/>
                  <Route exact path="/games" component={Games}/>
                  <Route path="/games/hayday" component={Hayday}/>
                  <Redirect to="/home"/>
              </Switch>
            <Footer/>
          </div>
        </CookiesProvider>
    
       
  );
}

export default App;
