import {useState} from "react";
import type {FormEvent} from "react";

export function RegistrationForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.error("Passwords do not match");
            return;
        }   
    console.log("Email:", email);
    console.log("Password:", password.length>0);
    console.log("Confirm Password:", confirmPassword.length>0);
    };

    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <div>   
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}  
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>  
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={!email.trim() || !password.trim() || !confirmPassword.trim()}>Register</button>
            </form> 
            <div>
                <h3>Live preview</h3>
                <p>Email: {email}</p>
                <p>Password: {password.length > 0 ? "Entered" : "Not entered"}</p>
                <p>Confirm Password: {confirmPassword.length > 0 ? "Entered" : "Not entered"}</p>
            </div>
        </div>
    );
}