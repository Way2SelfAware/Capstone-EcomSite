// React Hooks
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// My Components
import { userLogin } from "../../API/apiEndpoints";

const Login = () => {
  const [username, setUsername] = useState("mor_2314");
  const [password, setPassword] = useState("83r5^_");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

const handleLogin = async () => {
  try {
    const response = await userLogin(username, password);
    if (response.token) {
      // Store the user token in local storage
      localStorage.setItem("userToken", response.token);

      // Redirect to the cart page or another authorized page
      navigate("/cart");
    } else {
      // Handle login failure
      setLoginError("Invalid username or password");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    setLoginError("An error occurred while logging in");
  }
};

  return (
    <div className="login-form">
      <p>
        This is a demo, please use these credentials to login: Username:
        mor_2314 Password: 83r5^_
      </p>
      <p>Username:</p>
      <input
        type="text"
        placeholder="mor_2314"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p>Password:</p>
      <input
        type="password"
        placeholder="83r5^_"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {loginError && <p>{loginError}</p>}
    </div>
  );
};

export default Login;
