import React from 'react';

 
const SignUp = ()=>
{
    return(
     <>
        <div  className="main-signup">
            <div className="top">
                <h1>Sign Up</h1>
                <div style={{float:'right', marginTop:'-40px'}}><i  className="fas fa-times"></i></div>
            </div>
            <div className="middle">
            <div id="form-part-two">
              <form>
                  <input type="text" placeholder="Full Name"  id="name"  />
                 <input type="email" placeholder="Email"  id="mailId"/>
                 <input type="text"  placeholder="Phone Number" id="Phone" />
                 <input type="password" placeholder="password" id="Password"  />
                 <input type="password" placeholder="Confirm password"  id="confirmPass" />
                <p style={{fontSize:'15px'}}>By registering you agree to the,
                <a href="_blank">Terms </a>  and  
                <a href="_blank"> conditions  </a>
                and 
                <a href="_blank">privacy policy</a>  
                </p>
                
                 <button id ="Btn2">Register as Candidate</button>
              </form>
              </div>
            </div>
            <div className="bottom">
                <p style={{textAlign:"center",fontSize:'16px'}}>Already have an account? <a href="_blank">Login</a></p>
            </div>

         
      </div>
     </>
   )
}

export default SignUp;