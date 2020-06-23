import React, {useEffect} from "react";

const Registration = () => {
    let form = {"username": "", "password": ""};

    function sendRegistrationRequest(input, responseField) {
        fetch('http://localhost:8080/auth/register-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        })
            .then(response => response.json())
            .then(response => {
                if (response.response === "Successful Registration") {
                    alert("Successful registration");
                    window.location.href = '/';
                } else {
                    responseField.innerText = response.response;
                }

            });
    }

    useEffect(() => {

        let serverResponseField = document.getElementById("server-response");
        const userNameField = document.querySelector(".user-name")
        const passwordField = document.querySelector(".password-field")
        const registrationButton = document.querySelector(".registration-trigger")

        registrationButton.addEventListener("click", function (event) {
            event.preventDefault();
            form.username = userNameField.value;
            form.password = passwordField.value;
            sendRegistrationRequest(form, serverResponseField);
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
                                    <h5 id="server-response" style={{color: "red"}}>resp</h5>
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
                                            type="password"
                                            name="password"
                                            id="password"
                                            className="form-control password-field"
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
