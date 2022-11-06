import React, { useRef } from "react";
import { useState } from "react";
import axios from "axios";
//import { Link, useNavigate } from "react-router-dom";

// react-bootstrap components

const TableList  =  () => {
  

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ref = useRef(false) ;
  var isAdmin = ref.current.checked
  console.log(ref.current.checked)
  


  const registerHandler = async (e) => {
    e.preventDefault();

    const config = {
      Headers: {
        "Content-Type": "application/json",
      },
    };

   
    var student1 = "635e7515f01ba8cae75025fa"
   

    try {
      const { data } = await axios.post(
        
        "http://localhost:5000/api/user/register",
        {
          username,
          firstname,
          lastname,
          email,
          password,
          isAdmin,
          student1
        },
        config
      );
      

      localStorage.setItem("authToken", data.token);

      navigate("/login");
    } catch (error) {
      
      setTimeout(() => {
        
      }, 5000);
    }
  };


  return (
    <div className="main">
      {/* <input type="checkbox" id="chk" aria-hidden="true" /> */}
      <div className="signup">
        <form onSubmit={registerHandler}>
          
          <label htmlFor="chk" aria-hidden="true">
            Sign up
          </label>
          <input
            type="text"
            required
            id="name"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            required
            id="name"
            placeholder="Enter firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            type="text"
            required
            id="name"
            placeholder="Enter lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          
          <input
            type="email"
            required
            id="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            id="password"
            autoComplete="true"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            ref={ref}
            type="checkbox"
            id="admin"
            
            
            
          /> 
          


          

          
         
          <span className="register-screen__subtext">
            Already have an account?
          </span>
          <button type="submit">Sign up</button>
          
        </form>
      </div>
      
    </div>
  
  );
}

export default TableList;
