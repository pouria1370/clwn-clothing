import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route} from 'react-router-dom'
import SHOPPAGE from './pages/shop/shop.component.jsx'

function App() {
  return (
    <div >
    <Route component={HomePage} exact path="/"/>
    <Route component={SHOPPAGE} exact path="/shop"/>
    </div>
  );
}

export default App;
