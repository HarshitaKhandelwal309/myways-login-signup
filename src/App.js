import React from "react";
import './App.css';
import Nav from "./navigation";
import Card  from "./login-cards";
import SignUp from "./signup-cards";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
   <Nav/>
 <div className = "blackish">
   <div id="LoginForm">
   <Card/>
   
   </div>

   <div id="signupForm">
   <SignUp/>
   </div>

 </div>

   </>
  );
}

export default App;
