import React from "react";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/auth/action";

function Login() {
  const dispatch = useDispatch();

  const handleAdd = () => {
    const action = loginSuccess(Date.now());
    dispatch(action);
  };
  return (
    <>
      <h2>Login</h2>
      <button onClick={handleAdd}>Click here to Login!</button>
    </>
  );
}

export default Login;
