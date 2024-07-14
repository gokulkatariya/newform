import React from "react";
import { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        user: "",
        email: "",
        number: "",
        address: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="main">
            <div className="sub-main">
                <div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h1>Signup </h1>
                            <div>
                                <input
                                    type="user"
                                    placeholder="username"
                                    onChange={handleChange}
                                />
                                <br />
                            </div>
                            <div className="second-input">
                                <input
                                    type="email"
                                    placeholder="email"
                                    onChange={handleChange}
                                />
                                <br />
                            </div>
                            <div className="third-input">
                                <input
                                    type="number"
                                    placeholder="number"
                                    onChange={handleChange}
                                />
                                <br />
                            </div>
                            <div className="five-input">
                                <input
                                    type="address"
                                    placeholder="address"
                                    onChange={handleChange}
                                />
                                <br />
                            </div>
                            <div className="signup-button">
                                <button type="submit">Signup</button>
                            </div>
                            <p className="link">
                                <a href="/">Forgot password </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Form;
