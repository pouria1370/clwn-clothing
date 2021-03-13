import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route} from 'react-router-dom'

const Hats=()=>{
  return(
    <div>
    <h1>hello world iam HATS</h1>
    </div>
  )
}

function App() {
  return (
    <div >
    <Route component={HomePage} exact path="/"/>
    <Route component={Hats} exact path="/shop/hats"/>
    </div>
  );
}

export default App;
