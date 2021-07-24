import React from 'react';


const Card = ()=>
{
    return(
        <>
      <div  className="main-login">
         <div className="top-part">
             <div  className="heading">
                 <h1>Login</h1> 
                 <div style={{float:'right', marginTop:'-40px'}}><i  className="fas fa-times"></i></div>
                 {/* <span><i class="fas fa-times"></i></span>  */}
                
             </div>
             
          <div className="googles">
             <img className="imges"  src="https://image.flaticon.com/icons/png/128/2702/2702602.png" alt="g-logo" />
             <p >Continue with Google </p>
          </div>
          <div className="linked">
              <img  className="imges"src="https://image.flaticon.com/icons/png/128/174/174857.png" alt="l-logo" />
            <p>Continue with LinkedIn</p>
          </div>
          </div>
           
           


          <div className="middle-part">
              <div id="form-part">
              <form>
                 <input type="email" placeholder="Email"  id="mail"/>
                 <input type="password" placeholder="password" id="pass"  />
                 <button id ="btn">Login</button>
              </form>
              </div>
          </div>
          <div className="bottom-part">
              <div id="bottom">
              <p>Forgot Your Password?</p>
              <p>Don't have an account yet? <a href="_blank">Register</a></p>
              </div>
          </div>

      </div>
       


        </>
    )
}
export default Card;