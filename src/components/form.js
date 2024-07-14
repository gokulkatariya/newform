import React from 'react'
// import profile from 'D:/Reactsignupform/my-app/src/components/a.png';
import { useState } from 'react'

function Form() {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = () => {
        fetch('', {
            method: 'POST',
            body: JSON.stringify({
                User: user,
                Email: email,
                Number: number,
                Address: address,
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
                    <div>
                        <h1>Signup </h1>
                        <div>
                            <input type="text" placeholder="username" value={user} onChange={(e) => setUser(e.target.value)} />
                        </div>
                        <div className="second-input">
                            <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="third-input">
                            <input type="contact" placeholder="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                        </div>
                        <div className="five-input">
                            <input type="massege" placeholder="address" value={address} onChange={(e) => setAddress(e.target.value)} />
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
