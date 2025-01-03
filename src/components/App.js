import React, { useState } from "react";

const data = [
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
];

const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userError, setUserError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Reset errors
        setUserError("");
        setPasswordError("");

        // Find user by email
        const user = data.find((user) => user.email === email);

        // Simulate timeout
        setTimeout(() => {
            if (!user) {
                setUserError("User not found");
            } else if (user.password !== password) {
                setPasswordError("Password Incorrect");
            } else {
                console.log(user); // Successfully logged in, log user data
            }
        }, 3000);
    };

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        id="input-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="user-error" style={{ color: "red" }}>
                        {userError}
                    </div>
                </div>

                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        id="input-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div id="password-error" style={{ color: "red" }}>
                        {passwordError}
                    </div>
                </div>

                <button id="submit-form-btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default App;
