import React, { useEffect, useState } from 'react';

const SignupForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();


    }

    return (
        <form onSubmit={onSubmit}>
            <h1>Join our community!</h1>
            <div className="form-group">
                <label className="control-label">Username</label>

                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    name="username"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label className="control-label">Email</label>

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label className="control-label">Password</label>

                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <label className="control-label">Password Confirmation</label>

                <input
                    value={passwordConfirmation}
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    type="password"
                    name="passwordConfirmation"
                    className="form-control"
                />
            </div>

            <div className="form-group">
                <button className="btn btn-primary btn-lg">
                    Sign up
                </button>
            </div>
        </form>
    );
}

export default SignupForm;