import { useState, useEffect } from "react";

import axios from "axios";
import { Link , useHistory , Route, withRouter} from "react-router-dom";

import "./login.css";

const Login = ( ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const navigate = useHistory();

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/user/login",
        { email, password },
        
        config
      );
   
      console.log(email)
      console.log(data)
      
      





      //localStorage.setItem("authToken", data.token);
      
      
      //var test = json.user; 
      
      
      //if (obj)
      //navigate.push("/admin");
      
    } catch (error) {
      //setError(error.response.data.error);


      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
   

<div class="container" id="container">
<h2>Weekly Coding Challenge #1: Sign in/up Form</h2>

	<div class="form-container sign-in-container">
		<form onSubmit={loginHandler}>
			<h1>Sign in</h1>
			<input type="email" placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            tabIndex={1}/>
			<input type="password" placeholder="Password"
             onChange={(e) => setPassword(e.target.value)}
             value={password}
             tabIndex={2} />
			<a href="#">Forgot your password?</a>
			<button type="submit">Sign In </button>
		</form>
	</div>
	<div class="overlay-container">
		<div class="overlay">
			<div class="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button class="ghost" id="signIn">Sign In</button>
			</div>
			<div class="overlay-panel overlay-right">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7etak9qXE6N8Jbkl13RwxgmjYAZhC8Uchbg&usqp=CAU"></img>

			</div>
		</div>
	</div>
</div>
  );
}

export default Login;

