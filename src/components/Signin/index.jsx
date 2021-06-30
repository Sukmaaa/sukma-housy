import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Signin.module.css";

import { users } from "../../constants/users";
import { UserContext } from "../../contexts/UserContext";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Modal, Button } from "react-bootstrap";

const Signin = ({ showModal, onHide, onHere }) => {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });

  const { state, dispatch } = useContext(UserContext);

  // console.log(state);

  const [warning, setWarning] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();

    const userAuth = users.filter((user) => {
      return (
        user.username === userInput.username &&
        user.password === userInput.password
      );
    });

    if (userAuth.length > 0) {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          id: userAuth[0].id,
          fullname: userAuth[0].fullname,
          username: userAuth[0].username,
          password: userAuth[0].password,
          email: userAuth[0].email,
          gender: userAuth[0].gender,
          address: userAuth[0].address,
          phone: userAuth[0].phone,
          status: userAuth[0].status,
          booking: userAuth[0].booking,
        })
      );

      dispatch({
        type: "LOGIN",
        payload: {
          user: {
            id: userAuth[0].id,
            fullname: userAuth[0].fullname,
            username: userAuth[0].username,
            password: userAuth[0].password,
            email: userAuth[0].email,
            gender: userAuth[0].gender,
            address: userAuth[0].address,
            phone: userAuth[0].phone,
            status: userAuth[0].status,
            booking: userAuth[0].booking,
          },
        },
      });

      console.log("stata?", state.user);

      if (!localStorage.getItem("order")) {
        localStorage.setItem("order", JSON.stringify([]));
      }

      if (!localStorage.getItem("history")) {
        localStorage.setItem("history", JSON.stringify([]));
      }

      setWarning(false);
      onHide();

      // localStorage.setItem("userData", JSON.stringify(userAuth[0]));
      // console.log("success");
    } else {
      setWarning(true);
    }

    // // localStorage.setItem("password", password);
  };

  return (
    showModal && (
      <>
        <div className={styles.signinModal}>
          <form className={styles.signinForm}>
            <div className={styles.centerWrapper}>
              <p className={styles.modalTitle}>Sign in</p>
            </div>
            <label className={styles.inputLabel}>Username</label>
            <input
              className={styles.inputField}
              type="text"
              value={userInput.username}
              name="username"
              id="username"
              onChange={(e) =>
                setUserInput({ ...userInput, username: e.target.value })
              }
            />
            <label className={styles.inputLabel}>Password</label>
            <input
              className={styles.inputField}
              type="password"
              value={userInput.password}
              name="password"
              id="password"
              onChange={(e) =>
                setUserInput({ ...userInput, password: e.target.value })
              }
            />
            <Link to="/">
              <input
                type="submit"
                className={styles.signinButton}
                value="Sign in"
                onClick={handleSignin}
              />
            </Link>

            {warning && (
              <div className={styles.centerWrapper}>
                <span className={styles.warning}>
                  Username or Password is wrong!
                </span>
              </div>
            )}

            <div className={styles.centerWrapper}>
              <p className={styles.signupText}>
                Don't have an account? ? Click
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

export default Signin;
