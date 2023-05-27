import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login() {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [id, setId] = useState("");
    const [login, setLogin] = useState([]);

    let history = useHistory();
    const win = window.sessionStorage;

    function checkUser(e) {
        e.preventDefault();

        // validate user
        axios.get(`https://culturalvoyagesl-backend-plcp.onrender.com/login/login/${Email}/${Password}`)
            .then((response) => {
                console.log(response.data);
                setLogin(response.data.login);
                console.log(response.data.data[0]._id);

                if (response.data.data.length === 0) {
                    alert("User not available");
                } 
                else{
                    console.log(response.data.data[0].Email)
                    if (response.data.data[0].Email === "admin@gmail.com") {
                        alert("Admin login successful!");
                        win.setItem('Email', Email);
                        win.setItem('_id', id);
                    
                        history.push("/admin");
                        window.location.reload();
                    } 
                    else {
                        alert("User login successful!");
                        win.setItem('Email', Email);
                        win.setItem('_id', id);
                    
                        history.push("/home");
                        window.location.reload();
                    }
                }
                
            }).catch((err) => {
                // alert(err.response.data.error);
                alert("User not available");
            });
    }

    return (
        <div>
            <br /><br /><br /><br /><br /><br /><br /><br />
            <div className="container">
                <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
                    <div className="img-left d-none d-md-flex">
                        <img src="https://e0.pxfuel.com/wallpapers/260/280/desktop-wallpaper-sigiriya-rock-srilanka-wonders-of-the-world-world-heritage-sites-sri-lanka-thumbnail.jpg" width="350px" height="350px" />
                    </div>
                    <div className="card-body mt-4">
                        <h4 className="title text-center mt-5 mb-3">Login</h4>
                        <form className="form-box px-3" onSubmit={checkUser}>

                            <div className="form-input form-group col-sm mb-3">
                                <input
                                    type="email"
                                    class="form-control formInput"
                                    id="email"
                                    name="email"
                                    placeholder="E-mail"
                                    // tabindex="4"
                                    required
                                    onChange={(e) => {
                                        console.log("set email");
                                        setEmail(e.target.value); // assign value
                                    }}
                                />
                            </div>

                            <div className="form-input form-group col-sm mb-3">
                                <input
                                    type="password"
                                    class="form-control formInput"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    // tabindex="4"
                                    required
                                    onChange={(e) => {
                                        console.log("set passwword");
                                        setPassword(e.target.value); // assign value
                                    }}
                                />
                            </div>

                            <div className="mb-3">
                                <button
                                    type="submit"
                                    className="btn btn-outline-success text-uppercase"
                                >
                                    Login
                                </button>
                            </div>
                            <div className="center ml-6">
                                <p >
                                    New Member ? <a href="/register" class="link-success">Sign Up</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
