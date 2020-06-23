import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const Registration = () => {

    useEffect(() => {

        const userName = document.querySelector(".user-name")
        const registrationButton = document.querySelector(".registration-trigger")

        registrationButton.addEventListener("click", function (event) {
            event.preventDefault();
            console.log(userName.value);
        })



    }, [])

    return (
        <React.Fragment>
            <div id="registration">
                <h3 className="text-center text-white pt-5">Registration form</h3>
                <div className="container">
                    <div
                        id="registration-row"
                        className="row justify-content-center align-items-center"
                    >
                        <div id="registration-column" className="col-md-6">
                            <div id="registration-box" className="col-md-12">
                                <form id="registration-form" className="form" action="" method="post">
                                    <h3 className="text-center text-info">Registration</h3>
                                    <div className="form-group">
                                        <label htmlFor="username" className="text-info">
                                            Username:
                                        </label>
                                        <br />
                                        <input
                                            autoComplete="off"
                                            type="text"
                                            name="username"
                                            id="username"
                                            className="form-control user-name"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="text-info">
                                            Password:
                                        </label>
                                        <br />
                                        <input
                                            type="text"
                                            name="password"
                                            id="password"
                                            className="form-control password"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <br />
                                        <input
                                            type="submit"
                                            name="submit"
                                            className="btn btn-info btn-md registration-trigger"
                                            value="Register"
                                        />
                                    </div>
                                    <div id="register-link" className="text-right">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Registration;
