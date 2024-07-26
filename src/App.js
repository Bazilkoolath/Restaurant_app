import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Container  } from 'react-bootstrap';
import RestaurantDetails from './Components/RestaurantDetails';
function App() {

  return (
    <Router>
      <Header />

    <Container>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='restaurantdetails/:id' element={<RestaurantDetails/>} />
    </Routes>
    </Container>

      <Footer/>
 
    </Router>
  );
}

export default App;
