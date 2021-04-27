
import { Container } from 'react-bootstrap';
import Switch from 'react-bootstrap/esm/Switch';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import BreedsPage from './pages/BreedsPage/BreedsPage';
import SpecificBreedPage from './pages/SpecificBreedPage/SpecificBreedPage';
import { CSSTransition } from 'react-transition-group';
function App() {
  


  return (
    <Container>
      <HashRouter>
        <Switch>
          <Route exact path="/"><CSSTransition
            in={true}
            appear={true}
            timeout={1000}
            classNames="fade">
          <HomePage /></CSSTransition></Route>
          <Route exact path="/breeds"><BreedsPage /></Route>
          <Route exact path="/breeds/buldog"><SpecificBreedPage /></Route>
        </Switch>
      </HashRouter>
    </Container>
  )
}

export default App;
