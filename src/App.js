import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import SHOPPAGE from "./pages/shop/shop.component.jsx";
import Header from "./components/header.component/header.component.jsx";
function App() {
  return (
    <div>
      <Header/>
        <Switch>
          <Route component={HomePage} exact path="/" />
          <Route component={SHOPPAGE} exact path="/shop" />
        </Switch>
    </div>
  );
}

export default App;
