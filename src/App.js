import "./styles.css";
import { Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Search from "./Components/Search";
import { useSelector } from "react-redux";

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return isAuth ? (
    <div className="App">
      <Navbar />
      <Route exact path="/search">
        <Search />
      </Route>
    </div>
  ) : (
    <Route exact path="/login">
      <Login />
    </Route>
  );
}
