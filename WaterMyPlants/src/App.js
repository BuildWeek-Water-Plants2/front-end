import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "./Components/Nav_Components/Theme";
import PrivateRoute from "./Utils/PrivateRoute";

//Component links
import Login from "./Components/Login_Components/Login";
import Signup from "./Components/Login_Components/Signup";
import PlantCreation from "./Components/Plant_Components/PlantCreation";
import Home from "./Components/Home_Components/Home";
import HomeAllPlants from "./Components/Home_Components/HomeAllPlants";
import SearchAppBar from "./Components/Nav_Components/Nav";
import userProfile from "./Components/Update-User/User";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <SearchAppBar />
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/Signup" component={Signup} />
            <PrivateRoute
              exact
              path="/HomeAllPlants"
              component={HomeAllPlants}
            />
            <PrivateRoute
              exact
              path="/PlantCreation"
              component={PlantCreation}
            />

            <PrivateRoute exact path="/UserProfile" component={userProfile} />
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
