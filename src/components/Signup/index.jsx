import { useEffect, useState } from "react";
import styles from "./Signup.module.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import { Modal, Button } from "react-bootstrap";

const Signup = ({ showModal, onHide, onHere }) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");

  const [emailWarning, setEmailWarning] = useState(false);

  useEffect(() => {
    isEmail(email);
  }, [email]);

  const isEmail = (email) => {
    if (email === "") {
      setEmailWarning(false);
      return;
    }
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // const emailRegex =
    // /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const res = emailRegex.test(email);
    if (res) {
      setEmailWarning(false);
    } else {
      setEmailWarning(true);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();

    console.log({
      fullname,
      username,
      email,
      password,
      phoneNumber,
      gender,
      address,
    });
  };

  return (
    showModal && (
      <>
        <div className={styles.signupModal}>
          <form className={styles.signupForm}>
            <div className={styles.centerWrapper}>
              <p className={styles.modalTitle}>Sign up</p>
            </div>
            <label className={styles.inputLabel}>Fullname</label>
            <input
              className={styles.inputField}
              type="text"
              name="fullname"
              id="fullname"
              value={fullname}
              onChange={(e) => {
                setFullname(e.target.value);
              }}
            />

            <label className={styles.inputLabel}>Username</label>
            <input
              className={styles.inputField}
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />

            <label className={styles.inputLabel}>Email</label>
            <input
              className={styles.inputField}
              style={{
                border: emailWarning
                  ? "2px solid red"
                  : "2px solid rgba(210, 210, 210, 0.25)",
              }}
              // style={emailWarning && { border: "2px solid red" }}
              type="email"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className={styles.inputLabel}>Password</label>
            <input
              className={styles.inputField}
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <label className={styles.inputLabel}>Phone Number</label>
            <input
              className={styles.inputField}
              type="number"
              name="phonenumber"
              id="phonenumber"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
            />

            <label className={styles.inputLabel}>Gender</label>
            <div className={styles.genderRadio}>
              <div>
                <input
                  type="radio"
                  value="Male"
                  id="male"
                  name="gender"
                  // value={gender}
                  onClick={() => {
                    setGender("Male");
                  }}
                />
                <label htmlFor="male">Male</label>
              </div>

              <div>
                <input
                  type="radio"
                  value="Female"
                  id="female"
                  name="gender"
                  // value={gender}
                  onClick={() => {
                    setGender("Female");
                  }}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>

            <label className={styles.inputLabel}>Alamat</label>
            <textarea
              className={styles.inputAddress}
              name="address"
              id="address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />

            <input
              type="submit"
              className={styles.signupButton}
              value="Sign up"
              onClick={handleSignup}
            />
            <div className={styles.centerWrapper}>
              <p className={styles.signupText}>
                Already have an account ? Click
                <label
                  className={styles.hereButton}
                  onClick={() => {
                    onHide();
                    onHere();
                  }}
                >
                  Here
                </label>
              </p>
            </div>
          </form>
        </div>
        <div className={styles.background} onClick={onHide}></div>
      </>
    )
  );
};

export default Signup;
