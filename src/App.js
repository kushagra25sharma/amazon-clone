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
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51IfoJCSDFSYimKudw4TYmdZtU5shtlbgTDAxhVmCBoHwm0Djx4RH2NRd0a9M6yoFX8o9qhkH6esNToHPgB8oVK0w00QC81O19t");

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
  }, [dispatch]);
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
            {/* higher order element wraps Payment element */}
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
