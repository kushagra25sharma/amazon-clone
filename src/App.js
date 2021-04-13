import { useEffect } from "react";
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Payment from "./components/Payment/Payment";


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      //console.log(authUser);
      if(authUser){
        /// user logged in or he is already logged in
        dispatch({ type: "SET_USER", user: authUser});
      } else {
        // user logged out
        dispatch({ type: "SET_USER", user: null});
      }
    })
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route>
            <Header />
            <Payment />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
