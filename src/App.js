import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { UserContextProvider } from "./contexts/UserContext";
import { FilterContextProvider } from "./contexts/FilterContext";

import Home from "./pages/Home";
import HouseDetail from "./pages/DetailHouse";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Booking from "./pages/Booking";
import History from "./pages/History";
import AddProperty from "./pages/AddProperty";

function App() {
  return (
    <div className="App">
      <Router>
      <FilterContextProvider>
        <UserContextProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/guest">
              <Home />
            </Route>
            <Route exact path="/house-detail/:id">
              <HouseDetail />
            </Route>
            <Route exact path="/me">
              <Profile />
            </Route>
            <Route exact path="/my-booking">
              <Booking />
            </Route>
            <Route exact path="/my-history">
              <History />
            </Route>
            <Route exact path="/add-property">
              <AddProperty />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </UserContextProvider>
      </FilterContextProvider>
    </Router>
    </div>
  );
}

export default App;
