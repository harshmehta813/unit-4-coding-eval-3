import "./styles.css";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { useSelector } from "react-redux";

export default function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);
  return isAuth ? (
    <div className="App">
      <Navbar />
    </div>
  ) : (
    <Login />
  );
}
