import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar_login, Navbar_dashboard } from "./Navbar";
import Hero from "./Hero";
import { Cards_login, Cards_dashboard } from "./Cards";
import Shop from "./Shop";
import Map from "./Map";
import { Homepage_SignUp, Homepage_Login } from "./Homepage"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div>
              <Navbar_login />
              <Hero />
              <Cards_login />
            </div>
          }
        ></Route>
        <Route path="/signin" element={
          <div>
            <Homepage_SignUp />
          </div>}>
        </Route>
        <Route path="/login" element={
          <div>
            <Homepage_Login />
          </div>}>
        </Route>
        <Route
          path="/dashboard"
          element={
            <div>
              <Navbar_dashboard />
              <Cards_dashboard />
            </div>
          }
        ></Route>
        <Route
          path="/shop"
          element={
            <div>
              <Navbar_dashboard />
              <Shop />
            </div>
          }
        ></Route>
        <Route
          path="/map"
          element={
            <div>
              <Navbar_dashboard />
              <Map />
            </div>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
