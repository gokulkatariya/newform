import "./App.css";
import profile from "./a.png";

function App() {
  return (
    <>
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div>
              <h1>Signup Page</h1>
              <div>
                <input type="text" placeholder="User name" className="name"/>
              </div>
              <div className="second-input">
                <input type="email" placeholder="Email id" className="name"/>
              </div> 
              <div className="third-input">
                <input type="password" placeholder="Password" className="name"/>
              </div>
              <div className="four-input">
                <input type="contact" placeholder="contact" className="name"/>
              </div>
              <div className="five-input">
                <input type="address" placeholder="address" className="name"/>
              </div>
              <div className="login-button">
                <button>Signup</button>
              </div>

              <p className="link">
                <a href="/">Forgot password </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
