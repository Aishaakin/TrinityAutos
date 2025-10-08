import styles from "../styles/createaccount.module.css";
import "../assets/Icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, fab);
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateAccount() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    setErrors({ email: "", password: "", name: "" });
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(false);
    setLoading(true);
    console.log("Form submitted");
    let valid = true;
    const newErrors = { email: "", password: "", name: "" };

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (formData.name.trim() === "" || formData.name.length < 6) {
      newErrors.name =
        "Please enter your full name and must be atleast 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    // POST PUT PATCH GET DELETE
    if (valid) {
      await axios
        .post("https://jsonplaceholder.typicode.com/users", {
          fullName: formData.name,
          email: formData.email,
          password: formData.password,
        })
        .then((response) => {
          console.log(response);
          alert("Your Account is registered successfully!");
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          alert(error.message);
        })
        .finally(() => setLoading(false));
    }
  };

  return (
    <div className={styles.createaccount}>
      <div className={styles.create_container}>
        <h5>Create An Account</h5>
        <p>Create An Account instantly</p>

        <form onSubmit={handleSubmit} className={styles.form_create}>
          <label>Full Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
          <span id="name-error" className={styles.error}>
            {errors.name}
          </span>

          <label>Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@gmail.com"
            value={formData.email}
            onChange={handleChange}
          />
          <span id="email-error" className={styles.error}>
            {errors.email}
          </span>

          <label>Password:</label>
          <div className={styles.passwordField}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              className={styles.eyeIcon}
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
          <span id="password-error" className={styles.error}>
            {errors.password}
          </span>

          <button type="submit" className={styles.create_account_button}>
            {loading ? "Loading..." : "Create Account"}
          </button>
        </form>

        <h6>OR</h6>
        <div className="icon_container">
          <FontAwesomeIcon className={styles.google} icon={["fab", "google"]} />
          <FontAwesomeIcon
            className={styles.facebook}
            icon={["fab", "facebook"]}
          />
        </div>
      </div>
    </div>
  );
}
