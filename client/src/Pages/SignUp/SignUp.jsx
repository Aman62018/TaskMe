import React, { useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import PasswordInput from "../../component/Input/PasswordInput";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/helper";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name) {
      setError("Please Enter Your Name");
      return;
    }

    if (!validateEmail(email)) {
      setError("please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("please enter the password");
      return;
    }
    setError("");
  };

  return (
    <>
      <Navbar />

      <div className="flex items-center justify-center mt-6">
        <div className="w-96 rounded-sm border bg-white px-7 py-7">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7">SignUp</h4>
            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm pb-1">{error}</p>}

            <button type="submit" className="btn-primary">
              Create Account
            </button>
            <p className="text-sm text-center mt-4">
              Already have an account?{""}
              <Link to="/login" className="font-medium underline text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
