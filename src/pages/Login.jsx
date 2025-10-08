import '../assets/Icons/icons';
import styles from '../styles/login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
library.add(fas, fab);

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors({ email: "", password: "" });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const newErrors = { email: "", password: "" };
  let valid = true;

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
    valid = false;
  }

  if (formData.password.length < 6) {
    newErrors.password = "Password must be at least 6 characters";
    valid = false;
  }

  setErrors(newErrors);

  if (!valid) {
    setLoading(false);
    return;
  }

  try {
    const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
      email: formData.email,
      password: formData.password,
    });
    console.log(response);
    alert("You are logged in successfully!");
    navigate("/blog"); 
  } catch (error) {
    console.error(error);
    alert(error.message);
  } finally {
    setLoading(false);
  }
};


  return (
    <div className={styles.login}>
      <div className={styles.login_container}>
        <h5>Log In</h5>
        <p>Log into your Account</p>
        <form onSubmit={handleSubmit} className={styles.form_create}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="johndoe@gmail.com"
            onChange={handleChange}
          />
          <span className={styles.error}>{errors.email}</span>

          <label>Password:</label>
          <div className={styles.passwordField}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className={styles.eyeIcon}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
          <span className={styles.error}>{errors.password}</span>

          <button
            type="submit"
            className={styles.create_account_button}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <h6>OR</h6>
        <div className="icon_container">
          <FontAwesomeIcon className={styles.google} icon={['fab', 'google']} />
          <FontAwesomeIcon className={styles.facebook} icon={['fab', 'facebook']} />
        </div>
      </div>
    </div>
  );
}
