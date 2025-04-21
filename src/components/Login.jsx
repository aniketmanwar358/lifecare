import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import "./Login.css"; // Import CSS file

const images = ["/image_1.jpeg", "/image_2.jpeg", "/image_3.jpeg"];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      console.error(error.message);
      if (error.code === "auth/user-not-found") {
        alert("User not found. Please check your email or sign up.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
      } else if (error.code === "auth/invalid-email") {
        alert("Invalid email format. Please enter a valid email.");
      } else {
        alert("Login failed: " + error.message);
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("/");
    } catch (error) {
      console.error(error.message);
      alert("Google login failed: " + error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to LifeCare</h1>
      <div className="login-maincontainer">
        <div className="login-container">
          <div className="slider">
            <img src={images[currentImage]} alt="Health Banner" />
          </div>
          <div className="login-box">
            <h2>Welcome to Health App</h2>
            <p className="sub-text">Your personal healthcare assistant</p>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
            <button className="google-btn" onClick={handleGoogleLogin}>
              Login with Google
            </button>
            <p>
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
