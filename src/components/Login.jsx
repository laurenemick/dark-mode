import React from 'react';
import Navbar from "./Navbar"
import { useForm } from "../hooks/useForm";

const initialValues = {
    username: '',
    password: '',
  }

const Login = () => {
    const [signupFormValues, handleChanges, clearForm] = useForm(
        "loginform",
        initialValues
      );

      const handleSubmit = e => {
        e.preventDefault();
        alert(signupFormValues.username);
      };
    
    return (
        <div>
            <Navbar />
            <form style={{margin:"5%"}} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={signupFormValues.username}
                    onChange={handleChanges}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={signupFormValues.password}
                    onChange={handleChanges}
                />
                <button>Log In</button>
            </form>
        </div>
    )
};
export default Login;