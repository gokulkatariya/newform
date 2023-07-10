import React from 'react'
import profile from 'D:/Reactsignupform/my-app/src/components/a.png';
import { useState } from 'react'

function Form() {
    const [User_name, setText] = useState("");
    const [Email, setEmail] = useState("");
    const [Contect_No, setNumber] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = () => {
        fetch('http://127.0.0.1:8000/sign_up/', {
            method: 'POST',
            body: JSON.stringify({
                User_Name: User_name,
                Email: Email,
                Contect_No: Contect_No,
                address: address,
            }),
            headers: {
                'Content-type': 'application/json;',
                
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


    return (
        <div className="main" >
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
                            <input type="text" placeholder="username" className="name" value={User_name}onChange={(e) => setText(e.target.value)}/>

                        </div>
                        <div className="second-input">
                            <input type="email" placeholder="email" className="name" value={Email}onChange={(e) => setEmail(e.target.value)}
                                />
                                {/* # onChange={(e) => setEmail(e.target.value)}  */}

                        </div>
                        <div className="third-input">

                            <input type="number" placeholder="number" className="name" value={Contect_No} onChange={(e) => setNumber(e.target.value)}/>
                        </div>
                       
                        <div className="five-input">
                            <input type="massege" placeholder="address" className="name" value={address}onChange={(e) => setAddress(e.target.value)} />
                        </div>
                        <div className="signup-button">
                            <button type="submit" onClick={handleSubmit}>Signup</button>
                        </div>

                        <p className="link">
                            <a href="/">Forgot password </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Form;
